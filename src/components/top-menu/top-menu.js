import moment from 'moment';
import 'moment/locale/pt-br';
import 'moment/locale/en-ca';
import {select} from 'd3-selection/dist/d3-selection.min';
import UIkit from 'uikit/dist/js/uikit.min';

import topMenuHBS from './top-menu.hbs';
import {config, getSelectedTerm} from '../../app';
import {event as sidebarEvent} from '../sidebar/sidebar';

let pageData;

const init = () => {

	if (config.language === 'pt') {
		moment.locale('pt-br');
	} else {
		moment.locale('en-us');
	}
	
	const startDate = moment(config.period.start).locale(config.language).format('DD MMMM');
	const endDate = moment(config.period.end).locale(config.language).format('DD MMMM');

	// data
	pageData = {
		title: config.meta.title,
		subtitle: config.meta.subtitle,
		currentTerm: getSelectedTerm().name,
		currentPeriod: `${startDate} - ${endDate}`,
	};

	// buid page
	const html = topMenuHBS(pageData);

	select('#app').append('div').attr('id','top-menu');
	select('#top-menu').html(html);

	UIkit.toggle(select('#small-title').node(), {
		mode: 'media',
		animation: 'uk-animation-fade,uk-animation-fade',
	});

	select('#menu-section').on('active', toggleSmallTittle);
	select('#menu-section').on('inactive', toggleSmallTittle);

	select('#menu-section').on('active', toggleSmallTittle);
	select('#menu-section').on('inactive', toggleSmallTittle);
};

const toggleSmallTittle = () => {
	UIkit.toggle(select('#small-title').node()).toggle();
};

const updateTerm = term => {
	pageData.currentTerm = term.name;
	const html = topMenuHBS(pageData);
	select('#top-menu').html(html);
};

sidebarEvent.on('selectTerm', term => updateTerm(term));


export default {
	init
};
