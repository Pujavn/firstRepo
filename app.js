'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version',
  'myApp.testMenuDirective',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.controller('dashboardCtrl', function ($scope, menuService) {
	//$scope.init = function() {
       $scope.test = [
		{
			name: 'Home'
		}, 
		{
			name: 'Page1'
		},
		{
			name: 'Page3'
		},
		{
			name: 'Page4'
		}
	];
    //}
    
});