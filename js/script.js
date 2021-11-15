$(document).ready(function () {

    // 위로가기 기능
    $('.gotop').click(function () {

        $('html, body').animate({
            scrollTop: 0
        });
    });
    // // 리디자인 슬라이드
    // new Swiper('.sw-rede', {
    //     slidesPerView: 4,
    //     loop: true,
    // });
    // swiper 슬라이드 관련
    // swiper 슬라이드 관련
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

    // 마우스 오버/아웃 처리
    $('.visual').mouseenter(function () {
        // 슬라이드 멈추기
        sw_visual.autoplay.stop();
    });
    $('.visual').mouseleave(function () {
        // 슬라이드 자동재실행
        sw_visual.autoplay.start();
    });
    //  상단영역 기능
    let header = $('.header');
    $(window).scroll(function () {
        let scrollbar = $(window).scrollTop();

        if (scrollbar > 0) {
            header.addClass('header-active');
        } else {
            header.removeClass('header-active');
        }
    });
});