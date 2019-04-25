$(document).ready(function(){
	$('#menu-hamburger > .bar-button').click(function(){
		$('#menu-hamburger').toggleClass('opened');
		$('.top-menu nav > ul').toggleClass('opened');
	});
});