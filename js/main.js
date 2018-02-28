$(document).ready(function(){

  $(".buttonContainer").click(function() {
      $('html, body').animate({
          scrollTop: $("#listContainer").offset().top
      },800);
  });

  $('.parallax').parallax();
  Materialize.updateTextFields();
  
    $('.carousel').carousel();
    $('.carousel').carousel('prev');
  });