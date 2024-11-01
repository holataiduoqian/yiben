'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
    /**
     * 返回history back
     */
    $('#back').on('click', function () {
        window.history.back();
    });

    /**
     * 标签页
     */
    if ($('.swiper-container').length) {
        var mySwiper = $('.swiper-container').swiper(_defineProperty({
            slidesPerView: 'auto',
            freeMode: true,
            freeModeMomentumRatio: 0.5
        }, 'slidesPerView', 'auto')).on('touchstart', function (e) {
            e.preventDefault();
        });
        var width = mySwiper.container.width();
        var maxTranslate = mySwiper.maxTranslate();
        var maxWidth = -maxTranslate + width / 2;

        var navSwiper = $('.nav-content').swiper({
            slidesPerView: 'auto'
        });
        mySwiper.on('tap', function (swiper, e) {
            setTimeout(function() {
                $('.swiper-auto-height').height($('.swiper-auto-height').find('.swiper-slide-active').height() + 20)
            }, 0);
            var slide = swiper.slides[swiper.clickedIndex];
            var slideLeft = slide.offsetLeft;
            var slideWidth = slide.clientWidth;
            var slideCenter = slideLeft + slideWidth / 2;
            mySwiper.setWrapperTransition(300);
            if (slideCenter < width / 2) {
                mySwiper.setWrapperTranslate(0);
            } else if (slideCenter > maxWidth) {
                mySwiper.setWrapperTranslate(maxTranslate);
            } else {
                mySwiper.setWrapperTranslate(width / 2 - slideCenter);
            }

            $(".swiper-container  .active").removeClass('active');
            $(".swiper-container .swiper-slide").eq(swiper.clickedIndex).addClass('active');
            navSwiper && navSwiper.slideTo(swiper.clickedIndex);
        });
    }
    /**
     * fastclick
     */
    FastClick.attach(document.body);

    /**
     * headRoom
     */
    if ($('.headroom').length) {
        var headroom = new Headroom($('.headroom')[0]);
        headroom.init();
    }
});