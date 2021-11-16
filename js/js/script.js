$(document).ready(function () {

    // 위로가기 기능
    var gotop = $('.gotop');
    gotop.click(function () {

        $('html, body').animate({
            scrollTop: 0
        });
    });
    new Swiper('.sw-rede', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 16,
        navigation: {
            nextEl: ".sw-rede-next",
            prevEl: ".sw-rede-prev",
        },
        pagination: {
            el: ".sw-rede-pg",
            type: "fraction",
        },
    });

    var sw_visual = new Swiper('.swiper-container', {

        // 효과 : 필요에 의해서 사용
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        // // 슬라이드 반복
        // loop: true,

        // 자동 실행
        autoplay: {
            delay: 2000,
            // 자동실행 유지
            disableOnInteraction: false,
        },

        // 모션속도
        speed: 1000,

        // 좌우이동
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // 슬라이드 목록
        pagination: {
            el: ".swiper-pagination",
            // 클릭이 가능하도록 처리
            clickable: true,
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

        if(scrollbar > 540) {
            gotop.addClass('gotop-active');
        }else{
            gotop.removeClass('gotop-active');
        }
    });
});