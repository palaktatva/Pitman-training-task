function scroll_spy(){
  var header_height = jQuery("header").innerHeight();
  current_position = jQuery(window).scrollTop();

  jQuery(".main-section section").each(function(){
    var _section = jQuery(this).attr('data-tab')
    var section_offset = jQuery(this).offset().top - header_height
    var section_height = jQuery(this).height();

    if(current_position >= section_offset && current_position < section_offset + section_height){
      current_link = jQuery(".nav-wrap ul li a[data-link= '"+_section+"']");
      jQuery(this).addClass("active").siblings().removeClass("active");
      current_link.closest("li").addClass("active").siblings().removeClass("active");
    }
  });
  
}

function sticky_header(){
  var header_height = jQuery("header").innerHeight();
   
    if(jQuery(window).scrollTop() > header_height){
      jQuery("body").addClass("sticky-header")
  }
  else{
    jQuery("body").removeClass("sticky-header")
  }
}

jQuery(document).ready(function () {
  scroll_spy();
  sticky_header();
 

  jQuery('.humberger-icon').click(function () {
    jQuery('body , html').toggleClass('open-menu');
  });

  jQuery('.our-team-slider-outer-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

    ]

  });


  jQuery('.accordin-title').click(function () {
    jQuery(this).closest('.top-reasons-accordin-inner-wrapper').find('.accordin-content').stop(true, true).slideToggle()
    jQuery(this).closest('.top-reasons-accordin-inner-wrapper').siblings().find('.accordin-content').stop(true, true).slideUp()
    jQuery(this).closest('.top-resons-inner-wrapper').siblings().find('.accordin-content').stop(true, true).slideUp()
    jQuery(this).closest('.top-reasons-accordin-inner-wrapper').find('.accordin-items').toggleClass("active");
    jQuery(this).closest('.top-reasons-accordin-inner-wrapper').siblings().find('.accordin-items').removeClass("active");
    jQuery(this).closest('.top-resons-inner-wrapper').siblings().find('.accordin-items').removeClass("active");


  });

  jQuery('.down-arrow').click(function () {
    if (jQuery(window).width() < 991) {
      jQuery(this).closest('.footer-site .col-layout-left-side .col-layout').find('.footer-listing').stop(true, true).slideToggle("slow")
      jQuery(this).closest('.footer-site .col-layout-left-side .col-layout').siblings().find('.footer-listing').stop(true, true).slideUp("slow")
      jQuery(this).closest('.footer-site .col-layout-left-side .col-layout').find('.footer-menu-title').toggleClass("active");
      jQuery(this).closest('.footer-site .col-layout-left-side .col-layout').siblings().find('.footer-menu-title').removeClass("active");
    }
  });

 jQuery('.header-wrap .nav-wrap ul li a').click(function(e){
  e.preventDefault();
  var header_height = jQuery("header").innerHeight();
  var _link = jQuery(this).attr('data-link');
  var _target =  jQuery("body").find('section[data-tab= "'+_link+'"]');

  jQuery("html , body").stop().animate({
    scrollTop : _target.offset().top - header_height
  });

 });


});

jQuery(window).scroll(function(){
  console.log(jQuery(window).scrollTop());
  scroll_spy();
  sticky_header();
 
});
