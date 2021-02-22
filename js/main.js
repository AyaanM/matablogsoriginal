$(document).ready(function(){

  $nav = $('.nav');
  $toggle = $('.toggle');

  $toggle.click(function(){
    $nav.toggleClass('collapse');
  })

  // owl carousel initialization 
  $('.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsiveClass: true,
  });

});





