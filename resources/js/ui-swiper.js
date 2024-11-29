// sonykorea swiper 적용
var swiper = new Swiper('.latest-lst', {
  slidesPerView: 'auto',
  loop: false,
  centeredSlides: true,
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
  breakpoints: {
    390: {
      spaceBetween: 40,
    },
    600: {
      spaceBetween: 50,
    },
    1024: {
      spaceBetween: 55,
    },
    1280: {
      spaceBetween: 70,
    },
  },
})

// 초기 로드 시 첫 번째 슬라이드에 active 추가
document.addEventListener('DOMContentLoaded', () => {
  const activeSlide = document.querySelector('.swiper-slide.swiper-slide-active')
  if (activeSlide) {
    activeSlide.classList.add('active')
    activeSlide.querySelectorAll('em, p, strong').forEach((element) => {
      element.classList.add('active')
    })
  }
})

// 슬라이드 변경 이벤트 처리
swiper.on('slideChangeTransitionEnd', function () {
  document.querySelectorAll('.swiper-slide').forEach((slide) => {
    slide.classList.remove('active')
    slide.querySelectorAll('em, p, strong').forEach((element) => {
      element.classList.remove('active')
    })
  })

  const activeSlide = document.querySelector('.swiper-slide.swiper-slide-active')
  if (activeSlide) {
    activeSlide.classList.add('active')
    activeSlide.querySelectorAll('em, p, strong').forEach((element) => {
      element.classList.add('active')
    })
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
