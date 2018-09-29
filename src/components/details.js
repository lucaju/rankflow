// ${d.moment.format("MMM D")}
//modules
import UIkit from 'uikit/dist/js/uikit.min';
import detailsMustache from './details.html';
import {select} from 'd3-selection/dist/d3-selection.min';

export default function Details(app) {
	this.app = app;

	this.pageData = {};
	this.modal;

	this.init = function init() {

		this.modal = select('#app').append('div')
			.attr('id','modal-video-details')
			.attr('class', 'uk-modal-container')
			.attr('uk-modal','true');
	};

	this.addModal = function (d,source) { 

		let youtubeID = '';
		let dates = [];

		if (source == 'video') {
			youtubeID = d.youtubeID;
			dates = d.dates;
		} else if (source == 'rank') {
			youtubeID = d.data.youtubeID;
			dates = d.data.dates;
		}

		// data
		this.pageData = {
			title: d.title,
			channel: d.channel,
			youtubeID: youtubeID,
			dates: dates.reverse(),
		};

		// buid page
		const html = detailsMustache(this.pageData);
		this.modal.html(html);

		UIkit.modal(this.modal.node()).show();

	};
	
}