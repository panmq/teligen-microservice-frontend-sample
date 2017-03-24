var app = angular.module('app', [ 'ngRoute', 'ngResource' ]);
app.config(function($routeProvider) {
	$routeProvider.when('/users', {
		templateUrl : '/views/users.html',
		controller : 'usersController'
	}).when('/add_user', {
		templateUrl : '/views/add_user.html',
		controller : 'addUserController'
	}).when('/home', {
		templateUrl : '/views/home.html',
		controller : 'homeController'
	}).otherwise({
		redirectTo : '/home'
//		redirectTo : '/'
	});
});
