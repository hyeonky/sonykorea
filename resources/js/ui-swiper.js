var swiper = new Swiper('.slide-intro', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // autoplay: true,
  pagination: {
    el: '.slide-intro .swiper-pagination',
    clickable: true,
  },
});

var swiper = new Swiper('.slide-studio', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.slide-studio .swiper-pagination',
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
var swiper = new Swiper('.latest-lst', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    // clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// hor-swiper
var swiper = new Swiper('.hot-lst__text', {
  loop: false,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  spaceBetween: 30,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
  allowTouchMove: false,
  speed: 1100,
});

var swiper2 = new Swiper('.hot-lst__gallery', {
  loop: false,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  spaceBetween: 30,
  grabCursor: true,
  allowTouchMove: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
    speed: 2000,
  },
});

var swiperBackground = new Swiper('.hot-lst__circle', {
  slidesPerView: 'auto',
  spaceBetween: 360,
  loop: false,
  loopAdditionalSlides: 1,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  allowTouchMove: false,
  speed: 1100, // 다른 슬라이드와 동일한 속도로 설정
});

function syncSwipers() {
  var index = swiper.realIndex;
  swiper2.slideTo(index);
  swiperBackground.slideTo(index);
}

// slideChange 이벤트에서 동기화 호출
swiper.on('slideChange', syncSwipers);
swiper2.on('slideChange', syncSwipers);
swiperBackground.on('slideChange', syncSwipers);
