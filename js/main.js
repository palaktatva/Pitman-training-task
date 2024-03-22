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
  

  jQuery('.accordin-title').click(function(){
    jQuery(this).closest('.top-reasons-accordin-inner-wrapper').find('.accordin-content').stop(true,true).slideToggle()
    jQuery(this).closest('.top-reasons-accordin-inner-wrapper').siblings().find('.accordin-content').stop(true,true).slideUp()
    jQuery(this).closest('.top-resons-inner-wrapper').siblings().find('.accordin-content').stop(true,true).slideUp()
    jQuery(this).closest('.top-reasons-accordin-inner-wrapper').find('.accordin-items').toggleClass("active");
    jQuery(this).closest('.top-reasons-accordin-inner-wrapper').siblings().find('.accordin-items').removeClass("active");
    jQuery(this).closest('.top-resons-inner-wrapper').siblings().find('.accordin-items').removeClass("active");


  });

  jQuery('.down-arrow').click(function(){
    if(jQuery(window).width() < 991)
    {
    jQuery(this).closest('.footer-site .col-layout-left-side .col-layout').find('.footer-listing').stop(true,true).slideToggle("slow")
    jQuery(this).closest('.footer-site .col-layout-left-side .col-layout').siblings().find('.footer-listing').stop(true,true).slideUp("slow")
    jQuery(this).closest('.footer-site .col-layout-left-side .col-layout').find('.footer-menu-title').toggleClass("active");
    jQuery(this).closest('.footer-site .col-layout-left-side .col-layout').siblings().find('.footer-menu-title').removeClass("active");
}
  }); 
  

  
  });
