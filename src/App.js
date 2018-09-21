/*
@author: Luciano Frizzera <lucaju@gmail.com>
*/

// modules
// import $ from 'jquery';

import UIkit from 'uikit/dist/js/uikit.min';
import uikiticons from 'uikit/dist/js/uikit-icons.min';

// import d3 from 'd3';
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
import Methodology from './components/methodology';

// APP

function App() {
	// variables
	this.terms = visconfig.terms;
	this.relatedTerms = visconfig.relatedTerms;
	this.period = visconfig.period;

	this.currentTerm = 'Lula-Lula';

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
		this.methodology = new Methodology(this);
		this.methodology.init();

		// this.datamodel = new datamodel(this);
		this.datamodel = datamodel;
		this.datamodel.init(this);

		this.datamodel.on('load', app.datamodelOnLoad);
		// this.datamodel.on('update', {data: Object}, function (e, data) {
		// 	app.datamodelOnLoad(data);
		// });
			

		this.datamodel.loadData(this.currentTerm)
			.then(function (r) {
				console.log(r);
				app.topVideos.success(r);
				// app.topChannels.success();
				// this.rankflow.success();
			});
	};

	this.datamodelOnLoad = function () {

		
		this.topVideos.load();
		// this.topChannels.load();
		// this.rankflow.load();

		// $('#visualization').empty();
		// $('#top-ten-videos').empty();
		// $('#top-ten-channels').empty();
		// $('.spiner').show();
	};

	this.datamodelOnLoad = function (data) {

		// _this.buildTopTenTable(data.filteredPeriod); //buld table        
		// if (_this.showTableAll) _this.builtTable(data.filteredPeriod);

		this.rankflow.update(data.filteredPeriod);
		this.topVideos.update(data.filteredPeriod);
		this.topChannels.update(data.filteredPeriod);

		this.topMenu.update(data.filteredPeriod);

		// rankFlowVis.setupvis();
		// rankFlowVis.builtChart();
		// rankFlowVis.vis(data.filteredPeriod);

		// console.log(data);
		
		// topVideosVis.init(data.filteredPeriod);
		// topChannelsVis.init(data.channels);

		//update html
		// let html = rankflowData.displayPeriodStartDate() + ' a ' + rankflowData.displayPeriodEndDate();

		// $('#current-view').find('#current-period').html(html);

		// const termSelected = rankflowData.terms.find(term => term.slug == this.selectedTerm);
		// $('#current-view').find('#current-term').html(termSelected.name);
	};


}

const app = new App();
window.app = app;
app.init();