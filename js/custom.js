$(function(){
    setTimeout(function () {
        numberOfSlides = testimonialOfSlidesToShow();
        numberOfSlideSteps = stepsOfSlidesToShow();
        numberOfSlideTurbode = turbodebtOfSlidesToShow();
        createTestimonialCarousel(numberOfSlides, numberOfSlideSteps, numberOfSlideTurbode);
    }, 300);
    $('.debt-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.debt-slider-nav',
    });
    $('.debt-slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.debt-slider-for',
        focusOnSelect: true,
        arrows:true
    });
    $('.faq-items').find('.faq-desc').slideUp();
    $('.faq-items').each(function(){
        var $this = $(this);
        $this.on('click', function(){
            $this.toggleClass('active');
            $this.find('.faq-desc').slideToggle();
        })
    })
  });
  if ($(window).width() <= 768) {
    $('.menu-desc').slideUp();
    $('.nav-menu h4').each(function(){
        var $this = $(this);
        $this.on('click', function(){
            $this.toggleClass('active');
            $this.parent().find('.menu-desc').slideToggle();
        })
    })
 }
  $(window).scroll(function(){
    var sticky = $('.sticky-header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed-header');
    else sticky.removeClass('fixed-header');
  });

function testimonialOfSlidesToShow(){
  var carouselWidth = jQuery(".testimonial-slider").width();
  var numberOfSlides = 0;
  switch (true) {
      case (carouselWidth < 1024):
          numberOfSlides = 1;
          break;
      case (carouselWidth > 1200):
          numberOfSlides = 2;
          break;
  }

  return numberOfSlides;
}
function stepsOfSlidesToShow(){
  var carouselWidth = jQuery(".steps-wrapper").width();
  var numberOfSlides = 0;
  switch (true) {
      case (carouselWidth < 679):
          numberOfSlides = 1;
          break;
      case (carouselWidth < 1024):
          numberOfSlides = 2;
          break;
      case (carouselWidth > 1200):
          numberOfSlides = 4;
          break;
  }

  return numberOfSlides;
}
function turbodebtOfSlidesToShow(){
  var carouselWidth = jQuery(".steps-wrapper").width();
  var numberOfSlides = 0;
  switch (true) {
      case (carouselWidth < 992):
          numberOfSlides = 1;
          break;
      case (carouselWidth < 1024):
          numberOfSlides = 2;
          break;
      case (carouselWidth > 1200):
          numberOfSlides = 3;
          break;
  }

  return numberOfSlides;
}
function createTestimonialCarousel(numberOfSlides, numberOfSlideSteps, numberOfSlideTurbode){
  jQuery('.testimonial-slider .slider-wrapper').not('.slick-initialized').slick({
      dots: true,
      arrows: false,
      slidesToShow: numberOfSlides,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 6000,
      // pauseOnHover: true
  });
  jQuery('.turbodebt-news .news-wrapper').not('.slick-initialized').slick({
      dots: true,
      arrows: false,
      slidesToShow: numberOfSlideTurbode,
      slidesToScroll: 1,
  });
  jQuery('.how-turbodebts-works .steps-wrapper').not('.slick-initialized').slick({
      dots: true,
      arrows: false,
      slidesToShow: numberOfSlideSteps,
      slidesToScroll: 1,
  });
}