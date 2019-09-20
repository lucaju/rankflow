import headerMustache from './header.html';
import {select} from 'd3-selection/dist/d3-selection.min';

export default function Header() {
	this.init = function init() {
		// data
		const pageData = {
			title: 'Eleições Brasil 2018',
			subtitle: 'RankFlow das Recomendações do YouTube',
		};

		// buid page
		const html = headerMustache(pageData);
		select('#app').append('div').attr('id','header-section');
		select('#header-section').html(html);
	};
}