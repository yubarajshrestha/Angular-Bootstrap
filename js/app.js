var app = angular.module('app', ['ngRoute','ngSanitize','ngAnimate','controllers','services'])

.run(function($log, $document, $window) {
	$log.info($document[0].URL);
	$log.info($document[0].title);
	$log.info($window.outerHeight);
})

.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'MainController'
		})
		.when('/about', {
			templateUrl: 'templates/about.html',
			controller: 'AboutController'
		})
		.when('/test', {
			templateUrl: 'templates/test.html',
			controller: 'TestController'
		})
		.when('/single/:eqdt', {
			templateUrl: 'templates/single.html',
			controller: 'TestController'
		})
		.otherwise({
			templateUrl: 'templates/home.html',
			controller: 'MainController'
		})
})