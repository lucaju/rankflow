import $ from 'jquery';
import sidebarMustache from './sidebar.html';

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
    $(html).appendTo($('#app'));
  };
}
