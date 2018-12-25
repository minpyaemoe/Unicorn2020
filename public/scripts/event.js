

$(document)
.ready(function() {
  // fix main menu to page on passing
  $('.main.menu').visibility({
    type: 'fixed',
  });

  // $('.main.menu .right.item .icon').on('click', function () {
  //   $('.menu-overlay').css("opacity", "1");
  //   $('.menu-overlay').css("z-index", "30");
  //   $('html, body').css("overflow", "hidden");
  //   // $('.main.menu .right.item i').css("display", "block");
  //   // $('.main.menu .right.item .icon').css("display", "none");
  // });
  //
  // $('.main.menu .right.item i').on('click', function () {
  //   $('.menu-overlay').css("opacity", "0");
  //   $('.menu-overlay').css("z-index", "-1");
  //   $('html, body').css("overflow", "visible");
  //   // $('.main.menu .right.item .remove').css("display", "none");
  //   // $('.main.menu .right.item .sidebar').css("display", "block");
  // });

  $('#register').on('click', function () {
    fbq('track', 'CompleteRegistration');
  });

  $('.main.menu .right.item .icon').on('click', function () {
    // $('.modal').css("display", "block");
    $('.modal').css("opacity", "1");
    $('.modal').css("z-index", "99");
    $('html, body').css("overflow", "hidden");
  });

  $('.modal .modal-content i').on('click', function () {
    $('.modal').css("opacity", "0");
    $('.modal').css("z-index", "-1");
    $('html, body').css("overflow", "visible");
    // $('.modal').css("display", "none");
  });


  $('.modal .modal-content .list #about').on('click', function () {
    $('html, body').animate({
      scrollTop: $(".about-section.segment").offset().top - 60
    }, 300);
    // $('.modal').css("display", "none");
    $('.modal').css("opacity", "0");
    $('.modal').css("z-index", "-1");
    $('html, body').css("overflow", "visible");
  });

  $('.modal .modal-content .list #speakers').on('click', function () {
    $('html, body').animate({
      scrollTop: $(".speakers-section.segment").offset().top - 80
    }, 300);
    // $('.modal').css("display", "none");
    $('.modal').css("opacity", "0");
    $('.modal').css("z-index", "-1");
    $('html, body').css("overflow", "visible");
  });

  $('.modal .modal-content .list #partners').on('click', function () {
    $('html, body').animate({
      scrollTop: $(".partners-section.segment").offset().top - 90
    }, 300);
    // $('.modal').css("display", "none");
    $('.modal').css("opacity", "0");
    $('.modal').css("z-index", "-1");
    $('html, body').css("overflow", "visible");
  });

  $('.modal .modal-content .list #agenda').on('click', function () {
    $('html, body').animate({
      scrollTop: $(".agenda-section.segment").offset().top - 100
    }, 300);
    // $('.modal').css("display", "none");
    $('.modal').css("opacity", "0");
    $('.modal').css("z-index", "-1");
    $('html, body').css("overflow", "visible");
  });

  $('.modal .modal-content .list #pricing').on('click', function () {
    $('html, body').animate({
      scrollTop: $(".pricing-section.segment").offset().top - 90
    }, 300);
    // $('.modal').css("display", "none");
    $('.modal').css("opacity", "0");
    $('.modal').css("z-index", "-1");
    $('html, body').css("overflow", "visible");
  });

  $('.modal .modal-content .list #arena').on('click', function () {
    $('html, body').animate({
        scrollTop: $(".arena-section.segment").offset().top
    }, 300);
        // $('.modal').css("display", "none");
      $('.modal').css("opacity", "0");
      $('.modal').css("z-index", "-1");
      $('html, body').css("overflow", "visible");
  });

  $('.modal .modal-content .list #venue').on('click', function () {
    $('html, body').animate({
      scrollTop: $(".venue-section.segment").offset().top
    }, 300);
    // $('.modal').css("display", "none");
    $('.modal').css("opacity", "0");
    $('.modal').css("z-index", "-1");
    $('html, body').css("overflow", "visible");
  });

  $('.modal .modal-content .list #contact').on('click', function () {
    $('html, body').animate({
      scrollTop: $(".contact-section.segment").offset().top - 100
    }, 300);
    // $('.modal').css("display", "none");
    $('.modal').css("opacity", "0");
    $('.modal').css("z-index", "-1");
    $('html, body').css("overflow", "visible");
  });

  $('.main.menu .container #about').on('click', function () {
    $('html, body').animate({
      scrollTop: $(".about-section.segment").offset().top - 100
    }, 300);
  });

  $('.main.menu .container #speakers').on('click', function () {
    $('html, body').animate({
      scrollTop: $(".speakers-section.segment").offset().top - 130
    }, 300);
  });

  $('.main.menu .container #partners').on('click', function () {
    $('html, body').animate({
      scrollTop: $(".partners-section.segment").offset().top - 130
    }, 300);
  });

  $('.main.menu .container #agenda').on('click', function () {
    $('html, body').animate({
      scrollTop: $(".agenda-section.segment").offset().top - 130
    }, 300);
  });

  $('.main.menu .container #pricing').on('click', function () {
    $('html, body').animate({
      scrollTop: $(".pricing-section.segment").offset().top - 130
    }, 300);
  });

  $('.main.menu .container #arena').on('click', function () {
    $('html, body').animate({
        scrollTop: $(".arena-section.segment").offset().top + 55
    }, 300);
  });

  $('.main.menu .container #venue').on('click', function () {
    $('html, body').animate({
      scrollTop: $(".venue-section.segment").offset().top
    }, 300);
  });

  $('.main.menu .container #contact').on('click', function () {
    $('html, body').animate({
      scrollTop: $(".contact-section.segment").offset().top - 130
    }, 300);
  });

  var $form = $('form');
  var $input = $('input');
  $form.submit(function () {
    $.post($(this).attr('action'), $(this).serialize(), function (response) {

    }, 'json');
      alert('Thanks! We will update you soon.');
      $input.val('').removeAttr('checked').removeAttr('selected');
      location.reload();
      return false;
  });
})
;
