import'handlebars';
import sidebarHBS from './sidebar.hbs';
import {select} from 'd3-selection/dist/d3-selection.min';

import {config} from '../app';

// Handlebars.registerHelper('selectTerm', function (slug) {
// 	console.log('oi');	
// });



const init = () => {

	const pageData = {
		termsTitle: config.meta.termsTitle,
		terms: config.terms
	};

	Handlebars.registerHelper('list', function(items, options) {
		return items.map(asHtmlListItem).join('\n');
	  
		function asHtmlListItem(item) {
			return '<li><a onclick="">' + options.fn(item) + '</a></li>';
		}
	});

	// buid page
	const html = sidebarHBS(pageData);
	select('#app').append('div').attr('id','tm-sidebar-left');
	select('#tm-sidebar-left').html(html);

	
};

// export const selectTerm = term => {

// 	console.log('oi');
	
// 	// const selectedTerm = config.terms.find(t => t.slug === term);

// 	// // Dispatch the event.
// 	// const event = new Event('selectTerm', selectedTerm);
// 	// this.dispatchEvent(event);
// };


export default {
	init
};