$(".banner-carousel").owlCarousel({
    items: 1,
    autoplay:true,
    loop : true,
    autoplayHoverPause: true,
});
$(".blogs-carousel").owlCarousel({
    items: 3,
    margin:20,
    autoplay:true,
    loop : true,
    autoplayHoverPause: true,
    responsive : {
        0 : {
            items:1,
        },
        768 : {
            items:3,
        }
    }
});


$(".logo-carousel").owlCarousel({
    items: 5,
    margin:20,
    autoplay:true,
    loop : true,
    autoplayHoverPause: true,
    responsive : {
        0 : {
            items:2,
        },
        768 : {
            items:6,
        }
    }
});