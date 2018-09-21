import $ from 'jquery';
import UIkit from 'uikit/dist/js/uikit.min';
import topmenuMustache from './topmenu.html';

export default function Topmenu(app) {
	this.app = app;

	this.init = function init() {
		// data
		const pageData = {
			title: 'Eleições Brasil 2018',
			subtitle: 'RankFlow das Recomendações do YouTube',
			currentTerm: this.app.currentTerm,
			currentPeriod: '23 de Setembro a 29 de setembro',
		};

		// buid page
		const html = topmenuMustache(pageData);
		$(html).appendTo($('#app'));

		UIkit.toggle($('#small-title'), {
			mode: 'media',
			animation: 'uk-animation-fade,uk-animation-fade',
		});

		$('#menu-section').on('active', this.toggleSmallTittle);
		$('#menu-section').on('inactive', this.toggleSmallTittle);
	};

	this.toggleSmallTittle = function toggleSmallTittle() {
		UIkit.toggle($('#small-title')).toggle();
	};

	this.update = function(period) {
		// let html = rankflowData.displayPeriodStartDate() + ' a ' + rankflowData.displayPeriodEndDate();

		// $('#current-view').find('#current-period').html(html);

		// const termSelected = rankflowData.terms.find(term => term.slug == this.selectedTerm);
		// $('#current-view').find('#current-term').html(termSelected.name);
	};
}