'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var mySwiper = $('.swiper-container').swiper(_defineProperty({
    slidesPerView: 'auto',
    freeMode: true,
    freeModeMomentumRatio: 0.5
  }, 'slidesPerView', 'auto')).on('touchstart', function (e) {
    e.preventDefault();
  });

  mySwiper.on('tap', function (swiper, e) {
    $(".swiper-container  .active").removeClass('active');
    $(".swiper-container .swiper-slide").eq(swiper.clickedIndex).addClass('active');
  });
});