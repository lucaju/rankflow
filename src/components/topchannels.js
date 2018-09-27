import topchannelsMustache from './topchannels.html';
import topChannelsVis from './TopChannelsVis';

import {select} from 'd3-selection';

export default function Topvideos(app) {
	this.app = app;
	this.vis;

	this.init = function init() {
		// data
		const pageData = {
			title: 'Canais mais recomendados',
		};

		// buid page
		const html = topchannelsMustache(pageData);
		select('#app').append('div').attr('id','topchannels-section');
		select('#topchannels-section').html(html);

		this.vis = new topChannelsVis(this.app);
		this.vis.init();
	};

	this.load = function(data) {
		select('#topchannels-section').select('.spiner').hide();
		this.vis.update(data);
	};

	this.loading = function() {
		select('#topchannels-section').select('.spiner').show();
		this.vis.exit();
	};

	this.highlightOn = function (channelName) {
		this.vis.highlightOn(channelName);
	};

	this.highlightOff = function (channelName) {
		this.vis.highlightOff(channelName);
	};
}