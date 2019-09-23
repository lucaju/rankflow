import EventEmitter from 'event-emitter';
import {select, selectAll} from 'd3-selection/dist/d3-selection.min';

import sidebarHBS from './sidebar.hbs';
import {config} from '../../app';

export const event = new EventEmitter();

const init = () => {

	const pageData = {
		termsTitle: config.meta.sideBarTitle,
		terms: config.terms
	};

	// buid page
	const html = sidebarHBS(pageData);
	select('#app').append('div').attr('id','tm-sidebar-left');
	select('#tm-sidebar-left').html(html);

	//interaction
	selectAll('a').on('click', function() {
		const item = select(this);
		const slug = item.attr('slug');
		const selectedTerm = config.terms.find(t => t.slug === slug);
		event.emit('selectTerm', selectedTerm);
	});
	
};

export default {
	init,
	event
};