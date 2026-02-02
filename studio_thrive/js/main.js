(function main() {

  (function () {
    'use strict';

    // ================= Smooth page scroll =================
    $('a.page-scroll').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 40
          }, 900);
          return false;
        }
      }
    });

    // ================= Show Menu on Scroll =================
    $(window).bind('scroll', function () {
      var navHeight = $(window).height() - 500;
      if ($(window).scrollTop() > navHeight) {
        $('.navbar-default').addClass('on');
      } else {
        $('.navbar-default').removeClass('on');
      }
    });

    // ================= Scrollspy =================
    $('body').scrollspy({
      target: '.navbar-default',
      offset: 80
    });

    // ================= Hide nav on click =================
    $(".navbar-nav li a").click(function () {
      if ($(".navbar-toggle").is(":visible")) {
        $(".navbar-collapse").collapse('hide');
      }
    });

  })();

  // ================= Isotope + Lightbox =================
  $(window).on('load', function () {

    var $container = $('.portfolio-items').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });

    // ===== Portfolio filter =====
    $('.portfolio-filters a').on('click', function (e) {
      e.preventDefault();

      $('.portfolio-filters a').removeClass('active');
      $(this).addClass('active');

      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });

    // ================= FIX: PROJECT CLICK JUMP ISSUE =================
    $('.open-project').on('click', function (e) {
      e.preventDefault();   // 🔥 PAGE JUMP FIX

      var title = $(this).data('title');
      var folder = $(this).data('folder');

      console.log('Project:', title);
      console.log('Folder:', folder);

      // 👉 yahin future me gallery / modal open hoga
      // openProjectGallery(title, folder);
    });

  });

})(); // main end

// ================= Extra menu scroll =================
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('#menu').addClass('on');
  } else {
    $('#menu').removeClass('on');
  }
});
