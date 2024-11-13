gsap.registerPlugin(ScrollTrigger);

// gsap.to('.sidebar__logo', {
//   yPercent: -100, // 콘텐츠를 스크롤과 함께 아래로 이동
//   ease: 'none', // 스크롤과 부드럽게 동기화
//   scrollTrigger: {
//     trigger: '.sidebar', // 스크롤의 기준이 되는 전체 컨테이너
//     start: 'top top', // 스크롤 시작 위치
//     end: 'bottom bottom', // 스크롤 끝나는 위치
//     scrub: true, // 스크롤 위치에 따라 애니메이션 동기화
//   },
// });

gsap.to('.sidebar-wrapper', {
  scrollTrigger: {
    trigger: '.sidebar__logo', // 요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
    start: 'top top', // 애니메이션 시작시점
    end: 'bottom bottom', // 애니메이션 종료시점
    scrub: 2,
    markers: true, // 트리거 마커의 표시(boolean)
  },
  y: 500,
});
