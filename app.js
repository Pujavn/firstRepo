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
.controller('dashboardCtrl', function ($scope, nukeService) {
	//$scope.init = function() {
       $scope.test = [
		{
			name: 'India',
			children: [
				{
					name: 'Italy',
					children: [
						{
							name: 'Rome'
						},
						{
							name: 'Milan'
						}
					]
				}, 
				{
					name: 'Spain'
				}
			]
		}, 
		{
			name: 'Asia',
			children: [
				{
					name: 'Brasil'
				},
				{
					name: 'Peru'
				}
			]
		}
	];
       alert($scope.test);
    //}
    
});