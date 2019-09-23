//modules
import chroma from 'chroma-js/chroma.min';
import {select} from 'd3-selection';
import {max} from 'd3-array/dist/d3-array.min';
import {axisBottom,axisLeft} from 'd3-axis/dist/d3-axis.min';
import {scaleLinear,scaleBand} from 'd3-scale/dist/d3-scale.min';
require('d3-transition/dist/d3-transition.min');

import {getChannelByName, itemMouseOver, itemMouseOut, showDetails} from '../../app';

const margin = {
	top: 30,
	right: 250,
	bottom: 30,
	left: 10
};

let visContainer;
let svg;
let vis;

let topTenData;

let windowWidth;
let height;
let width ;

let xScale;
let yScale;
let yAxis;

let resizeTimer;


const init = () => {

	visContainer = select('#top-videos');

	setDimensions();
	setupVis();

	window.addEventListener('resize', () => resize());

};

const setDimensions = () => {
	windowWidth = visContainer.node().getBoundingClientRect().width;
	width = windowWidth - margin.left - margin.right;
	height = 300 - margin.top - margin.bottom;
};

const setupVis = () => {
	//clear
	visContainer.html('');

	svg = visContainer.append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom);

	//scale
	xScale = scaleLinear().range([0, width]);
	yScale = scaleBand().range([height, 0]);

	// AXIS
	visContainer.append('g')
		.attr('class', 'x axis')
		.attr('transform', 'translate(0,' + height + ')');

	yAxis = visContainer.append('g')
		.attr('class', 'y axis')
		.call(axisLeft(yScale).tickSize(0).tickFormat(''));

	//VIS
	vis = svg.append('g')
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

};

//---- RESIZE
const resize = () => {
	//width only
	if (windowWidth != document.body.clientWidth) {
		//delay... end resizing
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			setDimensions();
			setupVis();
			update(topTenData,'resize');
		}, 250);
	}
};

const update = (data,resize) => {

	if (!resize) {
		topTenData = data.videos.slice(0, 10);
		topTenData.sort((a, b) => a.sumRec - b.sumRec); //inverse order
	}

	updateScale();
	updateAxis();
	updateVis();
};


const updateScale = () => {
	xScale.domain([0, max(topTenData, d => d.sumRec)]);
	yScale.domain(topTenData.map(d => d.title)).padding(0.2);
};

const updateAxis = () => yAxis.call(axisBottom(xScale).ticks(0).tickFormat(''));

const updateVis = () => {

	//remove it all
	let nodes = vis.selectAll('.node').remove();

	//new data
	nodes = vis.selectAll('.node')
		.data(topTenData);

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
	nodes = vis.selectAll('.node');

	nodes.selectAll('.bar')
		.attr('fill', d => {
			const channel = getChannelByName(d.channel);
			return channel.colour;
		})
		.attr('x', 0)
		.attr('height', yScale.bandwidth())
		.attr('y', d => yScale(d.title))
		.style('cursor','pointer')
		.on('mousemove', d => itemMouseOver(d,'video'))
		.on('mouseout', d => itemMouseOut(d,'video'))
		.on('click', d => showDetails(d,'video'))
		.transition()
		.duration(750)
		.delay( (d, i) => i * 100)
		.attr('width', d => xScale(d.sumRec));

	nodes.selectAll('.bar-title')
		.attr('x', d => xScale(d.sumRec))
		.attr('y', d => yScale(d.title))
		.attr('dx', '.35em') //margin right
		.attr('dy', '1.35em') //vertical align middle
		.style('font', '10px sans-serif')
		.style('opacity', 0)
		.text( d => d.title)
		.transition()
		.duration(750)
		.delay((d, i) => 750 + (i * 100))
		.style('opacity', 1);

	nodes.selectAll('.bar-value')
		.attr('x', d => xScale(d.sumRec))
		.attr('y', d => yScale(d.title))
		.attr('dx', '-.35em') //margin right
		.attr('dy', '1.15em') //vertical align middle
		.attr('text-anchor', 'end')
		.style('font', '12px sans-serif')
		.style('font-weight', 'bold')
		.style('fill', d => {
			let textColour = chroma(0, 0, 0, 0.9).hex();
			const channel = getChannelByName(d.channel);
			const contrast = chroma.contrast(channel.colour, textColour);
			if (contrast < 4.5) textColour = chroma(255, 255, 255, 0.85).hex();
			return textColour;
		})
		.style('opacity', 0)
		.text(d => d.sumRec)
		.transition()
		.duration(750)
		.delay((d, i) => 750 + (i * 100))
		.style('opacity', 1);

};

const exit = () => {
	
	const duration = 500;
	const bar = vis.selectAll('.bar');

	bar.transition()
		.duration(duration)
		.attr('width', 0);

	vis.selectAll('.bar-title')
		.transition()
		.duration(duration / 2)
		// .attr('x', 0)
		.style('opacity', 0);

	vis.selectAll('.bar-value')
		.transition()
		.duration(duration)
		.attr('x', 0)
		.style('opacity', 0);
};

const highlightOn = (id, sourceType) => {

	vis.selectAll('.node')
		.style('opacity', d => {
			if (sourceType === 'video') {
				return (d.youtubeID === id) ? 1 : 0.5;
			} else if (sourceType === 'channel') {
				return (d.channel === id) ? 1 : 0.5;
			}
		});

	vis.selectAll('.bar-title')
		.style('font-weight', d => {
			if (sourceType === 'video') {
				if(d.youtubeID === id) return 'bold';
			} else if (sourceType == 'channel') {
				if(d.channel === id) return 'bold';
			}
		});
};

const highlightOff = () => {
	vis.selectAll('.node').style('opacity', 1);
	vis.selectAll('.bar-title').style('font-weight', 'normal');
};


export default {
	init,
	update,
	exit,
	highlightOn,
	highlightOff
};