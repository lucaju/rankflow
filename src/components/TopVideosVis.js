//modules
import chroma from 'chroma-js';

import {select} from 'd3-selection';
import {max} from 'd3-array';
import {axisBottom,axisLeft} from 'd3-axis';
import {scaleOrdinal,scaleLinear,scaleBand} from 'd3-scale';
import {schemeSet3} from 'd3-scale-chromatic';
import {transition} from 'd3-transition';


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

		this.visContainer = select('#top-videos');

		// this.colour = scaleOrdinal(schemePaired);
		this.colour = scaleOrdinal(schemeSet3);

		//size
		this.windowWidth = this.visContainer.node().getBoundingClientRect().width;
		this.width = this.windowWidth - this.margin.left - this.margin.right;
		this.height = 300 - this.margin.top - this.margin.bottom;

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

	this.update = function(data) {

		this.topTenData = data.videos.slice(0, 10);

		//inverse order
		this.topTenData.sort(function (a, b) {
			return a.sumRec - b.sumRec;
		});

		this.updateScale();
		this.updateAxis();
		this.updateVis();
	};

	this.updateScale = function() {
		this.xScale.domain([0, max(this.topTenData, function (d) {
			return d.sumRec;
		})]);

		this.yScale.domain(this.topTenData.map(function (d) {
			return d.title;
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
				// return _this.colour(d.channel);
				const channel = _this.app.getChannelByName(d.channel);
				return channel.colour;
			})
			.attr('x', 0)
			.attr('height', _this.yScale.bandwidth())
			.attr('y', function (d) {
				return _this.yScale(d.title);
			})
			.style('cursor','pointer')
			.on('mousemove', function (d) {
				_this._mouseOverSelection(d);
			})
			.on('mouseout', function (d) {
				_this._mouseOutSelection(d);
			})
			.on('click', function (d) {
				_this._mouseClick(d);
			})
			.transition()
			.duration(750)
			.delay(function (d, i) {
				return i * 100;
			}).attr('width', function (d) {
				// console.log(d,d.sumRec)
				return _this.xScale(d.sumRec);
			});

		nodes.selectAll('.bar-title')
			.attr('x', function (d) {
				return _this.xScale(d.sumRec);
			})
			.attr('y', function (d) {
				return _this.yScale(d.title);
			})
			.attr('dx', '.35em') //this.margin right
			.attr('dy', '1.35em') //vertical align middle
			.style('font', '10px sans-serif')
			.style('opacity', 0)
			.text(function (d) {
				return (d.title);
			})
			.transition()
			.duration(750)
			.delay(function (d, i) {
				return 750 + (i * 100);
			})
			.style('opacity', 1);

		nodes.selectAll('.bar-value')
			.attr('x', function (d) {
				return _this.xScale(d.sumRec);
			})
			.attr('y', function (d) {
				return _this.yScale(d.title);
			})
			.attr('dx', '-.35em') //this.margin right
			.attr('dy', '1.15em') //vertical align middle
			.attr('text-anchor', 'end')
			.style('font', '12px sans-serif')
			.style('font-weight', 'bold')
			.style('fill', function (d) {
				let textColour = chroma(0, 0, 0, 0.9).hex();
				const channel = _this.app.getChannelByName(d.channel);
				const contrast = chroma.contrast(channel.colour, textColour);
				if (contrast < 4.5) textColour = chroma(255, 255, 255, 0.85).hex();
				return textColour;
			})
			.style('opacity', 0)
			.text(function (d) {
				return (d.sumRec);
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
		// this.highlightOn(d);
		this.app.itemMouseOver(d,'video');
	};

	this._mouseOutSelection = function(d) {
		// this.highlightOff(d);
		this.app.itemMouseOut(d,'video');
	};

	this.highlightOn = function (id, sourceType) {
		this.vis.selectAll('.node')
			.style('opacity', function(d) {
				if (sourceType == 'video') {
					return (d.youtubeID === id) ? 1 : 0.5;
				} else if (sourceType == 'channel') {
					return (d.channel === id) ? 1 : 0.5;
				}
			});

		this.vis.selectAll('.bar-title')
			.style('font-weight', function(d) {
				if (sourceType == 'video') {
					if(d.youtubeID === id) return 'bold';
				} else if (sourceType == 'channel') {
					if(d.channel === id) return 'bold';
				}
			});
	};

	this.highlightOff = function () {
		this.vis.selectAll('.node').style('opacity', 1);
		this.vis.selectAll('.bar-title').style('font-weight', 'normal');
	};

	this._mouseClick = function (d) {
		this.app.showDetails(d,'video');
	};

}