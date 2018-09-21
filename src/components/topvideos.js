import $ from 'jquery';
import topvideosMustache from './topvideos.html';
import topVideoVis from './TopVideosVis';


export default function Topvideos(app) {
	this.app = app;

	this.init = function init() {

		this.vis = new topVideoVis(this);


		// data
		const pageData = {
			title: 'Videos mais recomendados',
		};

		// buid page
		const html = topvideosMustache(pageData);
		$(html).appendTo($('#app'));
	};

	this.update = function(period) {
		// topChannelsVis.init(data.channels);
	};

	this.success = function(data) {
		//- > make it local
		this.vis.init(data);
		$('.spiner').hide();
	};

	this.load = function() {
		//- > make it local
		$('#top-ten-videos').empty();
		$('.spiner').show();
	};
}