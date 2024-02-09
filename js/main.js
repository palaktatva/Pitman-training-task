

$(document).ready(function(){ 
  $(" .accordin-title").click(function(){
   $(this).closest(".accordin-wrapper").find(".accordin-content").slideToggle();
   $(this).closest(".accordin-wrapper").siblings().find(".accordin-content").slideUp();
   $(this).closest(".accordin-wrapper").find(".accordin-items").toggleClass("active");
   $(this).closest(".accordin-wrapper").siblings().find(".accordin-items").removeClass("active")
  });
});
