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
			collection: '='
		},
		//template: '<ul><member ng-repeat="member in collection" member="member"><li ng-click="decrement(member)">{{member.name}}</li></member></ul>',
		templateUrl:'testMenuDirective/menuTemplate.html',
		link: function (scope, element, attrs) {
			scope.decrement = function(member) {
               alert(member.name);
            }
            /*scope.increment = function(member) {
               alert(member.id);
            }*/
			/*if (angular.isArray(scope.member.children)) {
				element.append("<collection collection='member.children'></collection>"); 
				$compile(element.contents())(scope)
			}*/
		}
	}
})

/*.directive('member', function ($compile) {
	return {
		restrict: "E",
		replace: true,
		scope: {
			member: '='
		},
		template: '<li ng-click="decrement(member)">{{member.name}}<button ng-click="decrement(member)">{{member.name}}</button></li>',
		link: function (scope, element, attrs) {
			scope.decrement = function(member) {
               alert(member.name);
            }
			/*if (angular.isArray(scope.member.children)) {
				element.append("<collection collection='member.children'></collection>"); 
				$compile(element.contents())(scope)
			}
		}
	}
})*/
 
.controller('testMenuCtrl', function ($scope,nukeService) {
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

.factory('nukeService', function($rootScope, $http) {
	//alert('hi');
    var nukeService = {};

    nukeService.data = {};

    //Gets the list of nuclear weapons
    nukeService.getNukes = function() {
        /*$http.get('nukes/nukes.json')
            .success(function(data) {
                nukeService.data.nukes = data;
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
		nukeService.data = data;
		//console.log(nukeService.data);
        return nukeService.data;
    };

    return nukeService;
});
/*.directive("myWidget2", function() {
  return {
    restrict: "E",
    template: "<p></p>",
    scope: {
      text: "@text"
    }
  };
})*/

/*angular.module('recipeapp').service('recipeService',['$http', function($http){

  // expose a saveRecipe function from your service
  // that takes a recipe object
  this.saveRecipe = function(recipe){
      // return a Promise object so that the caller can handle success/failure
      return $http({ method: 'POST', url: '/api/recipe/add', data: recipe});
  }

}]);*/