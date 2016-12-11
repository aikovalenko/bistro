function ratioPromo() {
    var windowWidth = $( window ).width();

    var promo = $( ".promo__inner" );
    var ratio = 752/1280;
    if (windowWidth > 1060) {
        promo.css('height', windowWidth * ratio);
    }

}


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
    $(".slider-with-arrows").owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        // autoplay: true,
        // autoplayTimeout: 4000,
        responsive:{
            0:{
                items:1
            }
        },
        afterAction: function(){
            if ( this.itemsAmount > this.visibleItems.length ) {
                $('.next').show();
                $('.prev').show();

                $('.next').removeClass('disabled');
                $('.prev').removeClass('disabled');
                if ( this.currentItem == 0 ) {
                    $('.prev').addClass('disabled');
                }
                if ( this.currentItem == this.maximumItem ) {
                    $('.next').addClass('disabled');
                }

            } else {
                $('.next').hide();
                $('.prev').hide();
            }
        }
    });
    $(".slider-with-arrows-always").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        // autoplay: true,
        // autoplayTimeout: 4000,
        responsive:{
            0:{
                items:1
            }
        }
    });

    // $.each($('.title--bottom'), function(i, el) {
    //
    //     var inner = $(this).find("title__inner");
    //
    // });

    ratioPromo();
});

$(window).resize(function() {
    ratioPromo();
});