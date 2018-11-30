//Loadconfiguration 


const ora = require('ora');
const chalk = require('chalk');
const webpack = require('webpack');

const fs = require("fs");
const request = require("request");
const archiver = require('archiver');

const bootstrapJs = "bootstrap.js";
const webpackConfig = require("../webpack.config.js");
const config = require('./config');

// webpackConfig.optimization.minimize = true;
// webpackConfig.devtool = "";


build()
    .then(install)
    .catch((err) => {
      console.log(chalk.red(err));
    });

function build() {

  return new Promise((resolve, reject) => {

    const spinner = ora('building for production...');
    spinner.start();

    webpack(webpackConfig, (err, stats) => {
      spinner.stop();
      if (err)
        return reject(err);

      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n');

      if (stats.hasErrors()) {
        console.log(chalk.red('  Build failed with errors.\n'));
        reject(stats)
      } else {
        console.log(chalk.cyan('  Build complete.\n'));
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ));
        resolve(stats)
      }
    })
  })
}


function install(stats) {

  return new Promise(async (resolve, reject) => {


    const {data: version} = await readFile(config.install.versionfile);
    const [major, minor, build] = version.split('.');
    const currentBuildNumber = parseInt(build) + 1;
    const currentVersion = `${major}.${minor}.${currentBuildNumber}`;
    await writeFile(config.install.versionfile, currentVersion);

    const spinner = ora(`creating installation package v${currentVersion}...`);
    spinner.start();

    try {

      const visualName = config.install.visualConfig.visualName;

      const files = stats.compilation.entrypoints.get(visualName).chunks
          .map(c => c.files)
          .reduce((arr, elem) => arr.concat(elem), []);


      const visualConfig = {
        ...config.install.visualConfig,
        // version: currentVersion,
        version: "1.0.0",//due to bug we dont upgrade the version counter
        scripts: [...files.filter(k => k.indexOf(".js") !== -1), bootstrapJs],
        styles: files.filter(k => k.indexOf(".css") !== -1)
      };

      const output = fs.createWriteStream(config.install.output);
      const archive = archiver('zip', {zlib: {level: 9}});

      output.on('close', function () {
        spinner.stop();
        upload();
      });

      archive.on('warning', (err) => {
        if (err.code !== 'ENOENT')
          reject(err);
      });

      archive.on('error', (err) => {
        reject(err);
      });


      archive.pipe(output);


      archive.append(JSON.stringify(visualConfig), {name: "config.json"});
      //icon.png


      archive.append(fs.createReadStream(config.install.quadrantPropertiesHtml), {name: `quadrant-properties-${visualName}.html`});
      archive.append(fs.createReadStream(config.install.quadrantPropertiesJs), {name: `quadrant-properties-${visualName}.js`});
      archive.append(`namespace("leesa.visual").${visualName} = ${visualName}.default;`, {name: bootstrapJs});
      files.map(f => {
        const fileLocation = config.build.assetsRoot + "/" + f;
        const filename = fileLocation.split("/").pop();
        console.log(`${chalk.gray("location :" + fileLocation + " ")} ${chalk.white("filename: " + filename)}`);
        archive.append(fs.createReadStream(fileLocation), {name: filename});
      });


      archive.finalize();

    } catch (e) {
      spinner.stop();
      reject(e);
    }

    function upload() {

      const spinner2 = ora('installing to giant...');
      spinner2.start();
      try {

        const uri = `${config.install.giantUrl}/api/VisualPack/Upload`;
        const requestObj = {
          method: "post",
          uri: uri,
          headers: {cookie: config.install.authcookie},
          formData: {
            attachments: [fs.createReadStream(config.install.output)]
          }
        };

        const req = request(requestObj, async (err, resp, data) => {
          spinner2.stop();
          if (err) {
            reject(err);
          } else {
            console.log(`${chalk.gray("AplicationName:")} ${chalk.white(config.install.visualConfig.visualName)}`);
            console.log(`${chalk.gray("version:")} ${chalk.white(`v${currentVersion}`)}`);
            console.log(`${chalk.gray("Installer:")} ${chalk.white(config.install.output)}`);
            console.log(`${chalk.gray("ApplicationUrl:")} ${chalk.white(`${config.install.giantUrl}/Visual/${JSON.parse(data)[0]}\n`)}`);
            console.log(chalk.cyan('  Intall to giant complete.\n'));

            // const destination = await uploadFile(cloudBucket, config.install.output.split("\\").pop(),
            //     config.install.output,
            //     `installer/${currentVersion}` + "-", false);
            // console.log(chalk.cyan(`  Visual installer backed up to ${destination}.\n`));

            resolve();
          }
        });
      } catch (e) {
        spinner2.stop();
        reject(e);
      }
    }
  });
}


function readFile(filename, type = 'utf-8') {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, type,
        (err, data) => err
            ? reject(err)
            : resolve({data: data})
    );
  });
}

function writeFile(filename, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, content,
        (err, data) => err
            ? reject(err)
            : resolve({})
    );
  });
}


//BUILD
//Generate Zip FIle
//Deploy to cloud