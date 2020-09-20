$(document).ready(function () {
  
  $('.article-slider').slick({
    dots: false,
    autoplay : true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    slidesToShow: 1,
  
    prevArrow: '<button class="left-slider__prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="left-slider__next"><i class="fa fa-angle-right"></i></button>',
  });
  
  $('.third-main__top-slider').slick({
    dots: false,
    autoplay : true,
    autoplaySpeed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<button class="main-slider__prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="main-slider__next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 576,
        settings: {
            arrows: false,
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 280,
        settings: {
          arrows: false,
          slidesToShow: 2,
        }
      }
    ]
  });
     //-----------Стрелка возврата на первую страницу-------------------
     var scroll = $(this).scrollTop();
     var header = $('.scroll').innerHeight();
 
     if (scroll > header) {
         $('#top').fadeIn();
     }
     $(window).scroll(function () {
         var scroll = $(this).scrollTop();
         var header = $('.scroll').innerHeight();
         if (scroll > header) {
             $('#top').fadeIn();
         } else {
             $('#top').fadeOut();
         }
     })
     $('#top').click(function () {
         $('html').animate({
             scrollTop: 0
         }, 1000)
     })
     //------------------///
     
     // Попап форма
     $('#call, .first-order ').click(function(e){
       e.preventDefault();
       $('.form').toggleClass('active');
     })
     $('.closeForm').click(function(e){
       e.preventDefault();
       $('.form').removeClass('active');
     })
    ////------
    
    //---ввод номера в форму---///
    $('.online_phone').mask('8 (999) 999-99-99', {
      autoclear: false,
    });
    // $('#online_name').mask('aaaaaaaaaaaaaaaaaaaaaaaaaaa', {
    //   autoclear: false,
    // });


});
