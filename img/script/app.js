$(function() {

    /*_____ F I X E D   M E N U _____*/
    let menu = $("#menu");
    let banner = $("#banner");
    let bannerH = banner.innerHeight();
    let scrollPos = $(window).scrollTop();


     checkScroll(scrollPos, bannerH);


    $(window).on("scroll resize", function(){

        bannerH = banner.innerHeight();

        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, bannerH);

    });

    function checkScroll(scrollPos, bannerH){

        if ( scrollPos > bannerH ) {
            menu.addClass("fixed");
        } else {
            menu.removeClass("fixed");
        }
    }


    /*_____ S M O O T H   S C R O L L _____*/

     $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;


         console.log(elementOffset);

          $("html, body").animate({
            scrollTop: elementOffset - 100
        }, 800);

    });



});
