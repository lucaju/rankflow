import UIkit from 'uikit/dist/js/uikit.min';
import rankflowMustache from './rankflow.html';
import rankflowVis from './RankflowVis';
import {select} from 'd3-selection/dist/d3-selection.min';

export default function Rankflow(app) {
	this.app = app;
	this.vis;

	this.init = function init() {
		// data
		this.pageData = {
			title: 'Videos mais recomendados no período',
			showScrollHint: false,
			scrollText: 'Role'
		};

		// buid page
		const html = rankflowMustache(this.pageData);
		select('#app').append('div').attr('id','rankflow-section');
		select('#rankflow-section').html(html);

		UIkit.toggle(select('#horizontal-scroll-hint'), {
			mode: 'media',
			animation: 'uk-animation-fade,uk-animation-fade'
		});
		
		this.vis = new rankflowVis(this.app);
		this.vis.init();
	};

	this.load = function(data) {
		select('#rankflow-section').select('.spiner').hide();
		this.vis.update(data);
	};

	this.loading = function() {
		select('#rankflow-section').select('.spiner').show();
		this.vis.exit();
	};

	this.highlightOn = function (id, sourceType) {
		this.vis.highlightOn(id, sourceType);
	};

	this.highlightOff = function (youtubeID) {
		this.vis.highlightOff(youtubeID);
	};

}