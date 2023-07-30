$(document).ready(function(){
   $('.slider__body').slick({
      arrows:true,
      dots:true,
      slidesToShow: 5,
      autoplay:true,
      rows:1,
      waitForAnimate:false,
      centerMode:true,
      focusOnSelect: true,
      asNavFor:".bigslider__body",
      responsive: [
         {
            breakpoint: 1100,
            settings: {
               slidesToShow: 3
            }
         },{
            breakpoint: 850,
            settings: {
               slidesToShow: 3
            }

         }
      ]
   });
   $('.bigslider__body').slick({
      arrows:false,
      fade:true,
      draggable:false,
      swipe:true,
      asNavFor:".slider__body",
      responsive: [
         {
            breakpoint: 767,
            settings: {
               arrows:true,
               fade:false,
               draggable:true,
               dots:true
            }
         }
      ]

   });
   $('.header__burger').click(function(event){
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
   $('.header__link').click(function(event){
      $('.header__burger, .header__menu').removeClass('active');
      $('body').removeClass('lock');
   });
});

