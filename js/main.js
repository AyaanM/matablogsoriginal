// toggle

$(document).ready(function(){

  $nav = $('.nav');
  $toggle = $('.toggle');

  $toggle.click(function(){
    $nav.toggleClass('collapse')
  })
})

// owl carousel
$('.owl-carousel').owlCarousel();