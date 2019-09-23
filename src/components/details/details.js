import {select} from 'd3-selection/dist/d3-selection.min';
import UIkit from 'uikit/dist/js/uikit.min';

import detailsHBS from './details.hbs';
import {ui} from '../../app';

let pageData = {};
let modal;

const init = () => {
	modal = select('#app').append('div')
		.attr('id','modal-video-details')
		.attr('class', 'uk-modal-container')
		.attr('uk-modal','true');
};

const addModal = (d,source) => { 

	let youtubeID = '';
	let dates = [];

	
	if (source === 'video') {
		youtubeID = d.youtubeID;
		dates = d.dates;
	} else if (source === 'rank') {
		youtubeID = d.data.youtubeID;
		dates = d.data.dates;
	}

	// data
	pageData = {
		title: d.title,
		channel: d.channel,
		youtubeID: youtubeID,
		dates: dates.reverse(),
		statsLabel: {
			views: ui.details.statsLabel.views,
			likes: ui.details.statsLabel.likes,
			dislikes: ui.details.statsLabel.dislikes,
			recommendations: ui.details.statsLabel.recommendations,
			rankingPosition: ui.details.statsLabel.rankingPosition
		}
	};

	// buid page
	const html = detailsHBS(pageData);
	modal.html(html);

	UIkit.modal(modal.node()).show();

};
	

export default {
	init,
	addModal
};
