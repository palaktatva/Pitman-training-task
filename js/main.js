jQuery(document).ready(function(){
  $('.our-team-slider-outer-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  $('.accordin-title').dblclick(function(){
    $(this).closest('.top-reasons-accordin-inner-wrapper').find('.accordin-content').slideToggle()
    $(this).closest('.top-reasons-accordin-inner-wrapper').siblings().find('.accordin-content').slideUp()
    $(this).closest('.top-reasons-accordin-inner-wrapper').find('.accordin-items').toggleClass("active");
    $(this).closest('.top-reasons-accordin-inner-wrapper').siblings().find('.accordin-items').removeClass("active");

  });
  });