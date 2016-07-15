$(document).ready(function() {
    // Fade in
    $(".fadeOnLoad").fadeIn(2000);
    $(".delayedFade").delay(1000).fadeIn(1000);

    // Fix scrollbar
    $(window).bind('scroll', function() {
        var navHeight = $(window).height();
        if ($(window).scrollTop() > navHeight) {
            $(".navbar-inverse").addClass("navbar-fixed-top");
            $("#about").css("margin-top", "50px");
        }
        else {
            $(".navbar-inverse").removeClass("navbar-fixed-top");
            $("#about").css("margin-top", "0px");
        }
    });

    $(".navbar-quick-collapse a").click(function() {
        $("#navbar-quick-toggle").click();
    });

    $(".navbar-main-collapse a").click(function() {
        $("#navbar-main-toggle").click();
    });

    // Smooth scrolling
    $(".smoothScroll").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 49
            }, 800, function(){
                window.location.hash = hash;
            });
        }  else {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 800, function(){
                window.location.hash = "";
            });
        }
    });

});
