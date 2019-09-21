import {select} from 'd3-selection/dist/d3-selection.min';

import topvideosHBS from './topvideos.hbs';
// import vis from './topVideosVis';

const init = () => {

	// data
	const pageData = {
		title: 'Videos mais recomendados',
	};

	// buid page
	const html = topvideosHBS(pageData);
	select('#app').append('div').attr('id','topvideos-section');
	select('#topvideos-section').html(html);

	// vis.init();
};

const load = data => {
	select('#topvideos-section').select('.spiner').hide();
	// vis.update(data);
};

const loading = () => {
	select('#topvideos-section').select('.spiner').show();
	// vis.exit();
};

// const highlightOn = (id, sourceType) => vis.highlightOn(id, sourceType);
// const highlightOff = youtubeID => vis.highlightOff(youtubeID);


export default {
	init,
	load,
	loading,
	// highlightOn,
	// highlightOff
};
