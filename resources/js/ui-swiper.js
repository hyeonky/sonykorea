// sonykorea swiper 적용
var swiper = new Swiper('.latest-lst', {
  slidesPerView: 'auto',
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    390: {
      spaceBetween: 45,
    },
    600: {
      spaceBetween: 55,
    },
    1024: {
      spaceBetween: 60,
    },
    1280: {
      spaceBetween: 75,
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

// content swiper
var imageSwiper = new Swiper('.main-fct__img', {
  spaceBetween: 0,
  speed: 700,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    slideChangeTransitionStart: function () {
      const allSlides = document.querySelectorAll('.main-fct__img .swiper-slide p')
      allSlides.forEach((slide) => {
        slide.style.opacity = 0
        slide.style.transform = 'translateX(100px)'
      })
    },
    slideChangeTransitionEnd: function () {
      const activeSlide = document.querySelector('.main-fct__img .swiper-slide-active p')
      if (activeSlide) {
        activeSlide.style.opacity = 1
        activeSlide.style.transform = 'translateX(0)' // 제자리로 이동
      }
    },
  },
})

// detail
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.detail-product', {
    loop: true,
    effect: 'fade',
    speed: 500,
    allowTouchMove: false,
  })

  const productButtons = document.querySelectorAll('.product-btn')
  const productImages = document.querySelectorAll('.product-img')

  productButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      swiper.slideToLoop(index)

      productButtons.forEach((btn) => btn.classList.remove('active'))
      productImages.forEach((img) => img.classList.remove('active'))
      button.classList.add('active')
      productImages[index].classList.add('active')
    })
  })

  productButtons[0].classList.add('active')
  productImages[0].classList.add('active')
})

// perpect-text
var swiper = new Swiper('.perpect_text', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
