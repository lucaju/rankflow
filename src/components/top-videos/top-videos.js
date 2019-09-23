import {select} from 'd3-selection/dist/d3-selection.min';

import topvideosHBS from './top-videos.hbs';
import vis from './top-videos-vis';
import {ui} from '../../app';


const init = () => {
	// data
	const pageData = {
		title: ui.mostRecommendedVideos.title,
	};

	// buid page
	const html = topvideosHBS(pageData);
	select('#app').append('div').attr('id','topvideos-section');
	select('#topvideos-section').html(html);

	vis.init();
	loading();
};

const load = data => {
	select('#topvideos-section').select('.spiner').hide();
	vis.update(data);
};

const loading = () => {
	select('#topvideos-section').select('.spiner').show();
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
