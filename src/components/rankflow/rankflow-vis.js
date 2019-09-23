//modules
import {extent,min} from 'd3-array/dist/d3-array.min';
import {axisBottom,axisLeft} from 'd3-axis/dist/d3-axis.min';
import {nest} from 'd3-collection/dist/d3-collection.min';
import {selection,select,selectAll} from 'd3-selection';
import {scaleOrdinal,scaleTime,scaleLinear} from 'd3-scale/dist/d3-scale.min';
import {schemePaired} from 'd3-scale-chromatic/dist/d3-scale-chromatic.min';
import {line,curveStep} from 'd3-shape/dist/d3-shape.min';
import {timeFormat,timeParse} from 'd3-time-format/dist/d3-time-format.min';
import {voronoi} from 'd3-voronoi/dist/d3-voronoi.min';
require('d3-transition/dist/d3-transition.min');

import UIkit from 'uikit/dist/js/uikit.min';
import moment from 'moment';

import {config, ui, getChannelByName, itemMouseOver, itemMouseOut, showDetails} from '../../app';


const margin = {
	top: 20,
	right: 30,
	bottom: 30,
	left: 50
};
const topN = 5;
const strokeWidth = [8, 6, 5, 5, 4, 4, 3, 3, 2, 2]; //Stroke width per max position

let windowWidth = 900;
let resizeTimer;

let width = 800;
let height = 500;

let visDataset;
let allVideosIDs;
let namesByID;
let flatData;

let color;

let xScale;
let yScale;
let xAxis;
let yAxis;

let lineStyle;

let focus;
let focusData;
let voronoiFeature;
let voronoiGroup;

let popUpName;

let parseTime = timeParse('%Y-%m-%d');

let minDateWidth = 35;


//----- CONSTRUCTOR
const init = () => {

	windowWidth = document.body.clientWidth;

	height = 500 - margin.top - margin.bottom;

	window.addEventListener('resize', () => resize());

};

//---- RESIZE
const resize = () => {
	//width only
	if (windowWidth != document.body.clientWidth) {
		//delay... end resizing
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() =>{
			windowWidth = document.body.clientWidth;
			update(visDataset, 'resize');
		}, 250);

	}
};

const setWidth = () => {

	const numberDays = moment(config.period.end).diff(moment(config.period.start), 'days')+1;

	const minVizWidth = (numberDays * minDateWidth) + margin.left + margin.right - 240; //240 is the width of side bar. Better to get this by code

	const scrollHint = UIkit.toggle(select('#horizontal-scroll-hint').node());

	if (windowWidth < minVizWidth) {
		width = minVizWidth - margin.left - margin.right - 120;
		if (!scrollHint.isToggled()) scrollHint.toggle();
	} else {
		width = (windowWidth - 140) - margin.left - margin.right - 120;
		if (scrollHint.isToggled()) scrollHint.toggle();
	}

};

//---- SETUP VIS
const setupvis = () => {

	setWidth();

	parseTime = timeParse('%Y-%m-%d');
	///////////////////// COLOR ////////////////////////// 

	color = scaleOrdinal(schemePaired);

	///////////////////// SCALE & AXES ////////////////////////// 

	const parsedDates = [];
	let dayIterac = moment(config.period.start);

	for (dayIterac;
		dayIterac.isBefore(moment(config.period.end));
		dayIterac.add(1, 'days')) {
		parsedDates.push(parseTime(dayIterac.format('YYYY-MM-DD')));
	}

	xScale = scaleTime().range([0, width - 60 - 240]);
	xScale.domain(extent(parsedDates, d => d));

	yScale = scaleLinear().domain([0.5, 10.5]).range([0, height]);

	let ticksNumber = null;
	if (parsedDates.length < 10) ticksNumber = parsedDates.length;

	xAxis = axisBottom(xScale).tickFormat(timeFormat('%d/%m')).tickSize(0).ticks(ticksNumber);
	yAxis = axisLeft().scale(yScale).tickSize(0);


	///////////////////// LINE TYPE  //////////////////////////
	lineStyle = line()
		// .curve(curveMonotoneX) //Slight rounding without too much deviation
		.curve(curveStep); //Slight rounding without too much deviation

};

// const updateDates = () => {

//     let parsedDates = [];
//     let dayIterac = moment(app.datamodel.period.startDate);

//     while (dayIterac <= app.datamodel.period.endDate) {
//         parsedDates.push(parseTime(dayIterac.format('YYYY-MM-DD')));
//         dayIterac.add(1, 'days');
//     }

// };

