// .all-menu 를 클릭했을 때
// #nav-all 에게 .active 클래스를 추가한다.
$('.all-menu').click(function () {
  $('#nav-all').addClass('active')
})

// #nav-all .close 를 클릭했을 때
// #nav-all 에게 .active 클래스를 제거한다.
$('#nav-all .close').click(function () {
  $('#nav-all').removeClass('active')
})

$('#gnb').mouseenter(function () {
  $('#header').addClass('active')
})

$('#gnb').mouseleave(function () {
  $('#header').removeClass('active')
})

$('.lang__btn').click(function () {
  $('.lang__lst').show()
})

$('.lang__lst li').click(function () {
  $('.lang__lst').hide()
})

// sidebar
window.addEventListener('scroll', () => {
  const scrollAmount = window.scrollY
  const logoContainer = document.querySelector('.sidebar-wrapper')

  logoContainer.style.transform = `translateY(${scrollAmount * 0.08}px)`
})

// parallax
gsap.registerPlugin(ScrollTrigger)

gsap.to('.filled-text, .outline-text', {
  scrollTrigger: {
    trigger: '.filled-text, .outline-text',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1,
  },
  x: 100,
})

gsap.to('.image', {
  scrollTrigger: {
    trigger: '.image',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1,
    markers: true,
  },
  x: -550,
})

// ago
// gsap.to('.cont-parallax', {
//   x: () => `-${document.querySelector('.cont-parallax').offsetWidth - window.innerWidth}px`,
//   ease: 'none',
//   scrollTrigger: {
//     trigger: '.cont-parallax__wrapper',
//     start: 'center center',
//     end: () => `+=${document.querySelector('.cont-parallax__wrapper').offsetWidth - window.innerWidth}`,
//     scrub: 0.3,
//     pin: true,
//     anticipatePin: 1,
//   },
// })

// const layers = document.querySelectorAll('.layer')

// gsap.to('.layer', {
//   x: -600,
//   ease: 'none',
//   scrollTrigger: {
//     trigger: '.cont-parallax',
//     start: 'top 50%',
//     end: `+=800`,
//     scrub: 0.3,
//     markers: true,
//   },
// })

// gsap.utils.toArray('.item').forEach((item) => {
//   let color = item.getAttribute('data-bgcolor')

//   ScrollTrigger.create({
//     trigger: item,
//     start: 'top 50%',
//     end: 'bottom 50%',
//     markers: true,

//     onEnter: () =>
//       gsap.to('body', {
//         backgroundColor: color,
//         duration: 1.4,
//       }),
//     onEnterBack: () =>
//       gsap.to('body', {
//         backgroundColor: color,
//         duration: 1.4,
//       }),
//   })
// })

// desktop
gsap.matchMedia().add('(min-width: 1024px)', () => {
  // Desktop 버전에만 적용
  gsap.utils.toArray('.item').forEach((item) => {
    let color = item.getAttribute('data-bgcolor')

    ScrollTrigger.create({
      trigger: item,
      start: 'top 50%',
      end: 'bottom 50%',
      onEnter: () =>
        gsap.to('body', {
          backgroundColor: color,
          duration: 1.4,
        }),
      onEnterBack: () =>
        gsap.to('body', {
          backgroundColor: color,
          duration: 1.4,
        }),
    })
  })

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill()) // 트리거 제거
  }
})
