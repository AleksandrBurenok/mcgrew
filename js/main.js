$(document).ready(function(){
  $('.fade').slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    arrows: false,
    cssEase: 'linear'
  });

  if (window.devicePixelRatio > 1) {
    let lowresImages = $('img');

    images.each(function(i) {
      let lowres = $(this).attr('src');
      let highres = lowres.replace(".", "@2x.");
      $(this).attr('src', highres);
    });
  }

  $('.hamburger').on('click', function(){
    $('.nav').toggleClass('nav__active');
  });

  $(".nav__link").click(function(e) {
    e.preventDefault();
    $(".nav__link").removeClass('nav__link__active');
    $(this).addClass('nav__link__active');
  })

});