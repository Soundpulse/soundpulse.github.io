window.sr = ScrollReveal();

AOS.init();

sr.reveal('#contact .container', {
	duration: 2000,
	origin: 'bottom'
});

sr.reveal('#about-me', {
	duration: 2000,
	origin: 'bottom'
});

sr.reveal('#side-details', {
	duration: 2000,
	origin: 'right'
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});