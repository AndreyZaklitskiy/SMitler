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
});
