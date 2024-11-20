// .all-menu 를 클릭했을 때
// #nav-all 에게 .active 클래스를 추가한다.
$('.all-menu').click(function () {
  $('#nav-all').addClass('active');
});

// #nav-all .close 를 클릭했을 때
// #nav-all 에게 .active 클래스를 제거한다.
$('#nav-all .close').click(function () {
  $('#nav-all').removeClass('active');
});

$('#gnb').mouseenter(function () {
  $('#header').addClass('active');
});

$('#gnb').mouseleave(function () {
  $('#header').removeClass('active');
});

$('.lang__btn').click(function () {
  $('.lang__lst').show();
});

$('.lang__lst li').click(function () {
  $('.lang__lst').hide();
});

// sidebar
window.addEventListener('scroll', () => {
  const scrollAmount = window.scrollY;
  const logoContainer = document.querySelector('.sidebar-wrapper');

  logoContainer.style.transform = `translateY(${scrollAmount * 0.08}px)`;
});

// parallax
gsap.registerPlugin(ScrollTrigger);

// 전체 섹션의 가로 스크롤 구현
gsap.to('.cont-parallax', {
  x: () => `-${document.querySelector('.cont-parallax').offsetWidth - window.innerWidth}px`,
  ease: 'none',
  scrollTrigger: {
    trigger: '.cont-parallax__wrapper',
    start: 'top top',
    end: () => `+=${document.querySelector('.cont-parallax__wrapper').offsetWidth - window.innerWidth}`,
    scrub: 1, // 스크롤에 따라 자연스럽게 움직임
    pin: true, // 고정 스크롤 효과
    anticipatePin: 1,
  },
});

// 패럴랙스 레이어 애니메이션
gsap.to('.layer1', {
  x: '-100%', // 레이어 속도 제어
  scrollTrigger: {
    trigger: '.cont-parallax__wrapper',
    scrub: 1,
  },
});

gsap.to('.layer2', {
  x: '-200%', // 레이어 속도 제어
  scrollTrigger: {
    trigger: '.cont-parallax__wrapper',
    scrub: 1,
  },
});

gsap.to('.layer3', {
  x: '-300%', // 레이어 속도 제어
  scrollTrigger: {
    trigger: '.cont-parallax__wrapper',
    scrub: 1,
  },
});

gsap.to('.layer4', {
  x: '-400%', // 레이어 속도 제어
  scrollTrigger: {
    trigger: '.cont-parallax__wrapper',
    scrub: 1,
  },
});

gsap.to('.layer5', {
  x: '-500%', // 레이어 속도 제어
  scrollTrigger: {
    trigger: '.cont-parallax__wrapper',
    scrub: 1,
  },
});
