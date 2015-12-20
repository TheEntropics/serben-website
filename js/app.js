var entropicsApp = angular.module('entropicsApp', ['ngRoute']);

// Route provider used to redirect the user on the correct page
entropicsApp.config(function($routeProvider) {
	$routeProvider.
		when('/home', {
			templateUrl: 'html/home.html',
			controller: 'homeController'
		}).
		when('/servizi', {
			templateUrl: 'html/servizi.html',
			controller: 'servicesController'
		}).
		when('/film', {
			templateUrl: 'html/films.html',
			controller: 'filmsController'
		}).
		when('/musica', {
			templateUrl: 'html/music.html',
			controller: 'musicController'
		}).
		when('/info', {
			templateUrl: 'html/info.html',
			controller: 'infoController'
		}).
		otherwise({ redirectTo: '/home' });
});

// Used to allow every page to set its own title
entropicsApp.factory('Page', function() {
	var title = 'default';
	var logo = '';
	return {
		getTitle: function() { return title; },
		setTitle: function(newTitle) { title = newTitle; },
		getLogo: function() { return logo; },
		setLogo: function(newLogo) { logo = newLogo; }
	};
});