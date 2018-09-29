//modules
import UIkit from 'uikit/dist/js/uikit.min';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'moment/locale/en-ca';
import topmenuMustache from './topmenu.html';
import {select} from 'd3-selection/dist/d3-selection.min';

export default function Topmenu(app) {
	this.app = app;

	this.init = function init() {

		moment.locale('pt-br');
		
		const startDate = moment(this.app.period.start).locale('pt').format('DD [de] MMMM');
		const endDate = moment(this.app.period.end).locale('pt').format('DD [de] MMMM');

		// const startDateLocale = this.app.period.start.locale('pt').format('DD MMMM');
		// const endDateLocale = this.app.period.end.locale('pt').format('DD MMMM');

		// data
		this.pageData = {
			title: 'Eleições Brasil 2018',
			subtitle: 'RankFlow das Recomendações do YouTube',
			currentTerm: this.app.selectedTerm.name,
			currentPeriod: `${startDate} a ${endDate}`,
		};

		// buid page
		const html = topmenuMustache(this.pageData);

		select('#app').append('div').attr('id','top-menu');
		select('#top-menu').html(html);

		UIkit.toggle(select('#small-title').node(), {
			mode: 'media',
			animation: 'uk-animation-fade,uk-animation-fade',
		});

		select('#menu-section').on('active', this.toggleSmallTittle);
		select('#menu-section').on('inactive', this.toggleSmallTittle);

		select('#menu-section').on('active', this.toggleSmallTittle);
		select('#menu-section').on('inactive', this.toggleSmallTittle);
	};

	this.toggleSmallTittle = function toggleSmallTittle() {
		UIkit.toggle(select('#small-title').node()).toggle();
	};

	this.updateTerm = function(term) {
		this.pageData.currentTerm = term.name;
		const html = topmenuMustache(this.pageData);

		const topMenu = select('#top-menu');
		topMenu.html(html);
	};

}