$('.cotainer').slick({
    dots: false,
    arrows: true,
    prevArrow:'<div class=slick-prev><i class="fas fa-chevron-left"></i></div>',
    nextArrow:'<div class=slick-next><i class="fas fa-chevron-right"></i></div>',
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    variableWidth: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                autoplay: false,
                variableWidth: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                variableWidth: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false

            }
        }
    ]
});
