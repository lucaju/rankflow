import topvideosMustache from './topvideos.html';
import topVideoVis from './TopVideosVis';

import {select} from 'd3-selection/dist/d3-selection.min';


export default function Topvideos(app) {
	this.app = app;
	this.vis;

	this.init = function init() {

		// data
		const pageData = {
			title: 'Videos mais recomendados',
		};

		// buid page
		const html = topvideosMustache(pageData);
		select('#app').append('div').attr('id','topvideos-section');
		select('#topvideos-section').html(html);

		this.vis = new topVideoVis(this.app);
		this.vis.init();
	};

	this.load = function(data) {
		select('#topvideos-section').select('.spiner').hide();
		this.vis.update(data);
	};

	this.loading = function() {
		select('#topvideos-section').select('.spiner').show();
		this.vis.exit();
	};

	this.highlightOn = function (id, sourceType) {
		this.vis.highlightOn(id, sourceType);
	};

	this.highlightOff = function (youtubeID) {
		this.vis.highlightOff(youtubeID);
	};
}