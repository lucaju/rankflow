import $ from 'jquery';
import headerMustache from './header.html';

export default function Header() {
  this.init = function init() {
    // data
    const pageData = {
      title: 'Eleições Brasil 2018',
      subtitle: 'RankFlow das Recomendações do YouTube',
    };

    // buid page
    const html = headerMustache(pageData);
    $(html).appendTo($('#app'));
  };
}

// export default new Header();
