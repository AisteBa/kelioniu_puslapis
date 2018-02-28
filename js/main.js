<<<<<<< HEAD
$(".buttonContainer").click(function() {
    $('html, body').animate({
        scrollTop: $("#listContainer").offset().top
    },800);
});
=======
$(document).ready(function(){
    $('.parallax').parallax();
  
    sizeTheVideo();
    $(window).resize(function(){
      sizeTheVideo();
    });  
  });
  
  function sizeTheVideo(){
    // - 1.78 is the aspect ratio of the video
  // - This will work if your video is 1920 x 1080
  // - To find this value divide the video's native width by the height eg 1920/1080 = 1.78
    var aspectRatio = 1.78;
    
      var video = $('#videoWithJs iframe');
      var videoHeight = video.outerHeight();
      var newWidth = videoHeight*aspectRatio;
          var halfNewWidth = newWidth/2;
      
    //Define the new width and centrally align the iframe
    video.css({"width":newWidth+"px","left":"50%","margin-left":"-"+halfNewWidth+"px"});
  }

  $(document).ready(function(){
    $('.carousel').carousel();
  });
  
  $(document).ready(function() {
    Materialize.updateTextFields();
  });
 
>>>>>>> 2b4e52033bdfd3d06e1b71cde7bcf6139ea36083
