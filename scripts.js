//console.log(window.angular) shows that angular is an object in the root scope
var myApp = angular.module('myApp', []);
//console.log(myApp);
//the controller method creates a controller that belongs to myApp
//we pass controller an anonymous function
//$scope is the object that glues the view and controller together
//myController has access to everything inside $scope
myApp.controller('myController', function($scope){
	//$scope.first = "Keith";
	//$scope.last = "Moore";

	$scope.cities = [
		{
			name: 'Atlanta',
			population: 500000
		},
		{
			name: 'Houston',
			population: 2200000
		},
		{
			name: 'Portland',
			population: 610000
		}
	];

	
})