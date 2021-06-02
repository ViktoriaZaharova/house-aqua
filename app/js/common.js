$('.btn-menu').on('click', function () {
   $('.mobile-menu').fadeIn();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('[name="phone"]').mask('+7(999) 999-99-99');

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});


let rev = $(".product-filter-slider");
rev
    .on("init", function (event, slick, currentSlide) {
        let cur = $(slick.$slides[slick.currentSlide]),
            next = cur.next(),
            next2 = cur.next().next(),
            next3 = cur.next().next().next(),
            prev = cur.prev(),
            prev2 = cur.prev().prev(),
            prev3 = cur.prev().prev().prev();
        prev.addClass("slick-sprev");
        next.addClass("slick-snext");
        prev2.addClass("slick-sprev2");
        prev3.addClass("slick-sprev3");
        next2.addClass("slick-snext2");
        next3.addClass("slick-snext3");
        cur
            .removeClass("slick-snext")
            .removeClass("slick-sprev")
            .removeClass("slick-snext2")
            .removeClass("slick-snext3")
            .removeClass("slick-sprev2")
            .removeClass("slick-sprev3");
        slick.$prev = prev;
        slick.$next = next;
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        console.log("beforeChange");
        let cur = $(slick.$slides[nextSlide]);
        console.log(slick.$prev, slick.$next);
        slick.$prev.removeClass("slick-sprev");
        slick.$next.removeClass("slick-snext");
        slick.$prev.prev().removeClass("slick-sprev2");
        slick.$next.next().removeClass("slick-snext2");
        slick.$prev.prev().prev().removeClass("slick-sprev3");
        slick.$next.next().next().removeClass("slick-snext3");
        (next = cur.next()), (prev = cur.prev());
        // prev2.prev().prev();
        // next2.next().next();
        prev.addClass("slick-sprev");
        next.addClass("slick-snext");
        prev.prev().addClass("slick-sprev2");
        next.next().addClass("slick-snext2");
        prev.prev().prev().addClass("slick-sprev3");
        next.next().next().addClass("slick-snext3");
        slick.$prev = prev;
        slick.$next = next;
        cur
            .removeClass("slick-next")
            .removeClass("slick-sprev")
            .removeClass("slick-next2")
            .removeClass("slick-next3")
            .removeClass("slick-sprev2")
            .removeClass("slick-sprev3");
    });

rev.slick({
    speed: 1000,
    arrows: false,
    dots: false,
    infinite: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerPadding: "0",
    swipe: true,
    asNavFor: '.product-filter-info',
    customPaging: function (slider, i) {
        return "";
    },
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
});

$('.product-filter-info').slick({
    slidesToSow: 1,
    asNavFor: '.product-filter-slider',
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});