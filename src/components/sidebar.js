import sidebarMustache from './sidebar.html';
import {select} from 'd3-selection';

export default function Sidebar(app) {
	this.app = app;

	this.init = function init() {
		// data
		const pageData = {
			termsTitle: 'Candidatos',
			relatedTermsTitle: 'Termos Relacionados',
			terms: this.app.terms,
			relatedTerms: this.app.relatedTerms,
		};

		// buid page
		const html = sidebarMustache(pageData);
		select('#app').append('div').attr('id','tm-sidebar-left');
		select('#tm-sidebar-left').html(html);
		// $(html).appendTo($('#app'));
	};
}