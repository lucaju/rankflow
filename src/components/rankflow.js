import $ from 'jquery';
import UIkit from 'uikit/dist/js/uikit.min';
import rankflowMustache from './rankflow.html';

export default function Rankflow(app) {
	this.app = app;

	this.showScrollHint = false;

	this.init = function init() {
		// data
		const pageData = {
			title: 'Videos mais recomendados no período',
			scrollText: 'Role',
		};

		// buid page
		const html = rankflowMustache(pageData);
		$(html).appendTo($('#app'));

		UIkit.toggle($('#horizontal-scroll-hint'), {
			mode: 'media',
			animation: 'uk-animation-fade,uk-animation-fade'
		});

		$('#horizontal-scroll-hint').on('show', function showHint() {
			this.showScrollHint = true;
		});

		$('#horizontal-scroll-hint').on('hide', function hideHint() {
			this.showScrollHint = false;
		});
	};

	this.update = function(period) {
		// rankFlowVis.setupvis();
		// rankFlowVis.builtChart();
		// rankFlowVis.vis(data.filteredPeriod);
	};

	this.success = function() {
		//- > make it local
		$('.spiner').hide();
		$('#rankflow-panel').scrollLeft(300);
	};

	this.load = function() {
		//- > make it local
		$('#visualization').empty();
		$('.spiner').show();
	};
}