var entropicsApp = angular.module('entropicsApp', ['ngRoute', 'ngResource']);

// Route provider used to redirect the user on the correct page
entropicsApp.config(function($routeProvider) {
	$routeProvider.
		when('/home', {
			templateUrl: 'html/home.html',
			controller: 'homeController'
		}).
		when('/services', {
			templateUrl: 'html/services.html',
			controller: 'servicesController'
		}).
		when('/films', {
			templateUrl: 'html/films.html',
			controller: 'filmsController'
		}).
		when('/music', {
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
	var title = '';
	var logo = '';
	return {
		getTitle: function() { return title; },
		setTitle: function(newTitle) { title = newTitle; },
		getLogo: function() { return logo; },
		setLogo: function(newLogo) { logo = newLogo; }
	};
});

// Translation service
entropicsApp.service('translationService', ['$resource', function($resource) {  
	this.getTranslation = function($scope, language) {
		var languageFilePath = 'lang/locale_' + language + '.json';
		$resource(languageFilePath).get(function (data) {
			$scope.translation = data;
		});
	};
}]);