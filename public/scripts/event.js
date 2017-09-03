

$(document)
  .ready(function() {
    // fix main menu to page on passing
    $('.main.menu').visibility({
      type: 'fixed',
    });

    $('.main.menu .right.item .icon').on('click', function () {
      $('.modal').css("display", "block");
      $('html, body').css("overflow", "hidden");
    });

    $('.modal .modal-content i').on('click', function () {
      $('.modal').css("display", "none");
      $('html, body').css("overflow", "auto");
    });

    $('.modal .modal-content .list #about').on('click', function () {
      $('body').animate({
        scrollTop: $(".about-section.segment").offset().top - 130
      }, 300);
      $('.modal').css("display", "none");
      $('html, body').css("overflow", "auto");
    });

    $('.modal .modal-content .list #speakers').on('click', function () {
      $('body').animate({
        scrollTop: $(".speakers-section.segment").offset().top - 130
      }, 300);
      $('.modal').css("display", "none");
      $('html, body').css("overflow", "auto");
    });

    $('.modal .modal-content .list #partners').on('click', function () {
      $('body').animate({
        scrollTop: $(".partners-section.segment").offset().top - 130
      }, 300);
      $('.modal').css("display", "none");
      $('html, body').css("overflow", "auto");
    });

    $('.modal .modal-content .list #agenda').on('click', function () {
      $('body').animate({
        scrollTop: $(".agenda-section.segment").offset().top - 130
      }, 300);
      $('.modal').css("display", "none");
      $('html, body').css("overflow", "auto");
    });

    $('.modal .modal-content .list #pricing').on('click', function () {
      $('body').animate({
        scrollTop: $(".pricing-section.segment").offset().top - 130
      }, 300);
      $('.modal').css("display", "none");
      $('html, body').css("overflow", "auto");
    });

    $('.modal .modal-content .list #venue').on('click', function () {
      $('body').animate({
        scrollTop: $(".venue-section.segment").offset().top
      }, 300);
      $('.modal').css("display", "none");
      $('html, body').css("overflow", "auto");
    });

    $('.modal .modal-content .list #contact').on('click', function () {
      $('body').animate({
        scrollTop: $(".contact-section.segment").offset().top - 130
      }, 300);
      $('.modal').css("display", "none");
      $('html, body').css("overflow", "auto");
    });


    $('.main.menu .container #about').on('click', function () {
      $('body').animate({
        scrollTop: $(".about-section.segment").offset().top - 130
      }, 300);
    });

    $('.main.menu .container #speakers').on('click', function () {
      $('body').animate({
        scrollTop: $(".speakers-section.segment").offset().top - 130
      }, 300);
    });

    $('.main.menu .container #partners').on('click', function () {
      $('body').animate({
        scrollTop: $(".partners-section.segment").offset().top - 130
      }, 300);
    });

    $('.main.menu .container #agenda').on('click', function () {
      $('body').animate({
        scrollTop: $(".agenda-section.segment").offset().top - 130
      }, 300);
    });

    $('.main.menu .container #pricing').on('click', function () {
      $('body').animate({
        scrollTop: $(".pricing-section.segment").offset().top - 130
      }, 300);
    });

    $('.main.menu .container #venue').on('click', function () {
      $('body').animate({
        scrollTop: $(".venue-section.segment").offset().top
      }, 300);
    });

    $('.main.menu .container #contact').on('click', function () {
      $('body').animate({
        scrollTop: $(".contact-section.segment").offset().top - 130
      }, 300);
    });

  })
;
