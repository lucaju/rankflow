//modules
import $ from 'jquery';
import {extent,min,max} from 'd3-array';
import {axisBottom,axisLeft} from 'd3-axis';
import {nest} from 'd3-collection';
import {selection,select,selectAll} from 'd3-selection';
import {scaleOrdinal,scaleTime,scaleLinear} from 'd3-scale';
import {schemePaired} from 'd3-scale-chromatic';
import {line,curveStep,curveMonotoneX} from 'd3-shape';
import {timeFormat,timeParse} from 'd3-time-format';
import {transition} from 'd3-transition';
import {voronoi} from 'd3-voronoi';

import UIkit from 'uikit/dist/js/uikit.min';
import moment from 'moment';



export default function RankFlowVis(app) {

	this.app = app;

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
	this.init = function () {

		const _this = this;

		this.windowWidth = document.body.clientWidth;

		//set the context in the DOM
		this.margin = {
			top: 20,
			right: 30,
			bottom: 30,
			left: 50
		};

		this.height = 470 - this.margin.top - this.margin.bottom;

		select(window).on('resize', function () {
			_this.resize();
		});


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


				_this.vis(_this.visDataset, 'resize');

			}, 250);

		}


	};

	this._setWidth = function () {

		let minVizWidth = (this.app.datamodel.numberDays * this.minDateWidth) + this.margin.left + this.margin.right - 10 - 240; //240 is the width of side bar. Better to get this by code

		if (this.windowWidth < minVizWidth) {
			this.width = minVizWidth - this.margin.left - this.margin.right - 10 - 120;
			if (!app.showScrollHint) UIkit.toggle(select('#horizontal-scroll-hint')).toggle();
		} else {
			this.width = (this.windowWidth - 140) - this.margin.left - this.margin.right - 10 - 120;
			if (app.showScrollHint) UIkit.toggle(select('#horizontal-scroll-hint')).toggle();
		}

	};

	//---- SETUP VIS
	this.setupvis = function () {
		//width
		this._setWidth();

		this.parseTime = timeParse('%Y-%m-%d');

		///////////////////// COLOR ////////////////////////// 

		this.color = scaleOrdinal(schemePaired);

		///////////////////// SCALE & AXES ////////////////////////// 

		let parsedDates = [];
		let dayIterac = moment(this.app.period.start);

		for (dayIterac; dayIterac.isBefore(this.app.period.end); dayIterac.add(1, 'days')) {
			parsedDates.push(this.parseTime(dayIterac.format('YYYY-MM-DD')));
		}

		// this.xScale = scaleTime().domain([startDay, endDay]).range([40, width-40]);
		// this.xScale = scaleTime().range([40, this.width - 40]);
		this.xScale = scaleTime().range([40, this.width - 40 - 240]);
		this.xScale.domain(extent(parsedDates, function (d) {
			return d;
		}));



		var ticksNumber;
		if (parsedDates.length < 10) {
			ticksNumber = parsedDates.length;
		} else {
			ticksNumber = null;
		}

		this.yScale = scaleLinear().domain([0.5, 10.5]).range([0, this.height]);

		// this.xAxis = axisBottom().scale(xScale).tickFormat(timeFormat('%b %d')).tickSize(0);
		// this.xAxis = axisBottom(this.xScale).scale(this.xScale).tickFormat(timeFormat('%m/%d')).tickSize(0)//.ticks(20);
		this.xAxis = axisBottom(this.xScale).tickFormat(timeFormat('%d/%m')).tickSize(0).ticks(ticksNumber);
		// this.xAxis = axisBottom(xScale).scale(xScale).tickFormat(timeFormat('%a %d')).tickSize(0);
		this.yAxis = axisLeft().scale(this.yScale).tickSize(0);



		///////////////////// LINE TYPE  //////////////////////////
		this.line = line()
			// .curve(curveMonotoneX) //Slight rounding without too much deviation
			.curve(curveStep); //Slight rounding without too much deviation

	};

	// this.updateDates = function () {

	//     let parsedDates = [];
	//     let dayIterac = moment(this.app.datamodel.period.startDate);

	//     while (dayIterac <= this.app.datamodel.period.endDate) {
	//         parsedDates.push(this.parseTime(dayIterac.format('YYYY-MM-DD')));
	//         dayIterac.add(1, 'days');
	//     }

	// };

	//////////////////////// Create CHART //////////////////////// 
	this.update = function (data) {

		this.dataset = data;

		this.setupvis();

		//clear
		$('#visualization').empty();

		////////////////////////  Create focus SVG
		this.focus = select('#visualization').append('svg')
			.attr('width', this.width + this.margin.left + this.margin.right - 240) //240 is the width of side bar. Better to get this by code
			.attr('height', this.height + this.margin.top + this.margin.bottom)
			.append('g')
			.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

		//Append clippath to focus chart
		let defs = this.focus.append('defs');

		defs.append('clipPath')
			.attr('id', 'clip')
			.append('rect')
			.attr('width', this.width)
			.attr('height', this.height);

		//Append x axis to focus chart	
		this.focus.append('g')
			.attr('class', 'x axis')
			.style('font-size', 13)
			.attr('transform', 'translate(0,' + (this.height + 9) + ')')
			// .call(axisBottom(xScale));
			.call(this.xAxis);



		//Append y axis to focus chart	
		this.focus.append('g')
			.attr('class', 'y axis')
			.attr('transform', 'translate(-10,0)')
			.call(this.yAxis)
			.append('text')
			.attr('class', 'titles')
			.attr('transform', 'rotate(-90)')
			.attr('x', -(this.height / 2))
			.attr('y', -35)
			.attr('dy', '.71em')
			.style('font-size', 14)
			.style('text-anchor', 'middle')
			.text('Posição no ranking');


		//////////////////////// Initiate the voronoi function ///////////////////////////// 
		this.voronoi = voronoi()
			.extent([
				[-this.margin.left, -this.margin.top],
				[this.width + this.margin.right, this.height + this.margin.bottom]
			]);

		//Initiate the voronoi group element	
		this.voronoiGroup = this.focus.append('g')
			.attr('class', 'voronoi');


		//////////////////////// Tooltip ///////////////////////////// 
		this.popUpName = this.focus.append('g')
			.attr('transform', 'translate(-100,-100)')
			.attr('class', 'popUpName')
			.style('pointer-events', 'none');

		this.popUpName.append('circle')
			.attr('class', 'tooltipCircle')
			.attr('r', 30.5);

		this.popUpName.append('text')
			.style('font-size', 12)
			.attr('class', 'titles')
			.attr('y', -15);

		this.vis(data);

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

		if (resize != 'resize') {

			//reset
			this.visDataset = [];
			this.allVideosIDs = [];
			this.namesByID = [];

			//reduce and load dataset
			this.visDataset = this._reduceToTopN(data.videos, 1);
		}

		let channels = [];


		/////////////////////  gather data
		for (let d of this.visDataset) {

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
		let maxPosition = nest()
			.key(function (d) {
				return d.id;
			})
			.rollup(function (d) {
				return min(d, function (g) {
					return g.recRank;
				});
			})
			// .rollup(function(d) {return max(d, function(g) {return g.sumRec;});})
			.entries(this.flatData);

		let nestedFlatData = nest().key(function (d) {
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
		let voronoiGrid = this.voronoiGroup.selectAll('path')
			.data(this.voronoi.polygons(this.flatData.filter(function (d) {
				return _this.parseTime(d.date) >= _this.xScale.domain()[0] & _this.parseTime(d.date) <= _this.xScale.domain()[1];
			})));

		voronoiGrid.exit().remove();

		//new data
		voronoiGrid.enter().append('path')
			.attr('d', function (d) {
				return 'M' + d.join('L') + 'Z';
			})
			.datum(function (d) {
				return d.data;
			})
			.attr('class', 'voronoiCells')
			// .on('mouseover', this._mouseover)
			.on('mouseover', function (d) {
				_this._mouseOverSelection(d);
			})
			// .on('mouseout', this._mouseout)
			.on('mouseout', function (d) {
				_this._mouseOutSelection(d.id);
				// _this.highlightOff(d.id);
			})
			.on('click', function (d) {
				_this._mouseClick(d);
			});


		//update existing data
		voronoiGrid
			.attr('d', function (d) {
				return 'M' + d.join('L') + 'Z';
			})
			.datum(function (d) {
				return d.data;
			});
		// .on('mouseover', function(d) {
		// 	_this._mouseOverSelection(d);
		// })
		// .on('mouseout', function(d) {
		// _this.highlightOff(d.id);
		// })
		// .on('click', this._mouseClick);


		//Move selected element to the front
		selection.prototype.moveToFront = function () {
			return this.each(function () {
				this.parentNode.appendChild(this);
			});
		};


		//////////////////////// Create PLOT //////////////////////// 
		//data
		this.focusData = this.focus.selectAll('.focus')
			.data(this.visDataset);

		//remove previous
		this.focusData.exit().remove();

		//add news
		let newDataPoints = this.focusData.enter().append('g')
			.attr('class', function (d) {
				return 'focus ' + d.id;
			});

		selectAll('.focus')
			.attr('class', function (d) {
				return 'focus ' + d.id;
			});

		// LINES
		let pathLine = newDataPoints.append('path')
			.attr('class', 'line')
			.attr('clip-path', 'url(#clip)')
			.style('pointer-events', 'none')
			.style('stroke-linejoin', 'round')
			.style('opacity', 0)
			.attr('d', function (d) {
				return _this.line(d.dates);
			})
			// .style('stroke-width', function(d) {return 4;})
			.style('stroke-width', function (d) {
				return _this.strokeWidth[maxPosition[_this.namesByID[d.id]].value - 1];
			})
			// .style('stroke-width', function(d) {return maxPosition[_this.namesByID[d.id]].value/10;})
			.style('stroke', function (d, i) {
				// return _this.color(d.channel);
				return _this.app.getChannelByName(d.channel).colour;
			})
			// .style('stroke', function(d,i) {return '#000'; })
			// .transition().duration(750).delay(500)
			.transition().duration(750).delay(function (d, i) {
				return i * 100;
			})
			.style('opacity', 0.6);

		pathLine = this.focusData.select('path');

		pathLine.transition()
			.duration(2000).delay(1500)
			.attr('d', function (d) {
				return _this.line(d.dates);
			})
			// .style('stroke-width', function(d) {return 4;})
			.style('stroke-width', function (d) {
				return _this.strokeWidth[maxPosition[_this.namesByID[d.id]].value - 1];
			})
			// .style('stroke-width', function(d) {return maxPosition[this.namesByID[d.id]].value/10;})
			.style('stroke', function (d, i) {
				// return _this.color(d.channel);
				return this.app.datamodel.getChannelByName(d.channel).colour;
			});


		//CIRCLE
		let circles = newDataPoints.append('circle')
			.attr('class', 'circle')
			.attr('clip-path', 'url(#clip)')
			.attr('cx', function (d) {
				return _this.xScale(_this.parseTime(d.dates[0].date));
			})
			.attr('cy', function (d) {
				return _this.yScale(d.dates[0].recRank);
			})
			.style('opacity', 0)
			.style('stroke', function (d, i) {
				// return _this.color(d.channel);
				return _this.app.getChannelByName(d.channel).colour;
			})
			.style('fill', function (d, i) {
				if (d.dates[0].views == -1) {
					return 'white';
				} else {
					// return _this.color(d.channel);
					return _this.app.getChannelByName(d.channel).colour;
				}
			})
			.style('stroke-width', 4)
			// .attr('r', 10)
			.attr('r', function (d) {
				return _this.strokeWidth[maxPosition[_this.namesByID[d.id]].value - 1];
			})
			.transition().duration(750).delay(function (d, i) {
				return i * 100;
			})
			.style('opacity', 1);

		circles = this.focusData.select('circle');

		circles.transition()
			.duration(2000).delay(1500)
			.attr('cx', function (d) {
				return _this.xScale(_this.parseTime(d.dates[0].date));
			})
			.attr('cy', function (d) {
				return _this.yScale(d.dates[0].recRank);
			})
			.attr('r', function (d) {
				return _this.strokeWidth[maxPosition[_this.namesByID[d.id]].value - 1];
			})
			.style('stroke', function (d, i) {
				// return _this.color(d.channel);
				return this.app.datamodel.getChannelByName(d.channel).colour;
			})
			.style('fill', function (d, i) {
				if (d.dates[0].views == -1) {
					return 'white';
				} else {
					// return _this.color(d.channel);
					return this.app.datamodel.getChannelByName(d.channel).colour;
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
	this._mouseOverSelection = function (d) {
		// this.showpopup(d);
		this.app.itemMouseOver(d,'rank');
	};

	this._mouseOutSelection = function(d) {
		// this.highlightOff(d);
		this.app.itemMouseOut(d,'rank');
	};

	this.highlightOn = function (data,sourceType) {

		this.focus.selectAll('.focus')
			.style('opacity', function(d) {
				if(sourceType == 'rank') {
					return (d.youtubeID === data.data.youtubeID) ? 1 : 0.07;
				} else if (sourceType == 'channel') {
					return (d.channel === data.name) ? 1 : 0.07;
				} else if (sourceType == 'video') {
					return (d.youtubeID === data.youtubeID) ? 1 : 0.07;
				}
			});

		//popup
		if(sourceType == 'rank') this.showpopup(data);
	};

	this.showpopup = function(d) {
		select('.popUpName').moveToFront(); //Move the tooltip to the front

		this.popUpName.attr('transform', 'translate(' + this.xScale(this.parseTime(d.date)) + ',' + this.yScale(d.recRank) + ')'); //Change position, size of circle and text of tooltip

		let circleSize = 10;

		this.popUpName.select('.tooltipCircle')
			// .style('fill', this.color(d.channel))
			.style('fill', this.app.getChannelByName(d.channel).colour)
			.attr('r', circleSize);

		this.popUpName.select('text').text(d.moment.format('MMM D') + ': ' + d.title + ' (Rank: ' + d.recRank + ')');

		//fix popuop position if text is out of boundaries to tlef or ti the right
		if ((this.popUpName.node().getCTM().e - this.margin.left) - (this.popUpName.node().getBBox().width / 2) < 0) {
			this.popUpName.select('text').style('text-anchor', 'start');
		} else if ((this.popUpName.node().getCTM().e - this.margin.left) + (this.popUpName.node().getBBox().width / 2) > this.width - 120) {
			this.popUpName.select('text').style('text-anchor', 'end');
		}
	};

	this.highlightOff = function (d) {
		this.focus.selectAll('.focus').style('opacity', 1);
		this.popUpName.attr('transform', 'translate(-100,-100)');
		this.popUpName.select('text').style('text-anchor', 'middle');
	};


	///////////////////////// VORONOI CLICK - ADD MODAL
	this._mouseClick = function (d) {
		this.app.showDetails(d,'rank');
	};

	this.exit = function() {
		const duration = 500;

		// this.focusData
		this.focus.selectAll('.focus')
			.transition()
			.duration(duration/2)
			.style('opacity', 0);
	};

}