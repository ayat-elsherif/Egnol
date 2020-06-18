$(function(){
   
    $(window).scroll(function(){
      if($(window).scrollTop()>130){
        $('.navCont').addClass('sticky');
      }else{
        $('.navCont').removeClass('sticky');

      }
    });
    if($(window).scrollTop()>130){
        $('.navCont').addClass('sticky');
      }else{
        $('.navCont').removeClass('sticky');

      }
      var scrollToUp=$('.scroll-up');
      $(window).scroll(function(){
        ($(this).scrollTop()>=550)?scrollToUp.show():scrollToUp.hide();
        });
      
      scrollToUp.click(function(){
        $('html,body').animate({scrollTop:0},500);
      });

    /**************offcanvas *************/
    $("[data-trigger]").on("click", function(e){
      e.preventDefault();
      e.stopPropagation();
      var offcanvas_id =  $(this).attr('data-trigger');
      $(offcanvas_id).toggleClass("showCanvas");
      $('body').toggleClass("offcanvas-active");
      $(".screen-overlay").toggleClass("showCanvas");
  }); 
  
  $(".btn-close, .screen-overlay, #navbarSupportedContent .nav-item").click(function(e){
      $(".screen-overlay").removeClass("showCanvas");
      $(".mobile-offcanvas").removeClass("showCanvas");
      $("body").removeClass("offcanvas-active");
  }); 
  $(window).resize(function(){
      if( $(".screen-overlay").hasClass("showCanvas")){ 
          if($(window).width() > 992){
            $(".mobile-offcanvas").removeClass("showCanvas");
            $("body").removeClass("offcanvas-active");
            $(".screen-overlay").removeClass("showCanvas");
        }
    }
  });
/**************offcanvas *************/

    new WOW().init();

});