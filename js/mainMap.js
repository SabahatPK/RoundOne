MapChart = function(_parentElement, _featuresData, _meshData) {
  this.parentElement = _parentElement;
  this.pakFeaturesData = _featuresData;
  this.pakMeshData = _meshData;
  this.initVis();
};

//Wishlist - click on province to isolate that data in area charts.

MapChart.prototype.initVis = function() {
  let vis = this;

  (vis.width = 800), (vis.height = 800);

  vis.projection = d3
    .geoMercator()
    .scale(2500)
    .translate([vis.width / 2, vis.height / 2])
    .precision(0.1)
    .center([67, 30]);

  vis.path = d3.geoPath().projection(vis.projection);

  vis.svg = d3
    .select(vis.parentElement)
    .append("svg")
    .attr("width", vis.width)
    .attr("height", vis.height);

  vis.svg
    .append("path")
    .attr("fill", "#CC5803")
    .datum(vis.pakFeaturesData)
    .attr("class", "land")
    .attr("d", vis.path)
    .attr("opacity", 0.35)
    .attr("stroke", "black")
    .attr("stroke-width", "1px");

  vis.svg
    .append("path")
    .datum(vis.pakMeshData)
    .attr("class", "boundary")
    .attr("d", vis.path)
    .attr("stroke", "black")
    .attr("stroke-width", "0.5px")
    .attr("fill", "none");
};

MapChart.prototype.wrangleData = function() {
  let vis = this;
};

MapChart.prototype.updateVis = function() {
  let vis = this;
};