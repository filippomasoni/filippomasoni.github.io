$(".closeThis").click(function(){ $("#warning").fadeOut('700'); });



$( document ).ready(function() {

    // Get started!

    if (window.screen.width > 768) {
        // resolution is up md
        $(window).on("scroll", function() {
            var s = 120 - Math.min(30, $(document).scrollTop());
            var a = 96 - Math.min(30, $(document).scrollTop());
            var t = 10 + Math.min(30, $(document).scrollTop());
            $("figure.logo img").width(s).height(s);
            $("figure").height(a);
            $("figure.logo img").css("margin-top",t);
        });

        $(window).scroll(function() {
          if ($(document).scrollTop() > 45) {
            $('header').addClass('fixed-top');
            $('#main-container').addClass('pad-top');
          } else {
            $('header').removeClass('fixed-top');
            $('#main-container').removeClass('pad-top');
          }
        });
    }

    if (window.screen.width < 768) {
        // resolution is up md
        $(window).on("scroll", function() {
            var s = 70 - Math.min(20, $(document).scrollTop());
            var a = 48 - Math.min(20, $(document).scrollTop());
            var t = 5 + Math.min(20, $(document).scrollTop());
            $("figure.logo img").width(s).height(s);
            $("figure").height(a);
            $("figure.logo img").css("margin-top",t);
        });

        $(window).scroll(function() {
          if ($(document).scrollTop() > 20) {
            $('header').addClass('fixed-top');
            $('#main-container').addClass('pad-top');
          } else {
            $('header').removeClass('fixed-top');
            $('#main-container').removeClass('pad-top');
          }
        });
    }



});
