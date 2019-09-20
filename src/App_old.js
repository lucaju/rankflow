/*
@author: Luciano Frizzera <lucaju@gmail.com>
*/

// modules
import UIkit from 'uikit/dist/js/uikit.min';
import uikiticons from 'uikit/dist/js/uikit-icons.min';

import {selection} from 'd3-selection/dist/d3-selection.min';
import {json} from 'd3-fetch/dist/d3-fetch.min';

import 'uikit/dist/css/uikit.min.css';
import './main.css';

import datamodel from './datamodel';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Topmenu from './components/topmenu';
import Topvideos from './components/topvideos';
import Topchannels from './components/topchannels';
import Rankflow from './components/rankflow';
import Details from './components/details';
import Methodology from './components/methodology';


// APP

function App() {
	// variables
	this.terms = [];
	this.relatedTerms = [];
	this.period = {};

	this.selectedTerm = {};

	this.showTableAll = false;

	this.channelColours = [
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

	// add functionality to D3 Selection
	selection.prototype.show = function() {  
		this.style('display', 'initial');
		return this;
	};

	selection.prototype.hide = function() {  
		this.style('display', 'none');
		return this;
	};

	this.loadConfig = async () => {
		const res = await fetch('./config/config.json');
		const data = await res.json();
		this.init(data);
	};

	this.init = async function (config) {
		// methods
		// this.init = function init() {
		uikiticons(UIkit);

		this.terms = config.terms;
		this.relatedTerms = config.relatedTerms;
		this.period = config.period;

		this.selectedTerm = this.terms[0];

		// header
		new Header().init();

		// components
		this.sidebar = new Sidebar(this);
		this.sidebar.init();
		this.topMenu = new Topmenu(this);
		this.topMenu.init();
		this.topVideos = new Topvideos(this);
		this.topVideos.init();
		this.topChannels = new Topchannels(this);
		this.topChannels .init();
		this.rankflow = new Rankflow(this);
		this.rankflow.init();
		this.details = new Details(this);
		this.details.init();
		this.methodology = new Methodology(this);
		this.methodology.init();

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

		datamodel.init(config);
		const data = await datamodel.loadData(this.selectedTerm);
		console.log(data);
	};

	this.selectTerm = function(term) {
		
		const termSelected = this.terms.find(t => t.slug == term);
		this.selectedTerm = termSelected; //new term

		this.topMenu.updateTerm(termSelected);

		this.datamodelOnLoad();

		this.datamodel.loadData(this.selectedTerm)
			.then(function (r) {
				// console.log(r);
				app.topVideos.load(r);
				app.topChannels.load(r);
				app.rankflow.load(r);
			});
		
	};

	this.datamodelOnLoad = function () {
		this.topVideos.loading();
		this.topChannels.loading();
		this.rankflow.loading();
	};

	this.getTermByName = function (termName) {
		const term = this.terms.find(c => c.name == termName);
		return term;
	};

	this.getChannelByName = function(channelName) {
		// const term = datamodel.terms.find(t => t.slug == this.selectedTerm);
		const channel = datamodel.videoCollection.channels.find(c => c.name == channelName);
		return channel;
	};

	this.itemMouseOver = function(data,source) {
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

	this.itemMouseOut = function(data,source) {
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

	this.showDetails = function(d,source) {
		this.details.addModal(d,source);
	};


}

const app = new App();
window.app = app;
app.loadConfig();