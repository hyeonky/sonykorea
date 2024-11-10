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
  loop: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  grabCursor: true,
  allowTouchMove: true,
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
    speed:1000,
  },
});

var swiperBackground = new Swiper(".hot-lst__circle", {
  slidesPerView: "auto",
  spaceBetween: 350,
  loop: true, // 루프 설정
  loopAdditionalSlides: 1, // 루프 시 미리보기를 위한 추가 슬라이드 설정
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  allowTouchMove: false, // 터치 이동 비활성화
  speed: 1000, // 슬라이드 속도
});


function syncSwipers() {
  // 모든 swiper 인스턴스가 현재 슬라이드의 realIndex로 동기화
  var index = swiper.realIndex;
  swiper2.slideTo(index);
  swiperBackground.slideTo(index);

  // autoplay 재시작
  swiper.autoplay.start();
  swiper2.autoplay.start();
  swiperBackground.autoplay.start();
}

// transitionEnd 이벤트에서 동기화 호출
swiper.on("transitionEnd", syncSwipers);
swiper2.on("transitionEnd", syncSwipers);
swiperBackground.on("transitionEnd", syncSwipers);

