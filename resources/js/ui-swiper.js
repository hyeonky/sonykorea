// sonykorea swiper 적용
var swiper = new Swiper('.latest-lst', {
  slidesPerView: 'auto', // 슬라이드 크기를 자동으로 조정
  spaceBetween: 30, // 슬라이드 간격
  loop: true, // 무한 루프
  centeredSlides: true, // 활성 슬라이드를 중앙에 위치
  allowTouchMove: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// 슬라이드 상태 변경 시 active 클래스 관리
swiper.on('slideChangeTransitionEnd', function () {
  document.querySelectorAll('.swiper-slide').forEach((slide) => {
    slide.classList.remove('active') // 모든 슬라이드에서 active 제거
  })

  // 현재 활성화된 슬라이드에 active 클래스 추가
  const activeSlide = document.querySelector('.swiper-slide.swiper-slide-active')
  if (activeSlide) {
    activeSlide.classList.add('active')
  }
})

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
})

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
})

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
})

function syncSwipers() {
  var index = swiper.realIndex
  swiper2.slideTo(index)
  swiperBackground.slideTo(index)
}

// slideChange 이벤트에서 동기화 호출
swiper.on('slideChange', syncSwipers)
swiper2.on('slideChange', syncSwipers)
swiperBackground.on('slideChange', syncSwipers)
