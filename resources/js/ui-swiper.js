var swiper = new Swiper(".slide-intro", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // autoplay: true,
  pagination: {
    el: ".slide-intro .swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".slide-studio", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".slide-studio .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
var swiper = new Swiper(".hot-lst__text", {
  loop: true,
  spaceBetween: 30,
  effect: "fade",
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".hot-lst", {
  loop: true,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});