const owl = $('.owl-carousel');

owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,
});

$('.customPrevbtn').click(function () {
    owl.trigger('prev.owl.carousel');
});