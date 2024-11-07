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

// sonykorea swiper 적용
var swiper = new Swiper(".latest-lst", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 2번째
var swiper = new Swiper(".hot-lst__text", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  effect: "fade",
  fadeEffect: { crossFade: true },
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
  allowTouchMove: false,
  speed: 1100,
});
var swiper2 = new Swiper(".hot-lst__gallery", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
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
    speed:1500,
  },
});

var swiperBackground = new Swiper(".hot-lst__circle", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  allowTouchMove: false, // 사용자 터치 막기
  speed: 1500, // 전환 속도 설정
});
// function syncSwipers() {
//   // swiper1, swiper2, swiperBackground가 같은 인덱스로 이동하도록 설정
//   var index = swiper.realIndex;
//   swiper2.slideTo(index);
//   swiperBackground.slideTo(index);
// }

// // 각 swiper의 slideChange 이벤트에서 동기화
// swiper.on("slideChange", syncSwipers);
// swiper2.on("slideChange", syncSwipers);
// swiperBackground.on("slideChange", syncSwipers);

// // 시작 시 동기화
// syncSwipers();
swiper2.on("slideChange", function () {
  swiper.slideToLoop(swiper2.realIndex);  // 무한 루프에서도 연동되게 slideToLoop 사용
  swiperBackground.slideToLoop(swiper2.realIndex);
});
swiper.on("slideChange", function () {
  swiper2.slideToLoop(swiper.realIndex);
  swiperBackground.slideToLoop(swiper.realIndex);
});
swiperBackground.on("slideChange", function () {
  swiper.slideToLoop(swiperBackground.realIndex);
  swiper2.slideToLoop(swiperBackground.realIndex);
});