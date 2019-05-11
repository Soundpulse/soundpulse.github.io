new WOW({
	mobile: false
}).init();

$(document).ready(function() {
	$('#sidebar .navbar').localScroll({
		duration: 800
	});
});

$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		items: 3,
		lazyLoad: true,
		loop: true,
		navigation: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			1120: {
				items: 3
			}
		}
	});
});