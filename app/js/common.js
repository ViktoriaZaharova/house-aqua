$('.btn-menu').on('click', function () {
   $('.mobile-menu').fadeIn();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('[name="phone"]').mask('+7(999) 999-99-99');