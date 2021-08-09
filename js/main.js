
$(function(){
    "use strict";

// responsive menu---------------------
 $('.open-btn').click(function(){
   $('nav').show();
   $(this).hide();
   $('.close-btn').show();
 })
 $('.close-btn').click(function(){
   $('nav').hide();
   $(this).hide()
   $('.open-btn').show();
 })
 //sticky
 $(window).scroll(function() {
  if ($(this).scrollTop() > 300){  
      $('header').addClass("sticky");
    }
    else{
      $('header').removeClass("sticky");
    }
  });

  // smart menu script--------------------------




// data background---------------------
    $('[data-background]').each(function(){
        $(this).css('background-image','url('+ $(this).attr('data-background')+')');
    });

// number counter-----------------------
    //  $('.counter').countUp();
     $('.counter').countUp({
        delay: 10,
        time: 2000
    });


// light box or popup box ---------------
$('.video').magnificPopup({
    type: 'iframe',
  });


// slider  box jQ script-----------------
$('.testimonial-active').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testi-img'
  });
  $('.testi-img').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonial-active',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
  });
  $('.brand').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor:false,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
  });

// FAQS section dropdown script-----------------------
// Dropdown toggle
$('.click-box1').click(function(){
  $('.expand-box1').slideToggle();
})
$('.click-box2').click(function(){
  $('.expand-box2').slideToggle();
})
$('.click-box3').click(function(){
  $('.expand-box3').slideToggle();
});

// img animation efect pluign activation
//----------------------------------------
AOS.init();


})(jQuery);
