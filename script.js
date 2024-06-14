//U61753810
document.addEventListener("DOMContentLoaded", function() {
    const data = [10, 20, 30, 40, 50]; // Example data

    d3.select("body")
        .selectAll(".data-point")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "data-point")
        .on("mouseover", function() {
            d3.select(this).style("background-color", "firebrick");
        })
        .on("mouseout", function() {
            d3.select(this).style("background-color", "lightpurple");
        });
});
