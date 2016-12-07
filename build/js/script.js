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

    $.each($('.title--bottom'), function(i, el) {

        var inner = $(this).find("title__inner");

    });
});