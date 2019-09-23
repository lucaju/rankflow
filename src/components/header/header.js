import headerHBS from './header.hbs';
import {select} from 'd3-selection/dist/d3-selection.min';

import {config} from '../../app';


const init = () => {

	const pageData = {
		title: config.meta.title,
		subtitle: config.meta.subtitle,
	};

	// buid page
	const html = headerHBS(pageData);
	select('#app').append('div').attr('id','header-section');
	select('#header-section').html(html);
};


export default {
	init
};