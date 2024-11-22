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

gsap.to('.cont-parallax', {
  x: () => `-${document.querySelector('.cont-parallax').offsetWidth - window.innerWidth}px`,
  ease: 'none',
  scrollTrigger: {
    trigger: '.cont-parallax__wrapper',
    start: 'center center',
    end: () => `+=${document.querySelector('.cont-parallax__wrapper').offsetWidth - window.innerWidth}`,
    scrub: 0.3,
    pin: true,
    anticipatePin: 1,
  },
})

const layers = document.querySelectorAll('.layer')

gsap.to('.layer', {
  x: -600,
  ease: 'none',
  scrollTrigger: {
    trigger: '.cont-parallax',
    start: 'top 50%',
    end: `+=800`,
    scrub: 0.3,
    markers: true,
  },
})
