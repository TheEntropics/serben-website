entropicsApp.controller('mainController', ['$scope', '$window', 'Page', 'translationService', function($scope, $window, Page, translationService) {
	$scope.Page = Page;

	// Handles onfocus and onblur events
	$scope.windowStatus = "fred";
	$window.onfocus = function() {
		$scope.windowStatus = "onfocus";
		$scope.$apply();
	}
	$window.onblur = function() {
		$scope.windowStatus = "onblur";
		$scope.$apply();
	}

	// Handles window resizing
	$scope.isSmallScreen = (document.documentElement.clientWidth <= 1024);
	$window.onresize = function(event) {
		if(document.documentElement.clientWidth <= 1024)
			$scope.isSmallScreen = true;
		else
			$scope.isSmallScreen = false;
		$scope.$apply();
	}
	// Get the user language
	var lang = navigator.language || navigator.userLanguage;
	// Get the file with the right translation
	translationService.getTranslation($scope, lang);

	//Set the copyright according to the current year and with the correct user language
	setTimeout(function() {$("#copyright").html("&copy; " +  new Date().getFullYear() + " The Entropics. " + $scope.translation.copyright);}, 200);

	// Used to hide the sidebar when user clicks on a link
	$scope.HideSideBar = function() {
		document.getElementsByClassName("mdl-layout")[0].MaterialLayout.drawerToggleHandler_();
		$(".mdl-navigation__link").removeClass("current");
	};
}]);

// Home controller
entropicsApp.controller('homeController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle($scope.translation.home.title);
	Page.setLogo("home");
	$(".mdl-navigation__link[href='#/home']").addClass("current");
}]);

// Services controller
entropicsApp.controller('servicesController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle($scope.translation.services.title);
	Page.setLogo("developer_board");
	$(".mdl-navigation__link[href='#/servizi']").addClass("current");
}]);

// Films controller
entropicsApp.controller('filmsController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle($scope.translation.films.title);
	Page.setLogo("theaters");
	$(".mdl-navigation__link[href='#/film']").addClass("current");
}]);

// Music controller
entropicsApp.controller('musicController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle($scope.translation.music.title);
	Page.setLogo("headset");
	$(".mdl-navigation__link[href='#/musica']").addClass("current");
}]);

// Info controller
entropicsApp.controller('infoController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle($scope.translation.info.title);
	Page.setLogo("info_outline");
	$(".mdl-navigation__link[href='#/info']").addClass("current");
}]);

