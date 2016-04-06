var routesApp = angular.module('routesApp', ['ngAnimate', 'ngRoute', 'ngAria', 'ngMaterial']);

routesApp.config(function($routeProvider){
	// whatever comes after the slash will be known as the template in route providers
	$routeProvider.when('/:template', {
		controller: 'viewsController',
		templateUrl: function($routeParams){
			return 'template' + $routeParams.template + '.html';
		}
	});
	$routeProvider.when('/:param1/:param2', {
		controller: 'viewsController',
		templateUrl: function($routeParams){
			return 'template' + $routeParams.param2 + '.html';
		}
	});
	$routeProvider.otherwise({
		redirectTo: '/0'
	});
});

routesApp.controller('viewsController', function($scope, $location){
	$scope.nextId = function(id){
		$location.path("#/"+id);
	}
});