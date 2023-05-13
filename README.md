# 프론트엔드 개발자 포트폴리오 | 김다윤
![Honeycam 2023-05-13 01-11-07-min](https://github.com/many-yun/my-portfolio/assets/92010078/0e328f6a-7c45-4d65-8210-67aa91d7245f)

> React 라이브러리를 사용하여 제작한 포트폴리오 사이트입니다. <br/>
> 소개글, 프로젝트 모음, 연락처로 구성되어있으며 pc에서 실행 가능합니다. (모바일 예정) <br/>
> 페이지마다 애니메이션 효과를 넣어 독특하고 재미있는 효과를 더하려 했습니다.
 <br/>
 <b>배포 주소 : https://many-yun.github.io/my-portfolio/</b>
 <br/>
 <br/>

## 기술 스택
<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
</div>
<br>

## 설치 및 실행
```
& git clone https://github.com/many-yun/my-portfolio.git
& npm i
& npm start
```
 <br/>


## 폴더 구조
```
├─ public
└─ src
    ├─ asstes
    ├─ components
    │   ├─ portfolio
    │   │    ├─ Design.jsx
    │   │    ├─ JsReact.jsx
    │   │    └─ Publishing.jsx
    │   ├─ GithubLink.jsx
    │   ├─ HambergerMenu.jsx
    │   ├─ PageTitle.jsx
    │   └─ ScrollInfo.jsx
    ├─ pages
    │   ├─ AboutMe.jsx
    │   ├─ Contect.jsx
    │   ├─ Portfolio.jsx
    │   └─ Main.jsx
    ├─ styles
    │   └─ reset.js
    ├─ utils
    │   └─ theme.js
    ├─ App.js
    └─ index.js
```
 <br/>

## Figma
https://www.figma.com/file/rcT8sBg0H8d1Rv0Cvx5YNd/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?type=design&node-id=0-1&t=KalfqSLyZSmPJ1AS-0
 <br/>
 <br/>

## 어려웠던 점..
- Router를 사용하니 배포 후 새로고침&뒤로가기 시 404 에러. 해결법 : browser router, 404.html 사용 <br/>
출처 : https://hell-of-company-builder.tistory.com/m/275

- Link or useNavigate 사용하여 링크 넘어갈 시 props 넘기기 https://rrecoder.tistory.com/101

