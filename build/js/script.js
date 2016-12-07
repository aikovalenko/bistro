$(document).ready(function() {

    $('.dropdown').hover(function() {
        $(this).addClass('open');
    }, function() {
        $(this).removeClass('open');
    });


    $('.grid').masonry({
        // columnWidth: 10,
        columnWidth: '.grid-sizer',
        // fitWidth: true,
        // gutter: 10,
        itemSelector: '.grid-item'
    });

    $(".slider1").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive:{
            0:{
                items:1
            }
        }
    });

    $.each($('.title--bottom'), function(i, el) {

        var inner = $(this).find("title__inner");

    });
});