$(function() {

    // Fixed Header

    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    $(window).on("scroll load resize", function() {

        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    });


    /*Smooth Scroll*/
    $("[data-scroll]").on("click", function(event) {

        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 100
        }, 600);
    });


    /*nav Toggle*/
    navToggle.on("click", function() {
        nav.toggleClass("show");
    });

    /*Tabs*/

    $("[data-tab]").on("click", function() {

        let tabItem = $(this).data("tab");

        $(this).addClass("active").siblings().removeClass("active");
        $(tabItem).addClass("active").siblings().removeClass("active");

    });


});
