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

    $('#homeBlog').owlCarousel({
        loop:true,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:2
            }
        }
    })
    $('#othersArticle').owlCarousel({
      loop:true,
      dots:false,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          768:{
              items:1
          },
          992:{
              items:1
          },
          1200:{
              items:2
          }
      }
  })

    $('[data-toggle="tooltip"]').tooltip({
        
        title:"Mon-Fri <br> 8:00AM-6:00PM <br>(GMT +2)",
        html:true
    });

    // $('#navbarSupportedContent .nav-item').click(function(){
    //   $('#navbarSupportedContent').removeClass('show');
    // });

    new WOW().init();

});