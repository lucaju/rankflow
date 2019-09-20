/*
@author: Luciano Frizzera <lucaju@gmail.com>
*/

// modules
import UIkit from 'uikit/dist/js/uikit.min';
import uikiticons from 'uikit/dist/js/uikit-icons.min';

import {selection} from 'd3-selection/dist/d3-selection.min';

import 'uikit/dist/css/uikit.min.css';
import './main.css';

import datamodel from './datamodel';
import header from './components/header';
import sidebar from './components/sidebar';
import Topmenu from './components/topmenu';
import Topvideos from './components/topvideos';
import Topchannels from './components/topchannels';
import Rankflow from './components/rankflow';
import Details from './components/details';
import Methodology from './components/methodology';



// variables
export const channelColours = [
	'#9badf9',
	'#f6a072',
	'#3be6ea',
	'#dd9fe9',
	'#ebae64',
	'#fa928f',
	'#5abef6',
	'#d0d875',
	'#e565a4',
	'#8fdc8c',
];

export let config;

let terms = [];
let period = {};
let selectedTerm = {};
let showTableAll = false;

// add functionality to D3 Selection
selection.prototype.show = function() {  
	this.style('display', 'initial');
	return this;
};

selection.prototype.hide = function() {  
	this.style('display', 'none');
	return this;
};

uikiticons(UIkit);



const init = async () => {

	// load config
	const res = await fetch('./config/config.json');
	config = await res.json();

	//defining properties
	terms = config.terms;
	period = config.period;

	selectedTerm = terms[0];

	
	//load components
	header.init();
	sidebar.init();

	// this.topMenu = new Topmenu(this);
	// this.topMenu.init();
	// this.topVideos = new Topvideos(this);
	// this.topVideos.init();
	// this.topChannels = new Topchannels(this);
	// this.topChannels .init();
	// this.rankflow = new Rankflow(this);
	// this.rankflow.init();
	// this.details = new Details(this);
	// this.details.init();
	// this.methodology = new Methodology(this);
	// this.methodology.init();

	//load data
	datamodel.init(config);
	const data = await datamodel.loadData(selectedTerm);
	console.log(data);


	// this.datamodel = new datamodel(this);
	// this.datamodel = datamodel;
	// this.datamodel.init(config);

	// this.datamodel.on('load', app.datamodelOnLoad);
	// this.datamodel.on('update', {data: Object}, function (e, data) {
	// 	app.datamodelOnLoad(data);
	// });
		

	// this.datamodel.loadData(this.selectedTerm)
	// 	.then(function (r) {
	// 		// console.log(r);
	// 		app.topVideos.load(r);
	// 		app.topChannels.load(r);
	// 		app.rankflow.load(r);
	// 	});

	
};

const selectTerm = term => {
	
	selectedTerm = terms.find(t => t.slug === term);

	// Dispatch the event.
	const event = new Event('selectTerm', selectedTerm);
	this.dispatchEvent(event);


	// topMenu.updateTerm(selectedTerm);

	// this.datamodelOnLoad();

	// this.datamodel.loadData(this.selectedTerm)
	// 	.then(function (r) {
	// 		// console.log(r);
	// 		app.topVideos.load(r);
	// 		app.topChannels.load(r);
	// 		app.rankflow.load(r);
	// 	});
	
};

// this.datamodelOnLoad = function () {
// 	this.topVideos.loading();
// 	this.topChannels.loading();
// 	this.rankflow.loading();
// };

const getTermByName = termName => terms.find(c => c.name == termName);

const getChannelByName = channelName => datamodel.collection.channels.find(c => c.name == channelName);

const itemMouseOver = (data,source) => {
	if(source == 'video') {
		this.topVideos.highlightOn(data.youtubeID, source);
		this.topChannels.highlightOn(data.channel);
		this.rankflow.highlightOn(data,source);
	} else if(source == 'channel') {
		this.topVideos.highlightOn(data.name, source);
		this.topChannels.highlightOn(data.name);
		this.rankflow.highlightOn(data,source);
	} else if(source == 'rank') {
		this.topVideos.highlightOn(data.data.youtubeID,'video');
		this.topChannels.highlightOn(data.channel,source);
		this.rankflow.highlightOn(data,source);
	}
};

const itemMouseOut = (data,source) => {
	if(source == 'video') {
		this.topVideos.highlightOff(data.youtubeID);
		this.topChannels.highlightOff(data.channel);
		this.rankflow.highlightOff(data);
	} else if(source == 'channel') {
		this.topVideos.highlightOff(data.name);
		this.topChannels.highlightOff(data.name);
		this.rankflow.highlightOff(data);
	} else if(source == 'rank') {
		this.topVideos.highlightOff(data.name);
		this.topChannels.highlightOff(data.name);
		this.rankflow.highlightOff(data);
	}
};

const showDetails = (d,source) => {
	this.details.addModal(d,source);
};


init();

export default {
	selectTerm,
	getTermByName,
	getChannelByName,
	itemMouseOver,
	itemMouseOut,
	showDetails
};
