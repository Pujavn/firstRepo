angular.module('myApp.testMenuDirective', ['ngRoute'])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/menu', {
    templateUrl: 'testMenuDirective/menu.html',
    controller: 'testMenuCtrl'
  });
}])

.directive('collection', function () {
	return {
		restrict: "E",
		replace: true,
		scope: {
			//collection: '=tasks'
			collection: '=',
			clicked : "=clicked"
		},
		//template: '<ul><member ng-repeat="member in collection" member="member"><li ng-click="decrement(member)">{{member.name}}</li></member></ul>',
		templateUrl:'testMenuDirective/menuTemplate.html',
		link: function (scope, element, attrs) {
			scope.decrement = function(member) {
               //alert(member.name);
               scope.clicked = member.name;
            }
			/*if (angular.isArray(scope.member.children)) {
				element.append("<collection collection='member.children'></collection>"); 
				$compile(element.contents())(scope)
			}*/
		}
	}
})
.controller('testMenuCtrl', function ($scope,menuService) {
	/*$scope.tasks = [
		{
			name: 'Europe',
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
			name: 'South America',
			children: [
				{
					name: 'Brasil'
				},
				{
					name: 'Peru'
				}
			]
		}
	];*/

	$scope.tasks = nukeService.getNukes();
	//console.log($scope.tasks);
})

.factory('menuService', function($rootScope, $http) {
	//alert('hi');
    var menuService = {};

    menuService.data = {};

    //Gets the list of nuclear weapons
    menuService.getMenu = function() {
        /*$http.get('nukes/nukes.json')
            .success(function(data) {
                menuService.data.menu = data;
            });*/
		data = [
		{
			name: 'Europe',
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
			name: 'South America',
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
		menuService.data = data;
		//console.log(nukeService.data);
        return menuService.data;
    };

    return menuService;
});
