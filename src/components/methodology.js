import UIkit from 'uikit/dist/js/uikit.min';
import methodologyMustache from './methodology.html';
import {select} from 'd3-selection';

export default function Methodology(app) {
	this.app = app;
	this.showMethodology = false;

	this.init = function init() {
		// data
		const pageData = {
			title: 'Metodologia',
			data: 'Data Collection',
		};

		// buid page
		const html = methodologyMustache(pageData);
		// $(html).appendTo($('#app'));
		select('#app').append('div').attr('id','methodology-section');
		select('#methodology-section').html(html);

		select('#methodology-section').on('click', this.toggleMethodology);

	};

	this.toggleMethodology = function toggleMethodology() {
		this.showMethodology = !this.showMethodology;

		let icon;

		if (this.showMethodology) {
			icon = 'minus-circle';
		} else {
			icon = 'plus-circle';
		}

		UIkit.icon('#methodology-toggle-icon', {
			icon: `${icon}`,
		});
	};
}