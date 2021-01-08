var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})

var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
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

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function(){
  console.log("Клик по кнопке меню");
  document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visible');
});


