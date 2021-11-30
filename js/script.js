$(document).ready(function () {
    // 위로가기 기능
    var gotop = $('.gotop');
    gotop.click(function () {


        $('html, body').animate({
            scrollTop: 0
        });
    });
    // AOS기능
    window.onload = function () {
        AOS.init();
    }

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
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        }
    });
    // 스크롤시 애니메이션 
    $('.pro-main-chart').waypoint(function (dir) {
        if (dir == "down") {
            $('.pro-main-chart').addClass('pro-main-chart-active');
        } else {
            $('.pro-main-chart').removeClass('pro-main-chart-active');
        }
    }, {
        offset: '90%'

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
    // other work 슬라이드
    var sw_other = new Swiper('.sw-other', {
        slidesPerView: 1,
        // loop: true,
    });
    $("#etc_mokup1_img").niceScroll({
        cursorcolor: "#999",
        cursoropacitymax: 0,
    });
    $("#etc_mokup2_img").niceScroll({
        cursorcolor: "#999",
        cursoropacitymax: 0,
    });
    $("#etc_mokup4_img").niceScroll({
        cursorcolor: "#999",
        cursoropacitymax: 0,
    });


    var other_list_a = $('.other-list a')
    $.each(other_list_a, function (index, item) {
        $(this).click(function (e) {
            //href 막기
            e.preventDefault();
            sw_other.slideTo(index);
        });
    })



    // 비주얼 커서 효과
    var text = document.getElementById("typeStyle");
    var typewriter = new Typewriter(text, {
        loop: true
    });
    typewriter.typeString('<b>생각</b>을 <b>함께</b><br>')
        .pauseFor(500)
        .typeString('<b>공유</b>하는 <b>디자이너</b><br>')
        .pauseFor(500)
        .typeString('<b>곽혜영</b>입니다.')
        .pauseFor(500)
        .start();
});