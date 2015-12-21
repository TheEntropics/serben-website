$(function() {
	$("#copyright").html("&copy; " +  new Date().getFullYear() + " The Entropics. Tutti i diritti riservati");

	$("html").hammer().on('swiperight', function (e) {
		var endPoint = e.gesture.pointers[0].pageX;
		var distance = e.gesture.distance;
		var origin = endPoint - distance;
		if ((origin <= 50) && !$(".mdl-layout__drawer").hasClass("is-visible"))
			document.getElementsByClassName("mdl-layout")[0].MaterialLayout.drawerToggleHandler_(); 
	});

	$("html").hammer().on('swipeleft', function (e) {
		if ($(".mdl-layout__drawer").hasClass("is-visible"))
			document.getElementsByClassName("mdl-layout")[0].MaterialLayout.drawerToggleHandler_(); 
	});
});