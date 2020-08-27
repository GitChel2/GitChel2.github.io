$(function() {

                    /*_____ F I X E D   M E N U _____*/

    let header = $("#header");
    let banner = $("#banner");
    let bannerH = banner.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");


    checkScroll(scrollPos, bannerH);


    $(window).on("scroll resize", function(){

        bannerH = banner.innerHeight();

        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, bannerH);

    });


    function checkScroll(scrollPos, bannerH){

        if ( scrollPos > bannerH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


                    /*_____ S M O O T H   S C R O L L _____*/


     $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;


         nav.removeClass("show");

          $("html, body").animate({
            scrollTop: elementOffset - 80
        }, 800);

    });

                    /*_____ N A V   T O G G L E _____*/


        navToggle.on("click", function(event){

        event.preventDefault();

        nav.toggleClass("show");

    });


});

























