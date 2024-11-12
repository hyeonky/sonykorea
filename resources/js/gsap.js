gsap.registerPlugin(ScrollTrigger);

// 사이드바 애니메이션
gsap.to('.sidebar', {
  scrollTrigger: {
    trigger: '.wrapper',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
  },
  y: () => document.querySelector('.content').offsetHeight - document.querySelector('.sidebar').offsetHeight,
});
