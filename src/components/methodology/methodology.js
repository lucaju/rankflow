import {select} from 'd3-selection/dist/d3-selection.min';
import UIkit from 'uikit/dist/js/uikit.min';

// import methodologyHBS from './methodology.hbs';
import {config, ui} from '../../app';


let showMethodology = false;
let methodologyHBS;

const init = async () => {

	//load methodology according to language
	await import(/* webpackChunkName: "methodology" */ `./methodology-${config.language}.hbs`)
		.then(({ default: methodology }) => {
			methodologyHBS = methodology;
			// debugHTML = botRecastaiDebugHBS(data);
		})

	// data
	const pageData = {
		title: ui.methodology.title
	};

	// buid page
	const html = methodologyHBS(pageData);
	select('#app').append('div').attr('id','methodology-section');
	select('#methodology-section').html(html);

	select('#methodology-section').on('click', toggleMethodology);
	UIkit.icon('#methodology-toggle-icon', {icon: 'plus-circle'});

};

const toggleMethodology = () => {
	showMethodology = !showMethodology;
	const icon = showMethodology ? 'minus-circle' : 'plus-circle';
	UIkit.icon('#methodology-toggle-icon', {icon});
};


export default {
	init
};