//////////////////////// Create CHART //////////////////////// 
const update = (data,resize) => {

	const dataset = data;

	setupvis();

	//clear
	select('#visualization').html('');

	////////////////////////  Create focus SVG
	focus = select('#visualization').append('svg')
		.style('width', width + margin.left + margin.right - 240) //240 is the width of side bar. Better to get this by code
		.style('height', height + margin.top + margin.bottom)
		.style('max-width','none')
		.append('g')
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	//Append clippath to focus chart
	let defs = focus.append('defs');

	defs.append('clipPath')
		.attr('id', 'clip')
		.append('rect')
		.attr('width', width)
		.attr('height', height);

	//Append x axis to focus chart	
	focus.append('g')
		.attr('class', 'x axis')
		.style('font-size', 13)
		.attr('transform', 'translate(0,' + (height + 9) + ')')
		.call(xAxis);

	//Append y axis to focus chart	
	focus.append('g')
		.attr('class', 'y axis')
		.attr('transform', 'translate(-10,0)')
		.call(yAxis)
		.append('text')
		.attr('class', 'titles')
		.attr('transform', 'rotate(-90)')
		.attr('x', -(height / 2))
		.attr('y', -35)
		.attr('dy', '.71em')
		.style('font-size', 14)
		.style('text-anchor', 'middle')
		.text(ui.rankflow.yAxisLabel);


	//////////////////////// Initiate the voronoi function ///////////////////////////// 
	voronoiFeature = voronoi()
		.extent([
			[-margin.left, -margin.top],
			[width + margin.right, height + margin.bottom]
		]);

	//Initiate the voronoi group element	
	voronoiGroup = focus.append('g')
		.attr('class', 'voronoi');


	//////////////////////// Tooltip ///////////////////////////// 
	popUpName = focus.append('g')
		.attr('transform', 'translate(-100,-100)')
		.attr('class', 'popUpName')
		.style('pointer-events', 'none');

	popUpName.append('circle')
		.attr('class', 'tooltipCircle')
		.attr('r', 30.5);

	popUpName.append('text')
		.style('font-size', 12)
		.attr('class', 'titles')
		.attr('y', -15);
		
	vis(dataset,resize);

};

//////////////////////// Reduce dataset to TOP N
const reduceToTopN = data => {
	const array = [];
	data.forEach(v => {
		let isTopN = false;
		v.dates.forEach(d => {
			if (d.recRank <= topN) {
				isTopN = true;
				return;
			}
		});
		if (isTopN) array.push(v);
	});
	return array;
};

