//modules
import chroma from 'chroma-js';

import {
	select
} from 'd3-selection';
import {
	max
} from 'd3-array';
import {
	axisBottom,
	axisLeft
} from 'd3-axis';
import {
	scaleOrdinal,
	scaleLinear,
	scaleBand
} from 'd3-scale';
import {
	schemeSet3
} from 'd3-scale-chromatic';
import {
	transition
} from 'd3-transition';


export default function TopVideosVis(context) {

	this.context = context;

	this.topTenData = [];

	this.init = function (data) {

		this.topTenData = data;

		let topTenData = data.videos.slice(0, 10);

		let visContainer = select('#top-ten-videos');
		visContainer.html = '';

		let windowWidth = visContainer.node().getBoundingClientRect().width;

		let margin = {
			top: 30,
			right: 250,
			bottom: 30,
			left: 10
		};

		// let colour = scaleOrdinal(schemePaired);
		let colour = scaleOrdinal(schemeSet3);

		let width = windowWidth - margin.left - margin.right;
		let height = 300 - margin.top - margin.bottom;

		let svg = visContainer.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom);

		var x = scaleLinear().range([0, width]);
		var y = scaleBand().range([height, 0]);

		var g = svg.append('g')
			.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

		//inverse order
		topTenData.sort(function (a, b) {
			return a.sumRec - b.sumRec;
		});

		x.domain([0, max(topTenData, function (d) {
			return d.sumRec;
		})]);

		y.domain(topTenData.map(function (d) {
			return d.title;
		})).padding(0.2);

		g.append('g')
			.attr('class', 'x axis')
			.attr('transform', 'translate(0,' + height + ')')
			.call(axisBottom(x).ticks(0).tickFormat(''));

		// Axis labels
		// .call(axisBottom(x).ticks(5).tickFormat(function (d) {
		// 	return d;
		// }));

		g.append('g')
			.attr('class', 'y axis')
			.call(axisLeft(y).tickSize(0).tickFormat(''));

		let bar = g.selectAll('.bar')
			.data(topTenData)
			.enter()
			.append('g');

		bar.append('rect')
			.attr('class', 'bar')
			.attr('fill', function (d) {
				return colour(d.channel);
				// let channel = rankflowData.getChannelByName(d.channel);
				// return channel.colour;
			})
			.attr('x', 0)
			.attr('height', y.bandwidth())
			.attr('y', function (d) {
				return y(d.title);
			})
			.on('mousemove', function (d) {
				//change color
			})
			.on('mouseout', function (d) {
				//back to normal
			})
			.on('click', function (d) {
				//open popup
				// rankFlowVis.showDetails(d);
			}).transition().duration(750).delay(function (d, i) {
				return i * 100;
			}).attr('width', function (d) {
				return x(d.sumRec);
			});

		bar.append('text')
			.attr('class', 'bar-title')
			.attr('x', function (d) {
				return x(d.sumRec);
			})
			.attr('y', function (d) {
				return y(d.title);
			})
			.attr('dx', '.35em') //margin right
			.attr('dy', '1.35em') //vertical align middle
			.style('font', '10px sans-serif')
			.style('opacity', 0)
			.text(function (d) {
				return (d.title);
			}).transition().duration(750).delay(function (d, i) {
				return 750 + (i * 100);
			}).style('opacity', 1);

		bar.append('text')
			.attr('class', 'bar-value')
			.attr('x', function (d) {
				return x(d.sumRec);
			})
			.attr('y', function (d) {
				return y(d.title);
			})
			.attr('dx', '-.35em') //margin right
			.attr('dy', '1.15em') //vertical align middle
			.attr('text-anchor', 'end')
			.style('font', '12px sans-serif')
			.style('font-weight', 'bold')
			.style('fill', function (d) {
				let textColour = chroma(0, 0, 0, 0.9).hex();
				// let channel = rankflowData.getChannelByName(d.channel);
				// let contrast = chroma.contrast(channel.colour, textColour);
				// if (contrast < 4.5) textColour = chroma(255, 255, 255, 0.85).hex();
				return textColour;
			})
			.style('opacity', 0)
			.text(function (d) {
				return (d.sumRec);
			}).transition().duration(750).delay(function (d, i) {
				return 750 + (i * 100);
			}).style('opacity', 1);

	};

}