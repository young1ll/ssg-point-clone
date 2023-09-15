# ssg-point-FE

## 📌 프로젝트 소개

> 2023 Spharos Academy 3기 1차 프로젝트
> 신세계포인트 클론 코딩 프론트엔드

### Project Repositories

- [프론트엔드](https://github.com/Spharos4team/ssg-point-FE)
- [백엔드](https://github.com/Spharos4team/ssg-point-BE)

## 📌 시스템 아키텍처

![KakaoTalk_20230914_142212237](https://github.com/Spharos4team/ssg-point-FE/assets/122842139/d9ae2877-adff-43aa-ad70-fab32d8a1e45)

## 📌 개발 환경

    "next": "13.4.19"
    "react": "18.2.0"
    "tailwindcss": "3.3.3"
    "typescript": "5.2.2"

## 📌 디렉터리 구조

    ├─ ... # 환경설정 파일들
    ├─ README.md
    ├─ app # 라우팅
    │   ├─ ... # 라우팅 폴더들
    │   ├─ globals.css
    │   └─ middleware.ts # next-auth
    ├─ components # 컴포넌트 폴더
    │   ├─ atom
    │   ├─ module
    │   └─ organism
    ├─ data # json data
    ├─ provider # custom provider
    ├─ public # images for develop
    ├─ type # 미리 정의된 타입
    └─ utils # helpers

## 📌 Reference Libraries

- [ ] [styled-components](https://styled-components.com/docs/basics)
- [ ] [redux](https://redux.js.org/introduction/getting-started)
- [ ] [redux-saga](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
- [ ] [redux-toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [x] [json-server](https://github.com/typicode/json-server)
- [x] [prettier](https://prettier.io/docs/en/install.html)
- [x] [eslint](https://eslint.org/docs/user-guide/getting-started)
- [ ] [lodash](https://lodash.com/docs/4.17.15)
- [x] [Todo Tree]()
- [x] [SWR]
- [x] [html-react-parser](https://www.npmjs.com/package/html-react-parser)

## 📌 Check

### Naming Convention

- 컴포넌트는 컴포넌트 폴더 하위에 index.tsx로 생성하지 말고 파일명으로 사용
  - ~~ExampleComponent/inde.tsx~~
- Component: {컴포넌트}{위치}{범위}.tsx
  - TabBarTopMain.tsx
