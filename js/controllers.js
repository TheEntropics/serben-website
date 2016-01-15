entropicsApp.controller('mainController', ['$scope', '$window', 'Page', 'translationService', function($scope, $window, Page, translationService) {
	$scope.Page = Page;

	$scope.logged = false;
	$scope.captcha = false;

	// Handles window resizing
	$scope.isSmallScreen = (document.documentElement.clientWidth <= 1024);
	$window.onresize = function(event) {
		if(document.documentElement.clientWidth <= 1024)
			$scope.isSmallScreen = true;
		else
			$scope.isSmallScreen = false;
		$scope.$apply();
	};
	// Get the user language
	var lang = navigator.language || navigator.userLanguage;
	// Get the file with the right translation
	translationService.getTranslation($scope, lang);

	//Set the copyright according to the current year and with the correct user language
	setTimeout(function() {$("#copyright").html("&copy; " +  new Date().getFullYear() + " The Entropics. " + $scope.translation.copyright);}, 200);

	$scope.ShowLogin = function() {
		$scope.zoomIn($("#login"));
	}

	// Used to hide the sidebar when user clicks on a link
	$scope.HideSideBar = function() {
		document.getElementsByClassName("mdl-layout")[0].MaterialLayout.drawerToggleHandler_();
		$(".mdl-navigation__link").removeClass("current");
	};

	$scope.zoomIn = function(element) {
		element.show();
		element.css('top', 'calc(50% - ' + ($("#login").width() / 2) + 'px)');
		element.css('left', 'calc(50% - ' + ($("#login").height() / 2) + 'px)');
		element.css('transform', 'scale(0.0)');
		element.animate({ dummy: 100 }, {
			step: function(now, fx) {
				$(this).css('transform', 'scale(' + (now / 100) + ')');
			},
			duration: 150,
			easing: 'linear'
		});
	}

	$scope.zoomOut = function(element) {
		element.css('top', 'calc(50% - ' + ($("#login").width() / 2) + 'px)');
		element.css('left', 'calc(50% - ' + ($("#login").height() / 2) + 'px)');
		element.css('transform', 'scale(1.0)');
		element.animate({ dummy: 0 }, {
			step: function(now, fx) {
				$(this).css('transform', 'scale(' + (now / 100) + ')');
			},
			duration: 150,
			easing: 'linear',
			done: function() {
				element.hide();
			}
		});
	}
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
	$.ajax({
		method: "GET",
		url: "http://status.serben.tk/status.json",
		dataType: "json"
	}).success(function(data) {
		$scope.games = data;
	});
}]);

// Films controller
entropicsApp.controller('filmsController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle($scope.translation.films.title);
	Page.setLogo("theaters");
	$(".mdl-navigation__link[href='#/film']").addClass("current");

	$scope.films = [];
	$scope.search = "";

	$scope.searchFilter = function(item) {
		var title = (item.title.toLowerCase().indexOf($scope.search.toLowerCase()) !== -1);
		var filename = (item.filename.toLowerCase().indexOf($scope.search.toLowerCase()) !== -1);
		var language = (item.language.toLowerCase().indexOf($scope.search.toLowerCase()) !== -1);
		return title || filename || language;
	};

	$scope.splitFilms = function() {
		var filmsPerRow = 5;
		var filmRows = [];
		for (var i = 0; i < arr.length; i += filmsPerRow)
			filmRows.push($scope.films.slice(i, i+filmsPerRow));
		return filmRows;
	}

	setTimeout(function () {
		$.getJSON( "php/films/getfilms.php", function(data) {
			$scope.films = data;
			$scope.$apply();
			console.log($scope.films);
		}).fail(function() {
			console.log( "An error occured while loading the list of films." );
		});
	}, 1000);
}]);

// Music controller
entropicsApp.controller('musicController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle($scope.translation.music.title);
	Page.setLogo("headset");
	$(".mdl-navigation__link[href='#/musica']").addClass("current");
}]);

// Downloads controller
entropicsApp.controller('downloadsController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle($scope.translation.downloads.title);
	Page.setLogo("file_download");
	$(".mdl-navigation__link[href='#/downloads']").addClass("current");

/*	$scope.currentFolder = changeDir('/home/downloads/download/');

	var changeDir = function(dir) {
		$.get('../php/scandir.php', [ 'dir': dir ])
			.success(function(data) {
				return data;
			});
	}

	var escapeHTML = function(text) {
		return text.replace(/\&/g,'&amp;').replace(/\</g,'&lt;').replace(/\>/g,'&gt;');
	}

	// Convert file sizes from bytes to human readable units
	var bytesToSize = function(bytes) {
		var sizes = ['byte', 'KB', 'MB', 'GB', 'TB'];
		if (bytes == 0) return '0 Bytes';
		var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
		return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
	}*/
}]);

// Members controller
entropicsApp.controller('membersController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle($scope.translation.members.title);
	Page.setLogo("face");
	$(".mdl-navigation__link[href='#/info']").addClass("current");
}]);

// Info controller
entropicsApp.controller('infoController', ['$scope', 'Page', function($scope, Page) {
	Page.setTitle($scope.translation.info.title);
	Page.setLogo("info_outline");
	$(".mdl-navigation__link[href='#/info']").addClass("current");
}]);

// Login controller
entropicsApp.controller('loginController', ['$scope', 'Page', function($scope, Page) {
	$scope.CancelLogin = function() {
		$scope.zoomOut($("#login"));
	}

	$scope.Login = function(user, pass) {
		$.post("php/login.php", {
			username: user,
			password: pass
		}).success(function(data) {
			switch(parseInt(data)) {
				// Successfully logged in
				case 0:
					$scope.captcha = false;
					$.snackbar({ style: "toast", content: "Loggato con successo!"});
					$scope.logged = true;
					$scope.zoomOut($("#login"));
					break;
				// Incorrect password
				case 1:
					$.snackbar({ style: "toast", content: "La password è errata!"});
					break;
				// User does not exist
				case 2:
					$.snackbar({ style: "toast", content: "L'utente non esiste!"});
					break;
				// Bruteforce attack
				case 3:
					$.snackbar({ style: "toast", content: "Troppi login falliti! Ora ti verrà richiesto il captcha"});
					$scope.captcha = true;
					break;
				// Fields not set
				case 4:
					$.snackbar({ style: "toast", content: "Inserisci tutti i campi!"});
					break;
				// Unknown code
				default:
					$.snackbar({ style: "toast", content: "Errore sconosciuto!"});
					break;
			}
		}).error(function() {
			$.snackbar({ style: "toast", content: "Errore sconosciuto!"});
		});
	};

	$scope.Logout = function() {
		$scope.logged = false;
	}
}]);