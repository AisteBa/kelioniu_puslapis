$(".buttonContainer").click(function() {
    $('html, body').animate({
        scrollTop: $("#listContainer").offset().top
    },800);
});