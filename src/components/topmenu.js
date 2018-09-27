import UIkit from 'uikit/dist/js/uikit.min';
import topmenuMustache from './topmenu.html';
import {select} from 'd3-selection';

export default function Topmenu(app) {
	this.app = app;

	this.init = function init() {
		// data
		this.pageData = {
			title: 'Eleições Brasil 2018',
			subtitle: 'RankFlow das Recomendações do YouTube',
			currentTerm: this.app.selectedTerm.name,
			currentPeriod: '23 de Setembro a 29 de setembro',
		};

		// buid page
		const html = topmenuMustache(this.pageData);

		select('#app').append('div').attr('id','top-menu');
		select('#top-menu').html(html);

		// $(html).appendTo($('#app'));

		UIkit.toggle($('#small-title'), {
			mode: 'media',
			animation: 'uk-animation-fade,uk-animation-fade',
		});

		select('#menu-section').on('active', this.toggleSmallTittle);
		select('#menu-section').on('inactive', this.toggleSmallTittle);

		// $('#menu-section').on('active', this.toggleSmallTittle);
		// $('#menu-section').on('inactive', this.toggleSmallTittle);
	};

	this.toggleSmallTittle = function toggleSmallTittle() {
		UIkit.toggle($('#small-title')).toggle();
	};

	this.updateTerm = function(term) {
		this.pageData.currentTerm = term.name;
		const html = topmenuMustache(this.pageData);

		const topMenu = select('#top-menu');
		topMenu.html(html);

		// $('#current-view').find('#current-tern').html(termSelected.name);

	};

	this.updatePeriod = function(period) {

		// this.pageData.currentTerm = term.name;
		// const html = topmenuMustache(this.pageData);

		// const topMenu = select('#top-menu');
		// topMenu.html(html);


		
		// let html = rankflowData.displayPeriodStartDate() + ' a ' + rankflowData.displayPeriodEndDate();

		// $('#current-view').find('#current-period').html(html);

		// const termSelected = rankflowData.terms.find(term => term.slug == this.selectedTerm);
		// $('#current-view').find('#current-term').html(termSelected.name);
	};
}