//////////////////////// UPDATE VIS
const vis = (data, resize) => {

	if (resize != 'resize') {

		//reset
		visDataset = [];
		allVideosIDs = [];
		namesByID = [];

		//reduce and load dataset
		visDataset = reduceToTopN(data.videos, 1);
	}

	let channels = [];


	/////////////////////  gather data

	// SAVE a list of Channels
	const saveChannel = channel => {
		let hasChannel = false;
		channels.forEach(c => {
			if (c === channel) hasChannel = true;
		});

		if (!hasChannel) channels.push(channel);
	};

	for (const d of visDataset) {

		let i = visDataset.indexOf(d);

		allVideosIDs[i] = d.id;
		namesByID[d.id] = i;
		saveChannel(d.channel);
	}


	///////////////////// redefine color
	// color.domain(allVideosIDs);
	color.domain(channels);

	///////////////////// Line type: Change data ////////////////////////// 
	lineStyle.x(d => xScale(parseTime(d.date)))
		.y(d => yScale(d.recRank));


	///////////////////////// Voronoi //////////////////////////// 

	//Create a flat data version for the Voronoi
	/*************************************************************/
	flatData = [];
	for (const k in visDataset) {
		const k_data = visDataset[k];
		for (const d of k_data.dates) {
			if (d.recRank <= 10) flatData.push({
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
	const maxPosition = nest()
		.key(d => d.id)
		.rollup(d => min(d, (g) => g.recRank))
		// .rollup(d => max(d, (g) => g.sumRec))
		.entries(flatData);

	// /*************************************************************/


	// ///////////////////////// Reinitiate the voronoi function

	voronoiFeature.x(d => xScale(parseTime(d.date)))
		.y(d => yScale(d.recRank));


	// DRAW VORONOI
	const voronoiGrid = voronoiGroup.selectAll('path')
		.data(voronoiFeature.polygons(flatData.filter(d => {
			return parseTime(d.date) >= xScale.domain()[0] & parseTime(d.date) <= xScale.domain()[1];
		})));

	voronoiGrid.exit().remove();

	//new data
	voronoiGrid.enter().append('path')
		.attr('class', 'voronoiCells')
		.attr('d', d => 'M' + d.join('L') + 'Z')
		.style('cursor','pointer')
		.datum(d => d.data)
		.on('mouseover', d => itemMouseOver(d,'rank') )
		.on('mouseout', d =>  itemMouseOut(d,'rank'))
		.on('click', d => showDetails(d,'rank'));


	//update existing data
	voronoiGrid
		.attr('d', d => 'M' + d.join('L') + 'Z')
		.style('cursor','pointer')
		.datum(d => d.data)
		.on('mouseover', d => itemMouseOver(d,'rank') )
		.on('mouseout', d =>  itemMouseOut(d,'rank'))
		.on('click', d => showDetails(d,'rank'));


	//Move selected element to the front
	selection.prototype.moveToFront = function () {
		return this.each(function () {
			this.parentNode.appendChild(this);
		});
	};


	//////////////////////// Create PLOT //////////////////////// 
	//data
	focusData = focus.selectAll('.focus')
		.data(visDataset);

	//remove previous
	focusData.exit().remove();

	//add news
	const newDataPoints = focusData.enter().append('g')
		.attr('class', d => 'focus ' + d.id);

	selectAll('.focus')
		.attr('class', d => 'focus ' + d.id);

	// LINES
	let pathLine = newDataPoints.append('path')
		.attr('class', 'line')
		.attr('clip-path', 'url(#clip)')
		.attr('d', d => lineStyle(d.dates))
		.style('pointer-events', 'none')
		.style('cursor','pointer')
		.style('stroke-linejoin', 'round')
		.style('opacity', 0)
		.style('stroke-width', d => strokeWidth[maxPosition[namesByID[d.id]].value - 1])
		.style('stroke', d => getChannelByName(d.channel).colour)
		.transition()
		.duration(750)
		.delay((d, i) => i * 20)
		.style('opacity', 0.6);

	pathLine = focusData.select('path');

	pathLine.transition()
		.duration(2000)
		.delay(500)
		.attr('d', d => lineStyle(d.dates))
		.style('stroke-width', d => strokeWidth[maxPosition[namesByID[d.id]].value - 1])
		.style('stroke', d => getChannelByName(d.channel).colour);


	//CIRCLE
	let circles = newDataPoints.append('circle')
		.attr('class', 'circle')
		.attr('clip-path', 'url(#clip)')
		.attr('cx', d => xScale(parseTime(d.dates[0].date)))
		.attr('cy', d => yScale(d.dates[0].recRank))
		.attr('r', d => strokeWidth[maxPosition[namesByID[d.id]].value - 1])
		.style('cursor','pointer')
		.style('opacity', 0)
		.style('stroke', d => getChannelByName(d.channel).colour)
		.style('stroke-width', 4)
		.style('fill', d => {
			if (d.dates[0].views == -1) {
				return 'white';
			} else {
				return getChannelByName(d.channel).colour;
			}
		})
		.transition()
		.duration(750)
		.delay((d, i) => i * 20)
		.style('opacity', 1);

	circles = focusData.select('circle');

	circles.transition()
		.duration(2000).delay(1500)
		.attr('cx', d => xScale(parseTime(d.dates[0].date)))
		.attr('cy', d => yScale(d.dates[0].recRank))
		.attr('r', d => strokeWidth[maxPosition[namesByID[d.id]].value - 1])
		.style('stroke', d => getChannelByName(d.channel).colour)
		.style('fill', d => {
			if (d.dates[0].views == -1) {
				return 'white';
			} else {
				return getChannelByName(d.channel).colour;
			}
		});

};

// const getFlatDataById = id => flatData.find(fd => fd.id === id);

const highlightOn = (data,sourceType) => {

	focus.selectAll('.focus')
		.style('opacity', d => {
			if(sourceType == 'rank') {
				return (d.youtubeID === data.data.youtubeID) ? 1 : 0.07;
			} else if (sourceType == 'channel') {
				return (d.channel === data.name) ? 1 : 0.07;
			} else if (sourceType == 'video') {
				return (d.youtubeID === data.youtubeID) ? 1 : 0.07;
			}
		});

	//popup
	if (sourceType === 'rank') showpopup(data);
};

const showpopup = d => {
	select('.popUpName').moveToFront(); //Move the tooltip to the front

	popUpName.attr('transform', 'translate(' + xScale(parseTime(d.date)) + ',' + yScale(d.recRank) + ')'); //Change position, size of circle and text of tooltip

	const circleSize = 10;

	popUpName.select('.tooltipCircle')
		.style('fill', getChannelByName(d.channel).colour)
		.attr('r', circleSize);

	popUpName.select('text').text(d.moment.format('MMM D') + ': ' + d.title + ' (Rank: ' + d.recRank + ')');

	//fix popuop position if text is out of boundaries to tlef or ti the right
	if ((popUpName.node().getCTM().e - margin.left) - (popUpName.node().getBBox().width / 2) < 0) {
		popUpName.select('text').style('text-anchor', 'start');
	} else if ((popUpName.node().getCTM().e - margin.left) + (popUpName.node().getBBox().width / 2) > width - 120) {
		popUpName.select('text').style('text-anchor', 'end');
	}
};

const highlightOff = () => {
	focus.selectAll('.focus').style('opacity', 1);
	popUpName.attr('transform', 'translate(-100,-100)');
	popUpName.select('text').style('text-anchor', 'middle');
};

const exit = () => {
	if (!focus) return;

	const duration = 500;
	focus.selectAll('.focus')
		.transition()
		.duration(duration / 2)
		.style('opacity', 0);
};


export default {
	init,
	update,
	exit,
	highlightOn,
	highlightOff
};
