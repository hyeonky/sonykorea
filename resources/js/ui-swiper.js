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

// 2번째
var swiper = new Swiper('.hot-lst__text', {
  loop: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
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
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  spaceBetween: 10, // 슬라이드 간 간격
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
  spaceBetween: 350,
  loop: true,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
  speed: 1200,
});

function syncSwipers() {
  var index = swiper.realIndex;

  // 모든 swiper를 현재 슬라이드 index로 동기화
  swiper2.slideTo(index);
  swiperBackground.slideTo(index);
}

// slideChangeTransitionStart 이벤트로 동기화 호출
swiper.on('slideChangeTransitionStart', syncSwipers);
swiper2.on('slideChangeTransitionStart', syncSwipers);
swiperBackground.on('slideChangeTransitionStart', syncSwipers);
