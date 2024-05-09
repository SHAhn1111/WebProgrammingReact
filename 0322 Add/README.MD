# 웹 프로그래밍 응용 Chapter 2 정리

---

## **React 개요**

---

- **정의**: 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리로, Facebook에 의해 2013년에 개발되었습니다. 가상 DOM과 JSX를 사용하여 Single Page Applications(SPA) 개발에 적합합니다 .

## **React의 장점**

---

1. 이해하기 쉬운 개발 워크플로우
2. 유연성과 호환성
3. 컴포넌트의 재사용 용이성
4. Virtual DOM을 통한 성능 향상
5. 강력한 상태 관리 (Flux와 Redux 지원)
6. 다양한 개발 툴과 풍부한 커뮤니티 지원 .

## **렌더링 과정**

---

- **파싱**: 브라우저가 HTML을 읽고 DOM 트리를 구성합니다.
- **스타일 처리**: CSSOM 트리를 구성하고 DOM 트리와 결합하여 렌더 트리를 형성합니다.
- **레이아웃**: 각 요소의 위치와 크기를 계산합니다.
- **페인트**: 요소를 화면의 픽셀로 변환합니다.
- **합성**: 여러 레이어를 합쳐 최종 이미지를 생성합니다 .

## **Virtual DOM**

---

- **목적**: DOM의 변경 사항을 효율적으로 처리하여, 필요한 부분만을 업데이트합니다. 이는 성능을 크게 향상시키며, 개발 과정을 단순화합니다 .

## **개발 환경**

---

- **필수 도구**: Node.js, npm 등과 React 관련 VS Code 확장 프로그램 .
- **패키지 매니저**: npm, Yarn 등을 사용하여 라이브러리 관리 .

## Babel

---

### JavaScript에 컴파일러가 필요한 이유

모든 브라우저가 최신 문법, 기술(ES6) 을 지원하지 않기 때문에 구 기능(ES5)으로 변환하는 작업이 필요

![Untitled](https://github.com/SHAhn1111/WebProgrammingReact/assets/144648041/f32585ba-8b19-44a9-ac86-2ec1b2281ea7)

## **폴더 구조**

---

- **node_modules**: 설치된 라이브러리 저장
- **public**: 정적 파일 저장소
- **src**: React 컴포넌트 및 JavaScript 파일 저장
- **.gitignore**: 버전 관리에서 제외할 파일 목록 .
    
    ![Untitled 1](https://github.com/SHAhn1111/WebProgrammingReact/assets/144648041/27cedb5d-27cb-4125-89a8-220c8a1a56ad)

    

## **개발 및 프로덕션 모드**

---

- **개발 모드**: 개발 중에 적용되며, 더 많은 디버깅 정보를 제공합니다.
- **프로덕션 모드**: 배포 시 최적화되어 사용자에게 제공됩니다 .

## Deploy

---

1. **`package.json`** 편집
2.  “homepage”: “.”, 추가
    
    ![Untitled 2](https://github.com/SHAhn1111/WebProgrammingReact/assets/144648041/22361aff-2d99-4088-b014-8d3d6bfb015f)

    
3. **`npm run build`** 실행
4. [npm install -g serve]5.
5. serve -s build 
6. build 폴더 사용

## Index.html, index.js, App.js

---

- App.js 에서는 실제로 사용자에게 보여줄 화면을 정의한다.
- index.js 에서는 'root' 에 App.js 를 렌더링 시킨다.
- index.html 에는 'root' 라는 div가 하나 있다.
