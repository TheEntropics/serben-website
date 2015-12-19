entropicsApp.controller('mainController', ['$scope', 'Page', function($scope, Page) {
	$scope.Page = Page;

	$scope.HideAppBar = function() {
		document.getElementsByClassName("mdl-layout")[0].MaterialLayout.drawerToggleHandler_();
	};
}]);

entropicsApp.controller('homeController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle("Home");
	Page.setLogo("home");
}]);

entropicsApp.controller('servicesController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle("Servizi");
	Page.setLogo("developer_board");
}]);

entropicsApp.controller('filmsController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle("Film");
	Page.setLogo("theaters");
}]);

entropicsApp.controller('musicController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle("Musica");
	Page.setLogo("headset");
}]);


entropicsApp.controller('infoController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle("Informazioni");
	Page.setLogo("info_outline");
}]);

