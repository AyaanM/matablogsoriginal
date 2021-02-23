$(document).ready(function(){

  $nav = $('.nav');
  $toggle = $('.toggle');

  $toggle.click(function(){
    $nav.toggleClass('collapse');
  })

  // owl carousel initialization 
  $('.owl-carousel').owlCarousel({
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    items: 1,
    responsive : {
      0: {items: 1},
      420: {items: 1 }, 
      560: {items: 2 }, 
      960: {items: 3},   
      2560: {items: 4}     
   },
  });

});





