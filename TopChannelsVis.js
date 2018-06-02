/*jshint esversion: 6 */

(function (window) {

    function TopChannelsVis() {

        this.topTenData = [];

        this.init = function (data) {

            this.topTenData = data;

            let topTenData = data.slice(0,10);


            //clear
            $("#top-ten-channels").empty();

            // let windowWidth = (document.body.clientWidth * 2) / 3;
            let windowWidth = document.body.clientWidth -100;
            

            let margin = {
                top: 30,
                right: 300,
                bottom: 30,
                left: 90
            };

            // let colour = d3.scaleOrdinal(d3.schemePaired);
            let colour = d3.scaleOrdinal(d3.schemeSet3);

            let width = windowWidth - margin.left - margin.right;
            let height = 300 - margin.top - margin.bottom;
            

            let svg = d3.select("#top-ten-channels").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom);

            var tooltip = d3.select("body").append("div").attr("class", "toolTip");

            var x = d3.scaleLinear().range([0, width]);
            var y = d3.scaleBand().range([height, 0]);

            var g = svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            // d3.json("data.json", function (error, data) {
            //     if (error) throw error;

            //inverse order
            topTenData.sort(function (a, b) {
                return a.numberRecommendations - b.numberRecommendations;
            });

            x.domain([0, d3.max(topTenData, function (d) {
                return d.numberRecommendations;
            })]);

            y.domain(topTenData.map(function (d) {
                return d.name;
            })).padding(0.2);

            g.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                // .call(d3.axisBottom(x).ticks(5).tickFormat(function (d) {
                //     return d;
                // }));
                .call(d3.axisBottom(x).ticks(0).tickFormat(""));

            g.append("g")
                .attr("class", "y axis")
                .call(d3.axisLeft(y).tickSize(0).tickFormat(""));

            let bar = g.selectAll(".bar")
                .data(topTenData)
                .enter()
                .append("g");

            bar.append("rect")
                .attr("class", "bar")
                .attr("fill", function(d) { return colour(d.name); })
                .attr("x", 0)
                .attr("height", y.bandwidth())
                .attr("y", function (d) {
                    return y(d.name);
                })
                // .attr("width", function (d) {
                //     return x(d.numberRecommendations);
                // })
                // .on("mousemove", function (d) {
                //     tooltip
                //         .style("left", d3.event.pageX - 50 + "px")
                //         .style("top", d3.event.pageY - 70 + "px")
                //         .style("display", "inline-block")
                //         .html((d.name) + "<br>" + (d.numberRecommendations));
                // })
                // .on("mouseout", function (d) {
                //     tooltip.style("display", "none");
                // })
                // .on("click", function (d) {
                //     rankFlowVis.showDetails(d);
                // })
                .transition().duration(750).delay(function (d, i) {
                    return i * 100;
                }).attr("width", function (d) {
                    return x(d.numberRecommendations);
                });
            
            bar.append("text")
                .attr("class", "bar-name")
                .attr("x", function (d) {
                    return x(d.numberRecommendations);
                })
                .attr("y", function (d) {
                    return y(d.name);
                })
                .attr("dx", ".35em") //margin right
                .attr("dy", "1.35em") //vertical align middle
                // .attr("text-anchor", "start")
                .style("font", "10px sans-serif")
                .style("opacity", 0)
                .text(function(d){
                    return (d.name);
                }).transition().duration(750).delay(function (d, i) {
                    return 750 + (i * 100);
                }) .style("opacity", 1);

            bar.append("text")
                .attr("class", "bar-value")
                .attr("x", function (d) {
                    return x(d.numberRecommendations);
                })
                .attr("y", function (d) {
                    return y(d.name);
                })
                .attr("dx", "-.35em") //margin right
                .attr("dy", "1.15em") //vertical align middle
                .attr("text-anchor", "end")
                .style("font", "12px sans-serif")
                .style("font-weight", "bold")
                .style("opacity", 0)
                .text(function(d){
                    return (d.numberRecommendations);
                }).transition().duration(750).delay(function (d, i) {
                    return 750 + (i * 100);
                }).style("opacity", 1);
            

        };

    }

    $(document).ready(function () {
        // rankFlowVis.constructor();
    });

    $(window).resize(function () {
        // rankFlowVis.resize();
        topChannelsVis.init(topChannelsVis.topTenData);
    });

    //init
    window.topChannelsVis = new TopChannelsVis();

})(window); //Pass in a reference to the global window object