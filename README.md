![header](https://capsule-render.vercel.app/api?type=venom&color=auto&height=300&section=header&text=SONYKOREA%4&fontSize=80)

# **SONY KOREA 리뉴얼 프로젝트**
- 개인 프로젝트로 진행한 SONY KOREA의 첫 번째 리뉴얼 프로젝트입니다.

------------------

## 프로젝트 소개(로고나 이미지)


## **프로젝트 개요**
> 프로젝트: 리뉴얼 프로젝트
>
> 기획 및 제작: 조현경
> 
> 분류: 개인 프로젝트
> 
> 주요 기능: 반응형 웹, open graph, custom Swiper
>
> 사용 기술: Html 5, Css 3, Javascript, Gsap, Scss, Swiper, figma 등  


## 프로젝트의 목적
- 기존 사이트와 달리 SONY와 어울리는 동적 효과와 함께 비주얼 사이트를 만들고자 함.

  
## USE SKILL
<img src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" />  <img src="https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />  <img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black" />  <img src="https://img.shields.io/badge/sass-%23CC6699.svg?&style=for-the-badge&logo=sass&logoColor=white" />  <img src="https://img.shields.io/badge/swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white"/>  <img src="https://img.shields.io/badge/figma-000000?style=for-the-badge&logo=figma&logoColor=white"/>

## 프로젝트 구조

```bash
📂 src/
├── 📂 pages/                       # 페이지 HTML 파일들
│   └── index.html                  # 메인 페이지 HTML 파일
│   └── sub_02.html                  # 서브 페이지 HTML 파일
├── 📂 resources/                   # 리소스 폴더
│   ├── 📂 css/                     # 전역 CSS 파일들
│   ├── 📂 images/                  # images 파일들
│   ├── 📂 js/                      # JavaScript 파일들
│   │   ├── 📂 component/           # 컴포넌트 관련 JS 파일 (특정한 기능을 수행하는 독립적인 UI요소)
│   │   │   └── ui-script.js        # 컴포넌트 스크립트 (버튼, 모달창, 탭 등)
│   │   ├── 📂 pattern/             # 패턴 관련 JS 파일 (반복적이거나 재사용 가능한 기능적 패턴)
│   │   │   └── ui-pattern-script.js # UI 패턴 스크립트 (스크롤 이벤트, 슬라이드 등)
│   ├── 📂 scss/                    # SCSS 파일들
│   │   ├── 📂 component/           # 컴포넌트 관련 SCSS 파일
│   │   │   ├── 📂 mixins/              # 믹스인 파일들
│   │   │   │   ├── _breakpoints.scss    # 브레이크포인트 믹스인
│   │   │   │   ├── _utils.scss         # 유틸리티 믹스인
│   │   │   ├── _include.scss       # 인클루드 스타일
│   │   │   ├── _reset.scss         # 리셋 스타일
│   │   │   └── _variables.scss     # 변수 정의
│   │   ├── 📂 pattern/             # 패턴 관련 SCSS 파일
│   │   │   ├── _p_include.scss     # 인클루드 스타일
│   │   │   ├── _p_common.scss      # 공통 패턴 스타일
│   │   │   ├── _p_content.scss     # 컨텐츠 관련 패턴 스타일
│   │   │   └── _p_layout.scss      # 레이아웃 패턴 스타일
│   │   └── styles.scss             # 전체 스타일 파일
```

## 뷰포트(Viewport) 렌더링 방식 설정

웹페이지가 화면(Viewport)에 표현되는 방식을 설정합니다.<br>
모바일 환경에서 적용됩니다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- `width=device-width`: 화면의 가로 너비를 각 디바이스(Device)의 가로 너비와 동일하게 적용
- `initial-scale=1.0`: 화면의 초기 화면 배율(확대 정도)을 설정
- `user-scalable=no`: 사용자가 디바이스 화면을 확대(`yes`)/축소(`no`)할 수 있는지 설정
- `maximum-scale=1`: 사용자가 화면을 확대할 수 있는 최댓값
- `minimum-scale=1`: 사용자가 화면을 축소할 수 있는 최솟값

## 오픈 그래프(The Open Graph protocol)

웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

Slack -

<img width="549" alt="image" src="https://github.com/eehd80/-setting/assets/10627436/17b4a0bd-4630-4483-8e82-52c0b4eafdbe">

KakaoTalk -

<img width="246" alt="image" src="https://github.com/eehd80/-setting/assets/10627436/e4eeef46-fe12-410d-bf2e-7037a1b155ae">

[더 많은 오픈 그래프 속성 보기](https://ogp.me/)

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="페이지 제목" />
<meta property="og:description" content="페이지 설명" />
<meta property="og:image" content="http://www.mysite.com/article/article1_featured_image.jpg" />
<meta property="og:url" content="http://www.mysite.com/article/article1.html" />
```

- `og:type`: 페이지의 유형(E.g, `website`, `video.movie`)
- `og:site_name`: 속한 사이트의 이름
- `og:title`: 페이지의 이름(제목)
- `og:description`: 페이지의 간단한 설명
- `og:image`: 페이지의 대표 이미지 주소(URL)
- `og:url`: 페이지 주소(URL)

## Favicon(파비콘, favorites icon)

웹페이지를 나타내는 아이콘, 웹페이지의 로고를 설정합니다.<br>
대부분의 경우 루트 경로에 `favicon.ico` 파일을 위치하면 자동으로 로딩하기 때문에 `<link />` 를 작성할 필요가 없습니다.
`favicon.png` 파일을 사용하려면 다음과 같이 `<link />`를 작성하세요.

> 파비콘 이미지는 루트 경로에 있어야 합니다!

```html
<!--<link rel="shortcut icon" href="favicon.ico" />-->
<link rel="icon" href="./favicon.png" />
```

- `favicon.ico` 64 x 64 (px) 또는 32 x 32 또는 16 x 16
- `favicon.png` 500 x 500 (px)

https://www.naver.com/favicon.ico?1



[iconifier.net](https://iconifier.net/)






# -krds-html-scss-js
# -themplates-html-scss-js
