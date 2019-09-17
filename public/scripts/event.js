$(document)
.ready(function() {
  // fix main menu to page on passing
  $('.main.menu').visibility({
    type: 'fixed',
  });

  $('.shape').shape();
  $('.ui.checkbox').checkbox();

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
      scrollTop: $(".speakers-section.segment").offset().top - 60
    }, 300);
    // $('.modal').css("display", "none");
    $('.modal').css("opacity", "0");
    $('.modal').css("z-index", "-1");
    $('html, body').css("overflow", "visible");
  });

  $('.modal .modal-content .list #2018SpeakersNav').on('click', function () {
    $('html, body').animate({
        scrollTop: $("#2018SpeakerSection").offset().top - 140
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
      scrollTop: $("#2018SpeakerSection").offset().top - 100
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
      scrollTop: $(".speakers-section.segment").offset().top - 110
    }, 300);
  });

  $('.main.menu .container #2018speakersNav').on('click', function () {
    $('html, body').animate({
        scrollTop: $("#2018SpeakerSection").offset().top - 110
    }, 300);
  });

  $('.main.menu .container #pricing').on('click', function () {
    $('html, body').animate({
        scrollTop: $(".pricing-section.segment").offset().top - 130
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

  // $('.pricing-section.segment .content .column .card .eb h3').mouseover(function(){
  //   $('#promo').modal({transition: 'drop'}).modal('show');
  // })

  var $form = $('#gform');
  var $input = $('input');
  $form.submit(function () {
    $.post($(this).attr('action'), $(this).serialize(), function (response) {

    }, 'json');
      alert('Thanks! We will update you soon.');
      $input.val('').removeAttr('checked').removeAttr('selected');
      location.reload(true);
      return false;
  });

  var $arena_form = $('#arena_form');
  $arena_form.submit(function () {
    $.post($(this).attr('action'), $(this).serialize(), function (response) {

    }, 'json');
    alert('Arena Application form submitted. Do not forget to send your Deck File.');
    $input.val('').removeAttr('checked').removeAttr('selected');
    location.reload(true);
    return false;
  });

  $('#arena_next').on('click', function () {
      $('#arena_next').hide();
      $('#eligibility_criteria').hide();
      $('.shape').shape('flip right');
  });

  // $('#eligibility_criteria').on('click', function () {
  //     $('#promo').css("opacity","1");
  //     $('#promo').modal({transition: 'drop'}).modal('show');
  // });

  $('#start_up_details').bind('input propertychange', function () {
      var details = this.value;
      if(details === ""){
          $('#words_count').text("Words count: 0");
      }else{
          details = details.replace(/(^\s*)|(\s*$)/gi,"");
          details = details.replace(/[ ]{2,}/gi," ");
          details = details.replace(/\n /,"\n");
          $('#words_count').text("Words count: " + details.split(' ').length);
      }
  });


    if(window.location.href === "http://www.unicon2019.com/#arena"){
      $('html, body').animate({
          scrollTop: $(".arena-section.segment").offset().top
      }, 0);
    }else{}

  // setTimeout(function(){
  //     if(window.location.href === "http://www.unicon2019.com/#arena"){
  //         $('html, body').animate({
  //             scrollTop: $(".arena-section.segment").offset().top
  //         }, 500);
  //     }else{}
  //   }, 2000);

});

