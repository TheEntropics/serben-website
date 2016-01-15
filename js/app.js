var entropicsApp = angular.module('entropicsApp', ['ngRoute', 'ngResource']);

// Route provider used to redirect the user on the correct page
entropicsApp.config(function($routeProvider, $provide) {
	console.log("loading");
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
		when('/downloads', {
			templateUrl: 'html/downloads.html',
			controller: 'downloadsController'
		}).
		when('/members', {
			templateUrl: 'html/members.html',
			controller: 'membersController'
		}).
		when('/info', {
			templateUrl: 'html/info.html',
			controller: 'infoController'
		}).
		otherwise({ redirectTo: '/home' });

	$provide.decorator("$interpolate", function($delegate) {
		function wrap() {
			var x = $delegate.apply(this, arguments);
			if (x) {
				var binding = arguments[0];
				return function() {
					var result = x.apply(this, arguments);
					if((binding == "{{loaded}}") && (result == "loaded")) {
						console.log("loaded");
						$("#loaded").remove();
						$("#loading").remove();
						$(".mdl-layout.mdl-js-layout.mdl-layout--fixed-header").slideDown();
					}
					return result;
				};
			}
		}
		angular.extend(wrap, $delegate);
		return wrap;
	});
});

entropicsApp.run(function($rootScope) {
	$rootScope.loaded = "loaded";
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

entropicsApp.directive('backImg', function() {
	return function(scope, element, attrs) {
		var url = attrs.backImg;
		element.css({
			'background-image' : 'url(' + url + ')',
			'background-size' : 'cover',
			'background-position' : '50% 50%'
		});
	};
});