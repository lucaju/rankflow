/*jshint esversion: 6 */

(function (window) {

    function TopTenSentimentVis() {


        this.constructor = function () {

            let windowWidth = (document.body.clientWidth * 2) / 3;
            

            let margin = {
                    top: 30,
                    right: 30,
                    bottom: 30,
                    left: 90
                };

            let width = windowWidth - margin.left - margin.right;
            let height = 180 - margin.top - margin.bottom;

            let svg = d3.select("#top-10-setiment-visualization").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom);

            let g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            let scale = ["", "50%", ""];

            let x = d3.scaleLinear()
                .rangeRound([0, width]);

            let y = d3.scaleBand()
                .rangeRound([0, height])
                .padding(0.2)
                .align(0.1);

            let z = d3.scaleOrdinal()
                .range(["#2c7bb6", "#bcbddc", "#efedf5", "#d7191c"]);

            let stack = d3.stack()
                .offset(d3.stackOffsetExpand);

            d3.csv('data/topTenVideoSentiment.csv')
                .then(function (data) {

                    y.domain(data.map(function (d) {
                        return d.Candidate;
                    }));
                    z.domain(data.columns.slice(1));

                    let serie = g.selectAll(".serie")
                        .data(stack.keys(data.columns.slice(1))(data))
                        .enter().append("g")
                        .attr("class", "serie")
                        .attr("fill", function (d) {
                            return z(d.key);
                        })
                        .style("stroke-width", "2")
                        .style("stroke", "#ffffff");

                    serie.selectAll("rect")
                        .data(function (d) {
                            return d;
                        })
                        .enter().append("rect")
                        .attr("class", "topTenBar")
                        .attr("x", function (d) {
                            return x(d[0]);
                        })
                        .attr("y", function (d) {
                            return y(d.data.Candidate);
                        })
                        .attr("height", y.bandwidth())
                        .on("mouseover", mouseOverHandle)
                        .on("mouseout", mouseOutHandle)
                        // .attr("width", 0)
                        .transition().duration(750).delay(function (d, i) {
                            return 1000 + (i * 200);
                        })
                        .attr("width", function (d) {
                            return x(d[1]) - x(d[0]);
                        });

                    function mouseOverHandle(d) {
                        d3.selectAll(".topTenBar").style("opacity", 0.7);
                        d3.select(this).style("opacity", 1);
                    }

                    function mouseOutHandle() {
                        d3.selectAll(".topTenBar").style("opacity", 1);
                    }

                    g.append("g")
                        .attr("class", "axis axis--x")
                        .style("font", "12px Roboto")
                        .attr("transform", "translate(0," + height + ")")
                        .call(d3.axisBottom(x).ticks(3)
                            .tickFormat(function (d, i) {
                                return scale[i];
                            }));

                    g.append("g")
                        .attr("class", "axis axis--y")
                        .style("font", "12px Roboto")
                        .call(d3.axisLeft(y).tickSize(0));

                    d3.selectAll(".axis--y path").remove();
                    d3.selectAll(".axis--x path").remove();

                    let legend = serie.append("g")
                        .attr("class", "legend")
                        .attr("transform", function (d, i) {
                            return "translate(" + ((width / 6) * (i + 1)) + ", -30)";
                        });

                    legend.append("rect")
                        .attr("width", 15)
                        .attr("height", 15)
                        .attr("fill", function (d) {
                            return z(d.key);
                        });

                    legend.append("text")
                        .attr("x", 18)
                        .attr("y", 8)
                        .attr("dy", "0.35em")
                        .attr("fill", "#000	")
                        .style("stroke-width", "0")
                        .style("font", "12px sans-serif")
                        .text(function (d) {
                            return d.key;
                        });
                });

            function type(d, i, columns) {
                for (let i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
                d.total = t;
                return d;
            }
        };

    }

    $(document).ready(function () {
        topTenSentimentVis.constructor();
    });

    //init
    window.topTenSentimentVis = new TopTenSentimentVis();

})(window); //Pass in a reference to the global window object