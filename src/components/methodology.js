import $ from 'jquery';
import UIkit from 'uikit/dist/js/uikit.min';
import methodologyMustache from './methodology.html';

export default function Methodology(app) {
	this.app = app;
	this.showMethodology = false;

	this.init = function init() {
		// data
		const pageData = {
			title: 'Metodology',
			data: 'Data Collection',
		};

		// buid page
		const html = methodologyMustache(pageData);
		$(html).appendTo($('#app'));

		$('#methodology-toggle-icon').click(this.toggleMethodology);
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