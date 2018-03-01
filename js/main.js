$(document).ready(function(){

  $(".buttonContainer").click(function() {
      $('html, body').animate({
          scrollTop: $("#listContainer").offset().top
      },800);
  });

  $("#travelButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#listContainer").offset().top
    },800);
  });

  $("#travelButton1").click(function() {
    $('html, body').animate({
        scrollTop: $("#googleMapsContainer").offset().top
    },800);
  });

  $('.parallax').parallax();
  Materialize.updateTextFields();
  
    $('.carousel').carousel();
    $('.carousel').carousel('prev');

});

