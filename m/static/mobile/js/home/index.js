'use strict';

$(document).ready(function () {
  var st = $('.st-container').swiper({
    slidesPerView: 'auto',
    paginationClickable: true,
    freeMode: true
  });
  var school = new Swiper('.school-container', {
    effect: 'coverflow',
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    coverflow: {
      slideShadows: false,
      depth: 1,
      stretch: 35
    }
  });
});