import * as d3 from 'd3-selection';
import "./app.scss";


function getProperties(quadrant) {

  const runtimeConfiguration = {
    jContent: quadrant.htmlJContent(),
    data: quadrant.data(),
    parameters: quadrant.visual().parameters
  };

  return runtimeConfiguration;
}

export default {
  extend(quadrant) {
  },
  render(quadrant, callback) {

    const {jContent, data, parameters} = getProperties(quadrant);

    jContent.html("");
    
    const content = jContent[0];

    //**** SAMPLE IMPLEMENTATION OF A SIMPLE TABLE */
    const {titlePath, descriptionPath, googleMapUrlPath} = parameters;
    const googleMapButtonText = parameters.googleMapButtonText || "Direction";

    const d3Root = d3.select(content)
        .append("div")
        .attr("class", "my-custom-visual")
        .style("height", "100%")
        .style("width", "100%");

    const d3ItemListing = d3Root.append("div").attr("class", "item-listing");
    const d3Item = d3ItemListing.selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "item");

    d3Item.append("div")
        .attr("class", "item__title")
        .append("span")
        .text(d => d[titlePath]);
    d3Item.append("div")
        .attr("class", "item__description")
        .append("span")
        .text(d => d[descriptionPath]);

    d3Item.append("div")
        .attr("class", "item__googleMapUrl")
        .append("a")
        .attr("target", "_blank")
        .attr("href", d => d[googleMapUrlPath])
        .text(googleMapButtonText);
    //**** END OF SAMPLE IMPLEMENTATION OF A SIMPLE TABLE */


    callback(quadrant);
  },
  configuration: {}

}
