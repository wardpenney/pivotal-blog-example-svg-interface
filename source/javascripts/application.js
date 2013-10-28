//= require vendor/d3.v3
//= require_self

//

(function() {
  d3.selectAll(".tall-block")
    .data([1,2,3,4,5])
    .enter().append("p.tall-block")
      .text(function(d) { return "I’m number " + d + "!"; });

  // var svg = d3.select("#chart-2").append("svg")
      // .attr("width", w)
      // .attr("height", h);

  // var circle = svg.selectAll("circle")
      // .data([32, 57, 293], String);

  // circle.enter().append("circle")
      // .attr("cy", 90)
      // .attr("cx", String)
      // .attr("r", Math.sqrt);

  // circle.exit().remove();
});
