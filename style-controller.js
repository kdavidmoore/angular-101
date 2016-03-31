var angularStyle = angular.module('angularStyle', []);

angularStyle.controller('styleController', function($scope){
	$scope.students = [];
	$scope.students.push(new Student('Tristan','Stock Guy'));
	$scope.students.push(new Student('Joshua','iOS Student'));
	$scope.students.push(new Student('Bogdan','Mechanic'));
	$scope.students.push(new Student('Lazlo','KGB'));
	$scope.students.push(new Student('Keith','Geologist'));
	$scope.students.push(new Student('Will','Ski Ninja'));
	$scope.students.push(new Student('Curtis','IT Master'));
	$scope.students.push(new Student('Joe','The Controller'));
	$scope.students.push(new Student('Kochan','Demon Deacon'));
	$scope.students.push(new Student('Patrick','Outlaw'));
	$scope.students.push(new Student('Jonathan','Boring Linguist'));
	$scope.students.push(new Student('Jeremy','Magnum PI'));

	$scope.understand = function(){
		$scope.understandYes = 3;
	}

})