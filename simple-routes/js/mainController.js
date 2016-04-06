// include the ngRoute module so we can use $routeProvider etc.
var viewsApp = angular.module('viewsApp', ['ngRoute']);

// call the config method of your angular module
viewsApp.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'pages/front.html',
		controller: 'viewsController'
	});
	$routeProvider.when('/students',{
		templateUrl: 'pages/students.html',
		controller: 'viewsController'
	});
	// send the user back to the home page if the route is not valid
	$routeProvider.otherwise({
		templateUrl: 'pages/front.html',
		controller: 'viewsController'
	});

});

viewsApp.controller('viewsController', function($scope){
	$scope.message = 'Hello World';

})