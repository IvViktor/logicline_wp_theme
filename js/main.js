$(document).ready(function(){
	$('#menu-hamburger > .bar-button').click(function(){
		$('#menu-hamburger').toggleClass('opened');
		$('.top-menu nav > ul').toggleClass('opened');
	});
	let topMenuPosition = $('header > .top-menu').offset();
	$(window).scroll(function(){
	    if ($(window).scrollTop() >= topMenuPosition.top) {
	        $('header > .top-menu').addClass('sticky');
	    }
	    else {
	        $('header > .top-menu').removeClass('sticky');
	    }
	});
});