'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: ''
  });
}])

.directive('view',function(){
 return {
  restrict : "E",
  template : "<div>clicked on {{ clicked }}</div>",
  scope: {
   clicked : "=clicked"
  }
 }
});