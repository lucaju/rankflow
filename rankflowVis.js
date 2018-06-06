/*jshint esversion: 6 */

(function (window) {

    function RankFlowVis() {

        this.windowWidth = 900;
        this.resizeTimer = null;

        this.margin = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        };
        this.width = 800;
        this.height = 500;

        this.visDataset = [];
        this.allVideosIDs = [];
        this.namesByID = [];

        this.flatData = [];

        this.topN = 5;

        this.strokeWidth = [8, 6, 5, 5, 4, 4, 3, 3, 2, 2]; //Stroke width per max position

        this.color = null;
        this.xScale = null;
        this.yScale = null;
        this.xAxis = null;
        this.yAxis = null;

        this.line = null;

        this.focus = null;
        this.focusData = null;
        this.voronoi = null;
        this.voronoiGroup = null;

        this.popUpName = null;

        this.parseTime = null;

        this.minDateWidth = 35;


        //----- CONSTRUCTOR
        this.constructor = function () {

            this.windowWidth = document.body.clientWidth;

            //set the context in the DOM
            this.margin = {
                top: 20,
                right: 30,
                bottom: 30,
                left: 50
            };

            this.height = 470 - this.margin.top - this.margin.bottom;

        };


        //---- RESIZE
        this.resize = function () {

            const _this = this;

            //width only
            if (this.windowWidth != document.body.clientWidth) {

                //delay... end resizing
                clearTimeout(this.resizeTimer);
                this.resizeTimer = setTimeout(function () {

                    _this.windowWidth = document.body.clientWidth;

                    _this._setWidth();
                    _this.setupvis();
                    _this.builtChart();


                    _this.vis(_this.visDataset, "resize");

                }, 250);

            }


        };

        this._setWidth = function () {

            let minVizWidth = (rankflowData.numberDays * this.minDateWidth) + this.margin.left + this.margin.right - 10;

            if (this.windowWidth < minVizWidth) {
                this.width = minVizWidth - this.margin.left - this.margin.right - 10;
                if (!app.showScrollHint) UIkit.toggle($("#horizontal-scroll-hint")).toggle();
            } else {
                this.width = (this.windowWidth - 140) - this.margin.left - this.margin.right - 10;
                if (app.showScrollHint) UIkit.toggle($("#horizontal-scroll-hint")).toggle();
            }

        };

        //---- SETUP VIS
        this.setupvis = function () {

            //width
            this._setWidth();

            this.parseTime = d3.timeParse("%Y-%m-%d");

            ///////////////////// COLOR ////////////////////////// 

            this.color = d3.scaleOrdinal(d3.schemePaired);

            ///////////////////// SCALE & AXES ////////////////////////// 

            let parsedDates = [];
            let dayIterac = moment(rankflowData.period.startDate);
            

            while (dayIterac <= rankflowData.period.endDate) {
                parsedDates.push(this.parseTime(dayIterac.format('YYYY-MM-DD')));
                dayIterac.add(1, 'days');
            }
            

            // this.xScale = d3.scaleTime().domain([startDay, endDay]).range([40, width-40]);
            // this.xScale = d3.scaleTime().range([40, this.width - 40]);
            this.xScale = d3.scaleTime().range([40, this.width - 40]);
            this.xScale.domain(d3.extent(parsedDates, function (d) {
                return d;
            }));

            var ticksNumber;
            if (parsedDates.length<10) {
                ticksNumber = parsedDates.length;
            } else {
                ticksNumber = null;
            }

            this.yScale = d3.scaleLinear().domain([0.5, 10.5]).range([0, this.height]);

            // xAxis = d3.axisBottom().scale(xScale).tickFormat(d3.timeFormat("%b %d")).tickSize(0);
            // this.xAxis = d3.axisBottom(this.xScale).scale(this.xScale).tickFormat(d3.timeFormat("%m/%d")).tickSize(0)//.ticks(20);
            this.xAxis = d3.axisBottom(this.xScale).tickFormat(d3.timeFormat("%m/%d")).tickSize(0).ticks(ticksNumber);
            // xAxis = d3.axisBottom(xScale).scale(xScale).tickFormat(d3.timeFormat("%a %d")).tickSize(0);
            this.yAxis = d3.axisLeft().scale(this.yScale).tickSize(0);

            ///////////////////// LINE TYPE  //////////////////////////
            this.line = d3.line()
                // .curve(d3.curveMonotoneX) //Slight rounding without too much deviation
                .curve(d3.curveStep); //Slight rounding without too much deviation

        };

        // this.updateDates = function () {

        //     let parsedDates = [];
        //     let dayIterac = moment(rankflowData.period.startDate);

        //     while (dayIterac <= rankflowData.period.endDate) {
        //         parsedDates.push(this.parseTime(dayIterac.format('YYYY-MM-DD')));
        //         dayIterac.add(1, 'days');
        //     }

        // };

        //////////////////////// Create CHART //////////////////////// 
        this.builtChart = function () {

            //clear
            $("#visualization").empty();

            ////////////////////////  Create focus SVG
            this.focus = d3.select("#visualization").append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom)
                .append("g")
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

            //Append clippath to focus chart
            let defs = this.focus.append("defs");

            defs.append("clipPath")
                .attr("id", "clip")
                .append("rect")
                .attr("width", this.width)
                .attr("height", this.height);

            //Append x axis to focus chart	
            this.focus.append("g")
                .attr("class", "x axis")
                .style("font-size", 13)
                .attr("transform", "translate(0," + (this.height + 9) + ")")
                // .call(d3.axisBottom(xScale));
                .call(this.xAxis);

            //Append y axis to focus chart	
            this.focus.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(-10,0)")
                .call(this.yAxis)
                .append("text")
                .attr("class", "titles")
                .attr("transform", "rotate(-90)")
                .attr("x", -(this.height / 2))
                .attr("y", -35)
                .attr("dy", ".71em")
                .style("font-size", 14)
                .style("text-anchor", "middle")
                .text("Position in Top 10");


            //////////////////////// Initiate the voronoi function ///////////////////////////// 
            this.voronoi = d3.voronoi()
                .extent([
                    [-this.margin.left, -this.margin.top],
                    [this.width + this.margin.right, this.height + this.margin.bottom]
                ]);

            //Initiate the voronoi group element	
            this.voronoiGroup = this.focus.append("g")
                .attr("class", "voronoi");


            //////////////////////// Tooltip ///////////////////////////// 
            this.popUpName = this.focus.append("g")
                .attr("transform", "translate(-100,-100)")
                .attr("class", "popUpName")
                .style("pointer-events", "none");

            this.popUpName.append("circle")
                .attr("class", "tooltipCircle")
                .attr("r", 30.5);

            this.popUpName.append("text")
                .style("font-size", 12)
                .attr("class", "titles")
                .attr("y", -15);

        };

        //////////////////////// Reduce dataset to TOP N
        this._reduceToTopN = function (data) {

            let _topN = this.topN;
            let array = [];

            // reduce: find top 10
            data.forEach(function (v, i) {

                let isTopN = false;

                v.dates.forEach(function (d, j) {
                    if (d.recRank <= _topN) {
                        isTopN = true;
                        return;
                    }
                });

                if (isTopN) array.push(v);

            });

            return array;

        };

        //////////////////////// UPDATE VIS
        this.vis = function (data, resize) {

            const _this = this;

            if(resize != "resize") {

                //reset
                this.visDataset = [];
                this.allVideosIDs = [];
                this.namesByID = [];

                //reduce and load dataset
                this.visDataset = this._reduceToTopN(data.videos, 1);
            }

            let channels = [];


            /////////////////////  gather data
            for(let d of this.visDataset) {

                let i = this.visDataset.indexOf(d);

                this.allVideosIDs[i] = d.id;
                this.namesByID[d.id] = i;
                saveChannel(d.channel);
            }
            

            // SAVE a list of Channels
            function saveChannel(channel) {
                let hasChannel = false;
                channels.forEach(function (c) {
                    if (c == channel) hasChannel = true;
                });

                if (!hasChannel) {
                    channels.push(channel);
                }
            }


            ///////////////////// redefine color
            // this.color.domain(this.allVideosIDs);
            this.color.domain(channels);

            ///////////////////// Line type: Change data ////////////////////////// 
            this.line.x(function (d) {
                    return _this.xScale(_this.parseTime(d.date));
                })
                .y(function (d) {
                    return _this.yScale(d.recRank);
                });


            ///////////////////////// Voronoi //////////////////////////// 

            //Create a flat data version for the Voronoi
            /*************************************************************/
            this.flatData = [];
            for (let k in this.visDataset) {
                let k_data = this.visDataset[k];
                for (let d of k_data.dates) {
                // k_data.dates.forEach(function (d) {
                    if (d.recRank <= 10) this.flatData.push({
                        id: k_data.id,
                        title: k_data.title,
                        date: d.date,
                        moment: d.moment,
                        channel: k_data.channel,
                        nb_recommendations: d.nb_recommendations,
                        sumRec: k_data.sumRec,
                        recRank: d.recRank,
                        data: k_data
                    });
                }
            }
            

            //Max position
            let maxPosition = d3.nest()
                .key(function (d) {
                    return d.id;
                })
                .rollup(function (d) {
                    return d3.min(d, function (g) {
                        return g.recRank;
                    });
                })
                // .rollup(function(d) {return d3.max(d, function(g) {return g.sumRec;});})
                .entries(this.flatData);

            let nestedFlatData = d3.nest().key(function (d) {
                return d.id;
            }).entries(this.flatData);
            // /*************************************************************/

            
            // ///////////////////////// Reinitiate the voronoi function
            
            this.voronoi.x(function (d) {
                    return _this.xScale(_this.parseTime(d.date));
                })
                .y(function (d) {
                    return _this.yScale(d.recRank);
                });


            // DRAW VORONOI
            let voronoiGrid = this.voronoiGroup.selectAll("path")
                .data(this.voronoi.polygons(this.flatData.filter(function (d) {
                    return _this.parseTime(d.date) >= _this.xScale.domain()[0] & _this.parseTime(d.date) <= _this.xScale.domain()[1];
                })));

            voronoiGrid.exit().remove();

            //new data
            voronoiGrid.enter().append("path")
                .attr("d", function (d) {
                    return "M" + d.join("L") + "Z";
                })
                .datum(function (d) { return d.data; })
                .attr("class", "voronoiCells")
                .on("mouseover", this._mouseover)
                .on("mouseout", this._mouseout)
                .on("click", this._mouseClick);

            //update existing data
            voronoiGrid
                .attr("d", function (d) {
                    return "M" + d.join("L") + "Z";
                })
                .datum(function (d) { return d.data; });
                // .on("mouseover", this._mouseover)
                // .on("mouseout", this._mouseout)
                // .on("click", this._mouseClick);


            //Move selected element to the front
            d3.selection.prototype.moveToFront = function () {
                return this.each(function () {
                    this.parentNode.appendChild(this);
                });
            };


            //////////////////////// Create PLOT //////////////////////// 
            //data
            this.focusData = this.focus.selectAll(".focus")
                .data(this.visDataset);

            //remove previous
            this.focusData.exit().remove();

            //add news
            let newDataPoints = this.focusData.enter().append("g")
                .attr("class", function (d) {
                    return "focus " + d.id;
                });

            d3.selectAll(".focus")
                .attr("class", function (d) {
                    return "focus " + d.id;
                });

            // LINES
            let pathLine = newDataPoints.append("path")
                .attr("class", "line")
                .attr("clip-path", "url(#clip)")
                .style("pointer-events", "none")
                .style("stroke-linejoin", "round")
                .style("opacity", 0)
                .attr("d", function (d) {
                    return _this.line(d.dates);
                })
                // .style("stroke-width", function(d) {return 4;})
                .style("stroke-width", function (d) {
                    return _this.strokeWidth[maxPosition[_this.namesByID[d.id]].value - 1];
                })
                // .style("stroke-width", function(d) {return maxPosition[_this.namesByID[d.id]].value/10;})
                .style("stroke", function (d, i) {
                    // return _this.color(d.channel);
                    return rankflowData.getChannelByName(d.channel).colour;
                })
                // .style("stroke", function(d,i) {return "#000"; })
                // .transition().duration(750).delay(500)
                .transition().duration(750).delay(function (d, i) {
                    return i * 100;
                })
                .style("opacity", 0.6);

            pathLine = this.focusData.select("path");

            pathLine.transition()
                .duration(2000).delay(1500)
                .attr("d", function (d) {
                    return _this.line(d.dates);
                })
                // .style("stroke-width", function(d) {return 4;})
                .style("stroke-width", function (d) {
                    return _this.strokeWidth[maxPosition[_this.namesByID[d.id]].value - 1];
                })
                // .style("stroke-width", function(d) {return maxPosition[this.namesByID[d.id]].value/10;})
                .style("stroke", function (d, i) {
                    // return _this.color(d.channel);
                    return rankflowData.getChannelByName(d.channel).colour;
                });


            //CIRCLE
            let circles = newDataPoints.append("circle")
                .attr("class", "circle")
                .attr("clip-path", "url(#clip)")
                .attr("cx", function (d) {
                    return _this.xScale(_this.parseTime(d.dates[0].date));
                })
                .attr("cy", function (d) {
                    return _this.yScale(d.dates[0].recRank);
                })
                .style("opacity", 0)
                .style("stroke", function (d, i) {
                    // return _this.color(d.channel);
                    return rankflowData.getChannelByName(d.channel).colour;
                })
                .style("fill", function (d, i) {
                    if (d.dates[0].views == -1) {
                        return "white";
                    } else {
                        // return _this.color(d.channel);
                        return rankflowData.getChannelByName(d.channel).colour;
                    }
                })
                .style("stroke-width", 4)
                // .attr("r", 10)
                .attr("r", function (d) {
                    return _this.strokeWidth[maxPosition[_this.namesByID[d.id]].value - 1];
                })
                .transition().duration(750).delay(function (d, i) {
                    return i * 100;
                })
                .style("opacity", 1);

            circles = this.focusData.select("circle");

            circles.transition()
                .duration(2000).delay(1500)
                .attr("cx", function (d) {
                    return _this.xScale(_this.parseTime(d.dates[0].date));
                })
                .attr("cy", function (d) {
                    return _this.yScale(d.dates[0].recRank);
                })
                .attr("r", function (d) {
                    return _this.strokeWidth[maxPosition[_this.namesByID[d.id]].value - 1];
                })
                .style("stroke", function (d, i) {
                    // return _this.color(d.channel);
                    return rankflowData.getChannelByName(d.channel).colour;
                })
                .style("fill", function (d, i) {
                    if (d.dates[0].views == -1) {
                        return "white";
                    } else {
                        // return _this.color(d.channel);
                        return rankflowData.getChannelByName(d.channel).colour;
                    }
                });
                
        };

        this.getFlatDataById = function (id) {

            for (var i = 0; i < this.flatData.length; i++) {
                if (this.flatData[i].id == id) return this.flatData[i];
            }

            return null;
        };

        ///////////////////////// Voronoi mouseover and mouseout functions	
        this._mouseover = function (d) {
            rankFlowVis._mouseOverSelection(d);
        };

        this._mouseout = function (d) {
            rankFlowVis.highlightOff(d.id);
        };

        this._mouseOverSelection = function(d) {
            // this.focus.selectAll(".focus").style("opacity", 0.07);
            // this.focus.selectAll("."+d.id).style("opacity", 1);

            this.highlightOn(d.id);

            d3.select(".popUpName").moveToFront(); //Move the tooltip to the front

            this.popUpName.attr("transform", "translate(" + this.xScale(this.parseTime(d.date)) + "," + this.yScale(d.recRank) + ")"); //Change position, size of circle and text of tooltip

            // var circleSize = parseInt(d3.selectAll(".focus." + d.id).selectAll(".line").style("stroke-width"));
            let circleSize = 10;

            this.popUpName.select(".tooltipCircle")
                // .style("fill", this.color(d.channel))
                .style("fill", rankflowData.getChannelByName(d.channel).colour)
                .attr("r", circleSize);
            // popUpName.select(".tooltipCircle").style("fill", "#000").attr("r", circleSize);

            this.popUpName.select("text").text(d.moment.format("MMM D") + ": " + d.title + " (Rank: " + d.recRank + ")");

            //fix popuop position if text is out of boundaries to tlef or ti the right
            if ((this.popUpName.node().getCTM().e - this.margin.left) - (this.popUpName.node().getBBox().width / 2) < 0) {
                this.popUpName.select("text").style('text-anchor', 'start');
            } else if ((this.popUpName.node().getCTM().e - this.margin.left) + (this.popUpName.node().getBBox().width / 2) > this.width) {
                this.popUpName.select("text").style('text-anchor', 'end');
            }
        };

        this.highlightOn = function (id) {
            this.focus.selectAll(".focus").style("opacity", 0.07);
            this.focus.selectAll("." + id).style("opacity", 1);
        };

        this.highlightOff = function (id) {
            this.focus.selectAll(".focus").style("opacity", 1);
            this.popUpName.attr("transform", "translate(-100,-100)");
            this.popUpName.select("text").style('text-anchor', 'middle');
        };


        ///////////////////////// VORONOI CLICK - ADD MODAL
        this._mouseClick = function (d) {
            console.log(d);
            rankFlowVis.showDetails(d.data);
        };

        this.showDetails = function (d) {

            let html = `<div class="uk-modal-dialog">
                            <button class="uk-modal-close-default" type="button" uk-close></button>
                            <div class="uk-modal-header uk-background-muted">
                                <div class="uk-grid-small uk-flex-middle" uk-grid>
                                    <!-- <div class="uk-width-auto">
                                        <img class="uk-border-circle" width="40" height="40" src="../docs/images/avatar.jpg">
                                    </div> -->
                                    <div class="uk-width-expand">
                                        <h3 class="uk-card-title uk-margin-remove-bottom">${d.title}</h3>
                                        <p class="uk-text-meta uk-margin-remove-top">${d.channel}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="uk-modal-body">
                                <iframe width="540" height="310" src="https://www.youtube.com/embed/${d.youtubeID}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>
                            <div class="uk-modal-footer" uk-overflow-auto>
                                <table id="video-dates-details" class="uk-table uk-table-small uk-table-hover uk-table-divider"></table>
                            </div>
                        </div>`;


            let vDetails = $("#modal-video-details");
            vDetails.append(html);

            //table
            let videoTable = $("#video-dates-details");

            let tableHead = `<thead>
                                <tr>
                                    <th class="">&nbsp;</th>
                                    <th class="uk-table-shrink uk-text-right">Views</th>
                                    <th class="uk-table-shrink uk-text-right">Likes</th>
                                    <th class="uk-table-shrink uk-text-right">Dislikes</th>
                                    <th class="uk-table-shrink uk-text-right">Recomm</th>
                                    <th class="uk-table-shrink uk-text-right"><span class="uk-text-small">Recomm Rank</span></th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>`;

            videoTable.append(tableHead);

            let tableBody = videoTable.find('tbody');

            let tableInfo = '';

            //clone to revert order
            let dataDate = d.dates.slice(0);
            dataDate.reverse();

            $.each(dataDate, function (i, d) {
                tableInfo += `<tr>
                                <td>${d.moment.format("MMM D")}</td>
                                <td class="uk-text-right">${d.views}</td>
                                <td class="uk-text-right">${d.likes}</td>
                                <td class="uk-text-right">${d.dislikes}</td>
                                <td class="uk-text-right">${d.nb_recommendations}</td>
                                <td class="uk-text-right">${d.recRank}</td>
                            </tr>`;
            });

            tableBody.append(tableInfo);

            UIkit.modal(vDetails).show();

            vDetails.on('hidden', function () {
                $(this).html("");
            });
        };

    }


    $(document).ready(function () {
        rankFlowVis.constructor();
    });

    $(window).resize(function () {
        rankFlowVis.resize();
    });

    //init
    window.rankFlowVis = new RankFlowVis();

})(window); //Pass in a reference to the global window object