'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');
const version = "2.1";


module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },


  install: {
    versionfile: path.resolve(__dirname, "../publish/version.txt"),
    output: path.resolve(__dirname, '../dist/visual.zip'),
    visualConfig: {
      "groupId": "eng.8excite",
      "packageId": "eng.8excite.merchantLocationWidget",
      "visualName": "merchantLocationWidget",
      "displayName": "Merchant Location Widget",    
    },
    quadrantPropertiesHtml: path.resolve(__dirname, "../publish/visual/quadrant-properties.html"),
    quadrantPropertiesJs: path.resolve(__dirname, "../publish/visual/quadrant-properties.js"),
    authcookie: "",
    giantUrl: "https://giant2016-csgb.fusionexsite.com/AnalyticsI"
  }
};
