//modules
import chroma from 'chroma-js/chroma.min';

import {select} from 'd3-selection';
import {max} from 'd3-array/dist/d3-array.min';
import {axisBottom,axisLeft} from 'd3-axis/dist/d3-axis.min';
import {scaleOrdinal,scaleLinear,scaleBand} from 'd3-scale/dist/d3-scale.min';
import {schemeSet3} from 'd3-scale-chromatic/dist/d3-scale-chromatic.min';
require('d3-transition/dist/d3-transition.min');

export default function TopVideosVis(app) {

	this.app = app;

	// this.context = context;
	this.topTenData = [];
	this.visContainer = '';

	this.windowWidth = 0;
	this.height = 0;
	this.width = 0;

	this.margin = {
		top: 30,
		right: 250,
		bottom: 30,
		left: 10
	};

	this.svg = '';
	this.vis = '';

	this.xScale ='';
	this.yScale ='';

	this.xAxis;
	this.yAxis;

	this.colourScale = [];

	this.init = function () {

		const _this = this;

		this.visContainer = select('#top-channels');

		// this.colour = scaleOrdinal(schemePaired);
		this.colour = scaleOrdinal(schemeSet3);

		this._setDimensions();
		this.setupVis();

		window.addEventListener('resize', function() {
			_this.resize();
		});
		
	};

	this._setDimensions = function () {
		//size
		this.windowWidth = this.visContainer.node().getBoundingClientRect().width;
		this.width = this.windowWidth - this.margin.left - this.margin.right;
		this.height = 300 - this.margin.top - this.margin.bottom;
	};

	this.setupVis = function() {

		this.visContainer.html('');


		this.svg = this.visContainer.append('svg')
			.attr('width', this.width + this.margin.left + this.margin.right)
			.attr('height', this.height + this.margin.top + this.margin.bottom);


		//scale
		this.xScale = scaleLinear()
			.range([0, this.width]);
		this.yScale = scaleBand()
			.range([this.height, 0]);


		// AXIS
		this.xAxis = this.visContainer.append('g')
			.attr('class', 'x axis')
			.attr('transform', 'translate(0,' + this.height + ')');

		this.yAxis = this.visContainer.append('g')
			.attr('class', 'y axis')
			.call(axisLeft(this.yScale).tickSize(0).tickFormat(''));

		//VIS
		this.vis = this.svg.append('g')
			.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
	};

	//---- RESIZE
	this.resize = function () {

		const _this = this;
		//width only
		if (this.windowWidth != document.body.clientWidth) {
			//delay... end resizing
			clearTimeout(this.resizeTimer);
			this.resizeTimer = setTimeout(function () {
				_this._setDimensions();
				_this.setupVis();
				_this.update(_this.topTenData,'resize');
			}, 250);
		}
	};

	this.update = function(data,resize) {

		if (!resize) {

			this.topTenData = data.channels.slice(0, 10);

			//inverse order
			this.topTenData.sort(function (a, b) {
				return a.numberRecommendations - b.numberRecommendations;
			});
		}

		this.updateScale();
		this.updateAxis();
		this.updateVis();
	};

	this.updateScale = function() {
		this.xScale.domain([0, max(this.topTenData, function (d) {
			return d.numberRecommendations;
		})]);

		this.yScale.domain(this.topTenData.map(function (d) {
			return d.name;
		})).padding(0.2);
	};

	this.updateAxis = function() {

		this.yAxis.call(axisBottom(this.xScale).ticks(0).tickFormat(''));

		// x-Axis labels
		// .call(axisBottom(this.xScale).ticks(5).tickFormat(function (d) {
		// 	return d;
		// }));

	};

	this.updateVis = function() {

		const _this = this;

		//remove it all
		let nodes = this.vis.selectAll('.node')
			.remove();

		//new data
		nodes = this.vis.selectAll('.node')
			.data(this.topTenData);

		//add elments
		let newNodes = nodes.enter()
			.append('g')
			.attr('class', 'node');
		
		newNodes.append('rect')
			.attr('class', 'bar');

		newNodes.append('text')
			.attr('class', 'bar-title');

		newNodes.append('text')
			.attr('class', 'bar-value');


		//update elements
		nodes = this.vis.selectAll('.node');

		nodes.selectAll('.bar')
			.attr('fill', function (d) {
				// return _this.colour(d.name);
				return d.colour;
			})
			.attr('x', 0)
			.attr('height', _this.yScale.bandwidth())
			.attr('y', function (d) {
				return _this.yScale(d.name);
			})
			// .style('cursor','pointer')
			.on('mousemove', function (d) {
				//change color
				_this._mouseOverSelection(d);
			})
			.on('mouseout', function (d) {
				//back to normal
				_this._mouseOutSelection(d);
			})
			.on('click', function (d) {
				//open popup
				_this._click(d);
				// rankFlowVis.showDetails(d);
			})
			.transition()
			.duration(750)
			.delay(function (d, i) {
				return i * 100;
			}).attr('width', function (d) {
				// console.log(d,d.sumRec)
				return _this.xScale(d.numberRecommendations);
			});

		nodes.selectAll('.bar-title')
			.attr('x', function (d) {
				return _this.xScale(d.numberRecommendations);
			})
			.attr('y', function (d) {
				return _this.yScale(d.name);
			})
			.attr('dx', '.35em') //this.margin right
			.attr('dy', '1.35em') //vertical align middle
			.style('font', '10px sans-serif')
			.style('opacity', 0)
			.text(function (d) {
				return (d.name);
			})
			.transition()
			.duration(750)
			.delay(function (d, i) {
				return 750 + (i * 100);
			})
			.style('opacity', 1);

		nodes.selectAll('.bar-value')
			.attr('x', function (d) {
				return _this.xScale(d.numberRecommendations);
			})
			.attr('y', function (d) {
				return _this.yScale(d.name);
			})
			.attr('dx', '-.35em') //this.margin right
			.attr('dy', '1.15em') //vertical align middle
			.attr('text-anchor', 'end')
			.style('font', '12px sans-serif')
			.style('font-weight', 'bold')
			.style('fill', function (d) {
				let textColour = chroma(0, 0, 0, 0.9).hex();
				const contrast = chroma.contrast(d.colour, textColour);
				if (contrast < 4.5) textColour = chroma(255, 255, 255, 0.85).hex();
				return textColour;
			})
			.style('opacity', 0)
			.text(function (d) {
				return (d.numberRecommendations);
			})
			.transition()
			.duration(750)
			.delay(function (d, i) {
				return 750 + (i * 100);
			})
			.style('opacity', 1);

	};

	this.exit = function() {
		const duration = 500;
		let bar = this.vis.selectAll('.bar');
		bar.transition()
			.duration(duration)
			.attr('width', 0);

		this.vis.selectAll('.bar-title')
			.transition()
			.duration(duration/2)
			// .attr('x', 0)
			.style('opacity', 0);

		this.vis.selectAll('.bar-value')
			.transition()
			.duration(duration)
			.attr('x', 0)
			.style('opacity', 0);

	};

	this._mouseOverSelection = function(d) {
		// console.log(d);
		app.itemMouseOver(d, 'channel');
	};

	this._mouseOutSelection = function(d) {
		app.itemMouseOut(d, 'channel');
	};

	this._click = function(d) {
		console.log(d);
		// this.app.showDetails(d,'video');
	};

	this.highlightOn = function (channelName) {

		this.vis.selectAll('.node')
			.style('opacity', function(d) {
				if(d.name === channelName) {
					return 1;
				} else {
					return 0.5;
				}
			});

		this.vis.selectAll('.bar-title')
			.style('font-weight', function(d) {
				if(d.name === channelName) {
					return 'bold';
				}
			});
	};

	this.highlightOff = function () {
		this.vis.selectAll('.node').style('opacity', 1);
		this.vis.selectAll('.bar-title').style('font-weight', 'normal');
	};

}