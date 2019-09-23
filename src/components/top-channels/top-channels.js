import {select} from 'd3-selection/dist/d3-selection.min';

import topChannelsHBS from './top-channels.hbs';
import vis from './top-channels-vis';
import {ui} from '../../app';


const init = () => {
	// data
	const pageData = {
		title: ui.mostRecommendedChannels.title,
	};

	// buid page
	const html = topChannelsHBS(pageData);
	select('#channels').append('div').attr('id','topchannels-section');
	select('#topchannels-section').html(html);

	vis.init();
	loading();
};

const load = data => {
	select('#topchannels-section').select('.spiner').hide();
	vis.update(data);
};

const loading = () => {
	select('#topchannels-section').select('.spiner').show();
	vis.exit();
};

const highlightOn = channelName => vis.highlightOn(channelName);
const highlightOff = channelName => vis.highlightOff(channelName);


export default {
	init,
	load,
	loading,
	highlightOn,
	highlightOff
};
