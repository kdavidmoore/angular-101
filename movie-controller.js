var movieApp = angular.module('movieApp', []);
movieApp.controller('movieController', function($scope, $http){
	var movieURL = "https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=superman";
	$scope.imagePath = "http://image.tmdb.org/t/p/w300";
	$http({
		method: 'GET',
		url: movieURL
	}).then(function successCallback(movieData){
		$scope.myResults = movieData.results;
		console.log(movieData);
	}, function errorCallback(movieData){
		console.log("Erorr Error");
	});
})