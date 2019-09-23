/*
@author: Luciano Frizzera <lucaju@gmail.com>
*/

// modules
import EventEmitter from 'event-emitter';
import {selection} from 'd3-selection/dist/d3-selection.min';
import UIkit from 'uikit/dist/js/uikit.min';
import uikiticons from 'uikit/dist/js/uikit-icons.min';

import 'uikit/dist/css/uikit.min.css';
import './main.css';

import datamodel from './datamodel';
import header from './components/header/header';
import sidebar from './components/sidebar/sidebar';
import topMenu from './components/top-menu/top-menu';
import topVideos from './components/top-videos/top-videos';
import topChannels from './components/top-channels/top-channels';
import rankflow from './components/rankflow/rankflow';
import details from './components/details/details';
import methodology from './components/methodology/methodology';


export const appEvent = new EventEmitter();
export let config;
export let ui;
let terms;
let selectedTerm;
// let period;


const init = async () => {

	librariesSetup();

	// load config
	await loadConfig();

	//load components
	header.init();
	sidebar.init();
	topMenu.init();
	topVideos.init();
	topChannels.init();
	rankflow.init();
	methodology.init();
	details.init();

	//load data
	datamodel.init(config);
	const data = await datamodel.loadData(selectedTerm);

	topVideos.load(data);
	topChannels.load(data);
	rankflow.load(data);

};

const librariesSetup = () => {

	//setup
	uikiticons(UIkit);
	// add functionality to D3 Selection
	selection.prototype.show = function() {  
		this.style('display', 'initial');
		return this;
	};

	selection.prototype.hide = function() {  
		this.style('display', 'none');
		return this;
	};

};

const loadConfig = async () => {
	const res = await fetch('./config/config.json');
	config = await res.json();

	terms = config.terms;
	// period = config.period;
	selectedTerm = terms[0];
	
	await loadUIlanguage(config.meta.language);
	return;
};

const loadUIlanguage = async lang => {
	const res = await fetch(`./config/ui-${lang}.json`);
	ui = await res.json();
	return;
};

sidebar.event.on('selectTerm', async term => {
	selectedTerm = term;

	topVideos.loading();
	topChannels.loading();
	rankflow.loading();

	const data = await datamodel.loadData(selectedTerm);

	topVideos.load(data);
	topChannels.load(data);
	rankflow.load(data);

});

export const getSelectedTerm = () =>  selectedTerm;

export const getChannelByName = channelName => datamodel.getChannelByName(channelName);

export const itemMouseOver = (data,source) => {
	if(source == 'video') {
		topVideos.highlightOn(data.youtubeID, source);
		topChannels.highlightOn(data.channel);
		rankflow.highlightOn(data,source);
	} else if(source == 'channel') {
		topVideos.highlightOn(data.name, source);
		topChannels.highlightOn(data.name);
		rankflow.highlightOn(data,source);
	} else if(source == 'rank') {
		topVideos.highlightOn(data.data.youtubeID,'video');
		topChannels.highlightOn(data.channel,source);
		rankflow.highlightOn(data,source);
	}
};

export const itemMouseOut = (data,source) => {
	if(source == 'video') {
		topVideos.highlightOff(data.youtubeID);
		topChannels.highlightOff(data.channel);
		rankflow.highlightOff(data);
	} else if(source == 'channel') {
		topVideos.highlightOff(data.name);
		topChannels.highlightOff(data.name);
		rankflow.highlightOff(data);
	} else if(source == 'rank') {
		topVideos.highlightOff(data.name);
		topChannels.highlightOff(data.name);
		rankflow.highlightOff(data);
	}
};

export const showDetails = (d,source) => {
	details.addModal(d,source);
};

init();

export default {
	config,
	appEvent,
	getSelectedTerm,
	getChannelByName,
	itemMouseOver,
	itemMouseOut,
	showDetails
};
