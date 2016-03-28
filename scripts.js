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

	$scope.dcClass = [
		{
			name: 'Tristan',
			desc: 'Stock guy',
			luckyNumber: 12
		},
		{
			name: 'Josh',
			desc: 'Designer extraordinaire',
			luckyNumber: 3
		},
		{
			name: 'Bogdon',
			desc: 'Sik dude',
			luckyNumber: 0
		},
		{
			name: 'Lazlo',
			desc: '?',
			luckyNumber: 0
		},
		{
			name: 'Keith',
			desc: 'Rock man',
			luckyNumber: 5730
		},
		{
			name: 'Will',
			desc: 'Ski guy',
			luckyNumber: 32
		},
		{
			name: 'Curtis',
			desc: 'Java dev extraordinaire',
			luckyNumber: 0
		},
		{
			name: 'Joe',
			desc: 'Code wizard',
			luckyNumber: 10
		},
		{
			name: 'Kochan',
			desc: '?',
			luckyNumber: 0
		},
		{
			name: 'Patrick',
			desc: '?',
			luckyNumber: 0
		},
		{
			name: 'Jonathan',
			desc: 'The Handsome One',
			luckyNumber: 0
		},
		{
			name: 'Jeremy',
			desc: '?',
			luckyNumber: 0
		}
	];

	$scope.addStudent = function(name, desc, luckyNo){
		$scope.dcClass.push({
			name: $scope.newName,
			desc: $scope.newDesc,
			luckyNumber: $scope.newLuckyNo
		});
	}

	$scope.removeStudent = function(name){
		$scope.dcClass.splice(name, 1);
	}

})