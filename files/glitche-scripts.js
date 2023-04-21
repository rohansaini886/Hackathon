
$(function () {
	'use strict';
	
	$(window).unload(function() {});
	
	/* Typed preload text */
	$('.typed-load').typed({
		stringsElement: $('.typing-load'),
		loop: true
	});
	
	/* Preloader */
	$(window).load(function() {
		$(".preloader .pre-inner").fadeOut(800, function(){
			/* Preload hide */
			$('.preloader').fadeOut();
			$('body').addClass('loaded');
			
			/* Typed subtitle */
			$('.typed-subtitle').typed({
				stringsElement: $('.typing-subtitle'),
				loop: true
			});
			
			/* Typed breadcrumbs */
			$('.typed-bread').typed({
				stringsElement: $('.typing-bread'),
				showCursor: false
			});

			/* One Page Nav */
			var url_hash = location.hash;
			var sectionElem = $(url_hash);
			if(url_hash.indexOf('#section-') == 0 && sectionElem.length){
				$('body, html').animate({scrollTop: $(url_hash).offset().top - 70}, 400);
			}
		});
	});
	
});
