$(document).ready(function(){
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

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible');
}

function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}

// Обработка форм
$(".form").each(function() {
  $(this).validate({
  errorClass: "invalid",
  messages: {
    name: "Please specify your name",
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
    phone: {
      required: "Phone is required",
  },
  },
});
  $('.phone').ready(function (){
    $('#phone').mask("+7 (999) 999-99-99");
  }); 
  // Окончание $phone
});

});
