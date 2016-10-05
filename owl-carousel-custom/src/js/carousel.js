$.fn.videoCarousel = function() {
    var thumbnails = $(this);
    var stage = thumbnails.siblings('#owl-stage');
    var slidesPerView = 3;
    var colors = ['#6E352C', '#CF5230', '#F59A44', '#E3C598', '#8A6E64', '#6E612F'];

    thumbnails.on('click', '.thumb > div > div:first-child', function() {
        thumbnails.find('.current').removeClass('current');
        $(this).closest('.thumb').addClass('current');
    });

    var flag = false;
    var duration = 300;

    stage.owlCarousel({
        items: 1,
        dots: false,
        touchDrag: false,
        mouseDrag: false
    })
        .on('changed.owl.carousel', function(e) {
            if (!flag) {
                flag = true;
                thumbnails.trigger('to.owl.carousel', [e.item.index, duration, true]);
                flag = false;
            }
        });

    thumbnails.owlCarousel({
        responsive:{
            0:{
                items:2,
                stagePadding: 30
            },
            600:{
                items:2,
                stagePadding: 100
            },
            1000:{
                items:2,
                stagePadding: 100
            },
            1200:{
                items:slidesPerView,
                stagePadding: 0
            }
        },
        slideBy: slidesPerView,
        margin: 10,
        nav: true,
        dots: true,
        navText: ["", ""]
    })
        .on('click', '.owl-item', function() {
            stage.trigger('to.owl.carousel', [$(this).index(), duration, true]);

        })
        .on('changed.owl.carousel', function(e) {
            if (!flag) {
                flag = true;
                stage.trigger('to.owl.carousel', [e.item.index, duration, true]);
                flag = false;
            }
        });

    thumbnails.find('.owl-stage-outer > div > div:first-child > div').addClass('current');
    thumbnails.find('.owl-prev').hide();
    if((thumbnails.find('.owl-item').length) <= slidesPerView){
        thumbnails.find('.owl-next').hide();
    }

    thumbnails.on('translated.owl.carousel', function(event) {
        if (thumbnails.find('.owl-item:last-child').hasClass('active')) {
            thumbnails.find('.owl-next').hide();
        }
        if (thumbnails.find('.owl-item:first-child').hasClass('active')) {
            thumbnails.find('.owl-prev').hide();
        }
    });

    stage.find('.owl-item').each(function (index, element) {
        $(element).css("background-color", colors[index]);
    });

    thumbnails.find('.owl-item').each(function (index, element) {
        $(element).css("background-color", colors[index]);
    });

};

$("#owl-thumbnails").videoCarousel();