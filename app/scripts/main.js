$(function() {
  var $menu = $('#my-menu').mmenu({
    extensions: [ 'widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right' ],
    navbar: {
      title: '<img src="images/logo-1.svg" alt="Салон красоты Смитлер">'
    }
  });
  var $burger = $("#my-burger");
  var API = $menu.data( "mmenu" );
  $burger.on( "click", function() {
    API.open();
  });
  API.bind( "open:finish", function() {
    setTimeout(function() {
      $burger.addClass( "is-active" );
    }, 100);
  });
  API.bind( "close:finish", function() {
    setTimeout(function() {
      $burger.removeClass( "is-active" );
    }, 100);
  });

  $('.carousel-services').on('initialized.owl.carousel', function() {
    setTimeout(function() {
      carouselService()
    }, 100);
  });

  $('.carousel-services').owlCarousel({
    loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {items: 1},
      800: {items: 2},
      1100: {items: 3}
    }
  });

  function carouselService() {
    $('.carousel-services-item').each(function () {
      var ths = $(this),
          thsh = ths.find('.carousel-services-content').outerHeight();
          ths.find('.carousel-services-image').css('min-height', thsh);
    });
  }carouselService();

  $('.carousel-services-composition .h3').each(function () {
    var ths = $(this);
    ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
  });

  function onResize() {
    $('.carousel-services-content').equalHeights();
  }onResize();
  window.onresize = function(){onResize}

});


