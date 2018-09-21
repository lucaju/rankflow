import $ from 'jquery';
import topchannelsMustache from './topchannels.html';

export default function Topvideos(app) {
	this.app = app;

	this.init = function init() {
		// data
		const pageData = {
			title: 'Canais mais recomendados',
		};

		// buid page
		const html = topchannelsMustache(pageData);
		$(html).appendTo($('#app'));
	};

	this.update = function(period) {
		// topVideosVis.init(data.filteredPeriod);
	};

	this.success = function() {
		//- > make it local
		$('.spiner').hide();
	};

	this.load = function() {
		//- > make it local
		$('#top-ten-channels').empty();
		$('.spiner').show();
	};
}