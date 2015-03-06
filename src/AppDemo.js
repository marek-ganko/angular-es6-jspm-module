import AppModules from './App';
import 'angular';

var app = angular.module('app', [AppModules.name]);

angular.element(document).ready(function () {
  angular.bootstrap(document, [app.name]);
});
