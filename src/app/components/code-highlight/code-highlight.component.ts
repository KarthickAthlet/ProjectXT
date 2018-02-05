import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-highlight',
  templateUrl: './code-highlight.component.html',
  styleUrls: ['./code-highlight.component.scss']
})
export class CodeHighlightComponent implements OnInit {

  cssCode: string;

  constructor() {
    this.cssCode = `console.log('hello world');
import jQuery from 'jquery/dist/jquery';
import GlobalNavigation from '../../components/global-navigation/global-navigation';
import Search from './../../components/search/search';
import Filter from './../../components/filter/filter';
import FooterNav from './../../components/footer-navigation/mcd-footer-navigation';

console.log(jQuery);
window.$ = jQuery;
window.jQuery = jQuery;

document.addEventListener('DOMContentLoaded', () => {
  import('../../../node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse');
  GlobalNavigation.bootstrap();
  Search.bootstrap();
  Filter.bootstrap();
  FooterNav.bootstrap();
}, false);

`;
  }
  ngOnInit() {
  }

}
