angular.module('controllers', [])

.controller('MainController', ['$scope', '$log', '$http', '$timeout', function($scope, $log) {
	$scope.title = "Welcome, Everyone!!!";
	$scope.detail = "This is getting started angularJS+Bootstrap boilerplate web app with dynamic data driven and search functionality...";
}])

.controller('AboutController', ['$scope', '$log', '$q', '$timeout', function($scope, $log, $timeout) {
	$scope.title = "About This App"
	$scope.detail = "I'd like to start of first by saying that I'm just like \"You\". I am the one who loves to make a lot of friends, share thoughts, share ideas and share experiences.<br>Well, before talking about anything else let me introduce myself.<br>I am Yubaraj Shrestha, a freelance web designer, developer and software engineer. I love tech things and my passion is split between my  for amazing technology and my drive to help communities around the world grow and learn from each other!"
}])

.controller('TestController', ['$scope', '$log', '$http', '$routeParams', function($scope, $log, $http, $routeParams) {
	$scope.title = "Testing Area";
	$http.get("http://yubarajshrestha.com.np/mobi_app/portfolio.php")
		.success(function(data) {
			$scope.items = data;
		})

		.error(function(data) {
			$log.info(data);
		})

	$scope.blur = function(q) {
		$log.info(q);
	}

	$scope.dt = $routeParams.eqdt;
}])