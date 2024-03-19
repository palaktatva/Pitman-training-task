jQuery(document).ready(function(){

  jQuery('.humberger-icon').click(function(){
    jQuery('body , html').toggleClass('open-menu');
  });

  jQuery('.our-team-slider-outer-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  jQuery('.accordin-title').click(function(){
    jQuery(this).closest('.top-reasons-accordin-inner-wrapper').find('.accordin-content').slideToggle()
    jQuery(this).closest('.top-reasons-accordin-inner-wrapper').siblings().find('.accordin-content').slideUp()
    jQuery(this).closest('.top-reasons-accordin-inner-wrapper').find('.accordin-items').toggleClass("active");
    jQuery(this).closest('.top-reasons-accordin-inner-wrapper').siblings().find('.accordin-items').removeClass("active");

  });
  });
