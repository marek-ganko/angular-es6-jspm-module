import template from './template.jade!';
import './style.css!';
import HereMaps from './HereMaps';

export default class TodoListDirective {

  constructor(filters, mapService) {
    this.restrict = 'E';
    this.transclude = true;
    this.template = template;
    this.scope = {
      'onChange': '='
    };
  }

  link(scope, element, attrs) {
    
  }

  controller($scope) {

    this.addElement = function (params) {
     
    };

  }

}

TodoListDirective.$inject = ['LocalStorage'];