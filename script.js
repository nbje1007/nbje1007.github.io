$(document).ready(function () {

    // 위로가기 기능
    var gotop = $('.gotop');
    gotop.click(function () {

        $('html, body').animate({
            scrollTop: 0
        });
    });


    // new Swiper('.sw-rede', {
    //     slidesPerView: 3,
    //     slidesPerGroup: 3,
    //     spaceBetween: 16,
    //     navigation: {
    //         nextEl: ".sw-rede-next",
    //         prevEl: ".sw-rede-prev",
    //     },
    //     pagination: {
    //         el: ".sw-rede-pg",
    //         type: "fraction",
    //     },
    // });
    // publ slide
    let sw_publ = new Swiper('.sw-publ', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: ".sw-publ-next",
            prevEl: ".sw-publ-prev",
        },
        pagination: {
            el: ".sw-publ-pg",
            type: "fraction",
        },
    });


    //  상단영역 기능
    let header = $('.header');
    $(window).scroll(function () {
        let scrollbar = $(window).scrollTop();

        if (scrollbar > 900) {
            header.addClass('header-active');
        } else {
            header.removeClass('header-active');
        }

        if (scrollbar > 540) {
            gotop.addClass('gotop-active');
        } else {
            gotop.removeClass('gotop-active');
        }
    });
});