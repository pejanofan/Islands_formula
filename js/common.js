$(document).ready(function () {
  // 取消連結外框線
  $("a").focus(function () {
    $(this).blur();
  });

  $('a.smoothScroll').smoothScroll({});

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  //指定畫面滑動


  $('.link-1').click(function () {
    $('html,body').animate({
      scrollTop: $('#contentBox-1').offset().top
    }, 800);
  });
  $('.link-2').click(function () {
    $('html,body').animate({
      scrollTop: $('#contentBox-2').offset().top - 100
    }, 800);
  });
  $('.link-3').click(function () {
    $('html,body').animate({
      scrollTop: $('#contentBox-3').offset().top - 100
    }, 800);
  });
  $('.link-4').click(function () {
    $('html,body').animate({
      scrollTop: $('#contentBox-4').offset().top - 100
    }, 800);
  });
  $('.link-5').click(function () {
    $('html,body').animate({
      scrollTop: $('#contentBox-5').offset().top - 100
    }, 800);
  });
  $('.link-6').click(function () {
    $('html,body').animate({
      scrollTop: $('#contentBox-6').offset().top - 100
    }, 800);
  });

});