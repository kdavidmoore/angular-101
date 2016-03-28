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

	/*
	{
		name: 'Tristan',
		desc: 'Stock guy',
		luckyNumber: 12
	},
	{
		name: 'Josh',
		desc: 'Designer extraordinaire',
		luckyNumber: 3
	}
	*/

	$scope.dcClass = [
		'Tristan',
		'Josh',
		'Bogdon',
		'Lazlo',
		'Keith',
		'Will',
		'Curtis',
		'Joe',
		'Kochan',
		'Patrick',
		'Jonathan',
		'Jeremy'
	];

	$scope.addStudent = function(){
		$scope.dcClass.push($scope.newStudent);
	}

	$scope.removeStudent = function(name){
		console.log(name);
		$scope.dcClass.splice($scope.dcClass[name], 1);
	}

})