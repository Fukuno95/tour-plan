var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})

ymaps.ready(function () {  
    var map = new ymaps.Map("map", {
      center: [7.83815533, 98.29879145], 
      zoom: 17
    });

    if (map) {
      ymaps.modules.require(['Placemark', 'Circle'], function (Placemark, Circle) {
        var placemark = new Placemark([55.37, 35.45]);
      });
    }
  });