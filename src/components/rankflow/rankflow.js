import {select} from 'd3-selection/dist/d3-selection.min';
import UIkit from 'uikit/dist/js/uikit.min';

import rankflowHBS from './rankflow.hbs';
import vis from './rankflow-vis';
import {ui} from '../../app';

const init = () => {
	// data
	const pageData = {
		title: ui.rankflow.title,
		showScrollHint: false,
		scrollText: ui.rankflow.scroll
	};

	// buid page
	const html = rankflowHBS(pageData);
	select('#app').append('div').attr('id','rankflow-section');
	select('#rankflow-section').html(html);

	UIkit.toggle(select('#horizontal-scroll-hint'), {
		mode: 'media',
		animation: 'uk-animation-fade,uk-animation-fade'
	});
	
	vis.init();
	loading();
};

const load = data => {
	select('#rankflow-section').select('.spiner').hide();
	vis.update(data);
};

const loading = () => {
	select('#rankflow-section').select('.spiner').show();
	vis.exit();
};

const highlightOn = (id, sourceType) => vis.highlightOn(id, sourceType);
const highlightOff = youtubeID => vis.highlightOff(youtubeID);


export default {
	init,
	load,
	loading,
	highlightOn,
	highlightOff
};
