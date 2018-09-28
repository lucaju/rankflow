/*
@author: Luciano Frizzera <lucaju@gmail.com>
*/

// modules
// import $ from 'jquery';

import UIkit from 'uikit/dist/js/uikit.min';
import uikiticons from 'uikit/dist/js/uikit-icons.min';

// import d3 from 'd3';
import {selection} from 'd3-selection';
// import chroma from 'chroma';

// import moment from 'moment-with-locales-es6';

import visconfig from './visconfig.json';

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
	this.terms = visconfig.terms;
	this.relatedTerms = visconfig.relatedTerms;
	this.period = visconfig.period;

	this.selectedTerm = this.terms[0];

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

	this.init = function () {
		// methods
		// this.init = function init() {
		uikiticons(UIkit);

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
		this.datamodel = datamodel;
		this.datamodel.init(this);

		this.datamodel.on('load', app.datamodelOnLoad);
		// this.datamodel.on('update', {data: Object}, function (e, data) {
		// 	app.datamodelOnLoad(data);
		// });
			

		this.datamodel.loadData(this.selectedTerm)
			.then(function (r) {
				console.log(r);
				app.topVideos.load(r);
				app.topChannels.load(r);
				app.rankflow.load(r);
			});
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
app.init();