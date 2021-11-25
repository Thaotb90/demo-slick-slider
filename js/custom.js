/* Header shrink function*/

$(function() {
    var shrinkHeader = 100;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.navbar').addClass('navbar-shrink');
        } else {
            $('.navbar').removeClass('navbar-shrink');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});


$(document).ready(function(){
    $('#defaultForm-email').click(function(){
        $('.label-mb-5').toggleClass('active');
    })
})
$(document).ready(function(){
    $('#defaultForm-pass').click(function(){
        $('.label-mb-4').toggleClass('active');
    })
})

// Carousels Testimonials
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[980,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:true,
        navigationText:["<",">"],
        autoPlay:true
    });
});

$('.tm-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: { enabled: true }
  });

  // Gallery
  $('.tm-gallery').slick({
    dots: true,
    infinite: true,
    autoPlay: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

    // Back to top smooth scroll
    $('a.nav-link, a.tm-down-arrow-link').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });