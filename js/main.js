$(document).ready(function(){
	$('#menu-hamburger > .bar-button').click(function(){
		$('#menu-hamburger').toggleClass('opened');
		$('.top-menu nav > ul').toggleClass('opened');
	});
	let topMenuPosition = $('header > .top-menu').offset();
	let advantagesBlockPosition = $('.advantages-sect').offset();
	$(window).scroll(function(){
		let scrollPosition = $(window).scrollTop()
	    if (scrollPosition >= topMenuPosition.top) {
	        $('header > .top-menu').addClass('sticky');
	        if (scrollPosition >= advantagesBlockPosition.top) {
		        $('.advantages-sect .advantage-item').addClass('item-visible'); 
		    }
		    else {
		        $('.advantages-sect .advantage-item').removeClass('item-visible');
		    }
	    }
	    else {
	        $('header > .top-menu').removeClass('sticky');
	    }
	});
});