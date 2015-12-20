entropicsApp.controller('mainController', ['$scope', 'Page', function($scope, Page) {
	$scope.Page = Page;

	// Used to hide the sidebar when user clicks on a link
	$scope.HideSideBar = function() {
		document.getElementsByClassName("mdl-layout")[0].MaterialLayout.drawerToggleHandler_();
		$(".mdl-navigation__link").removeClass("current");
	};
}]);

// Home controller
entropicsApp.controller('homeController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle("Home");
	Page.setLogo("home");
	$(".mdl-navigation__link[href='#/home']").addClass("current");
}]);

// Services controller
entropicsApp.controller('servicesController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle("Servizi");
	Page.setLogo("developer_board");
	$(".mdl-navigation__link[href='#/servizi']").addClass("current");
}]);

// Films controller
entropicsApp.controller('filmsController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle("Film");
	Page.setLogo("theaters");
	$(".mdl-navigation__link[href='#/film']").addClass("current");
}]);

// Music controller
entropicsApp.controller('musicController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle("Musica");
	Page.setLogo("headset");
	$(".mdl-navigation__link[href='#/musica']").addClass("current");
}]);

// Info controller
entropicsApp.controller('infoController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle("Informazioni");
	Page.setLogo("info_outline");
	$(".mdl-navigation__link[href='#/info']").addClass("current");
}]);

