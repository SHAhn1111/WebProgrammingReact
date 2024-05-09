# Report 0329 & 수업 정리

---

- Report
- 수업 내용 정리

## 1.HTML자기소개 페이지 만들기

[자기소개페이지_안소현 (shahn1111.github.io)](https://shahn1111.github.io/WebProgrammingReact/0329/HTML%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C%ED%8E%98%EC%9D%B4%EC%A7%80/%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C%ED%8E%98%EC%9D%B4%EC%A7%80.html)

![Untitled](https://github.com/SHAhn1111/WebProgrammingReact/assets/144648041/75c3f415-c950-49c4-beca-c56776ea622f)


```html
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>자기소개페이지_안소현</title>
    <link rel="stylesheet" href="css/style.css">
    <style>
        @media (max-width: 414px) and (max-height: 896px) {
            body {
                background-color: #EADBC8;
            }

            section {
                background-color: #F8F0E5;
            }
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <h1>안소현의 소개</h1>
        <section id="my_info">
            <h2>My info</h2>
            <img src="images/profile_images.jpg" alt="안소현의 강아지 사진">
            <table>
                <tbody>
                    <tr id="myname">
                        <th>이름</th>
                        <td>안소현</td>
                    </tr>
                    <tr>
                        <th>직업</th>
                        <td>대학생</td>
                    </tr>
                    <tr>
                        <th>나이</th>
                        <td>25</td>
                    </tr>
                    <tr>
                        <th>거주지</th>
                        <td>부산</td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section id="" about>
            <h2>About Me!</h2>
            <p>안녕하세요. 저는 2024년 4월 현재 소프트웨어학과에 재학중인 2020575031 안소현입니다.<br> 현재 개발자를 목표로 전공 공부와 영여 공부를 하고 있습니다. 학교 수업과 책,
                인터넷 강의 등을 통하여<br> 공부를 하고 있고 공부 한 내용을 깃허브에 업로드 하고 있습니다.</p>
        </section>
        <section id="contact">
            <h2>Contact</h2>
            <ul>
                <li>
                    <a href="tel:01087780000">010-8**8-****</a>
                </li>
                <li>
                    <a href="mailto:snini7355@naver.com" target="_blank">snini7355@naver.com</a>
                </li>
                <li>
                    <a href="https://github.com/SHAhn1111" target="_blank">Github</a>
                </li>
            </ul>
        </section>
        <!-- <section id="skill">
            <h2>Skills</h2>
            <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>Javascript</li>
                <li>php</li>
                <li>ruby</li>
                <li>iOS</li>
            </ol>
        </section> -->
        <!--
        <section id="project">
            <h2>Projects</h2>
            <ol>
                <li>
                    <h3>자바 과제 - 디렉토리 명 변경</h3>
                    <video src="images/2023-09-25 06-26-33.mp4" controls></video>
                    <p>자바로 디렉토리 명 변경을 가능하도록 만들었습니다.</p>
                </li>
                <li>
                    <h3>자바 과제 - 디렉토리 리스트 뽑기</h3>
                    <video src="images/2023-09-25 06-31-40.mp4" controls></video>
                    <p>프로그램 인자 값으로 디렉토리 명을 입력하면 해당 디렉토리의 모든 파일들을 리스트로 보여줍니다.<br>파일인지 디렉토리인지 구분 가능하며 서브디렉토리의 내용도 계속해서
                        보여줍니다.</p>
                </li>
            </ol>
        </section>
        -->
    </div>
</body>

</html>
```

## 2.자바스크립트로 만들기

[자기소개 페이지_안소현 (shahn1111.github.io)](https://shahn1111.github.io/WebProgrammingReact/0329/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C%ED%8E%98%EC%9D%B4%EC%A7%80/%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%B2%A8%EB%B6%80.html)

```jsx
document.addEventListener('DOMContentLoaded', function () {
    
    var body = document.body;

    
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/style.css';
    document.head.appendChild(link);

    
    var wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    body.appendChild(wrapper);

    
    var title = document.createElement('h1');
    title.textContent = '안소현의 소개';
    wrapper.appendChild(title);

    var infoSection = document.createElement('section');
    infoSection.id = 'my_info';
    wrapper.appendChild(infoSection);

    var infoTitle = document.createElement('h2');
    infoTitle.textContent = 'My Info';
    infoSection.appendChild(infoTitle);

    var img = document.createElement('img');
    img.src = 'images/profile_images.jpg';
    img.alt = '안소현의 강아지 사진';
    infoSection.appendChild(img);

    var table = document.createElement('table');
    infoSection.appendChild(table);
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

    var data = [
        { title: '이름', value: '안소현' },
        { title: '직업', value: '대학생' },
        { title: '나이', value: '25' },
        { title: '거주지', value: '부산' }
    ];

    data.forEach(function (item) {
        var row = document.createElement('tr');
        var th = document.createElement('th');
        th.textContent = item.title;
        var td = document.createElement('td');
        td.textContent = item.value;
        row.appendChild(th);
        row.appendChild(td);
        tbody.appendChild(row);
    });
    var aboutSection = document.createElement('section');
    aboutSection.id = 'about';
    wrapper.appendChild(aboutSection);

    var aboutTitle = document.createElement('h2');
    aboutTitle.textContent = 'About Me!';
    aboutSection.appendChild(aboutTitle);

    var aboutText = document.createElement('p');
    aboutText.innerHTML = '안녕하세요. 저는 2024년 4월 현재 소프트웨어학과에 재학중인 2020575031 안소현입니다.<br>현재 개발자를 목표로 전공 공부와 영어 공부를 하고 있습니다. 학교 수업과 책, 인터넷 강의 등을 통하여<br>공부를 하고 있고 공부 한 내용을 깃허브에 업로드 하고 있습니다.';
    aboutSection.appendChild(aboutText);
    
    var contactSection = document.createElement('section');
    contactSection.id = 'contact';
    wrapper.appendChild(contactSection);

    var contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact';
    contactSection.appendChild(contactTitle);

    var ul = document.createElement('ul');
    contactSection.appendChild(ul);

    var contacts = [
        { type: 'tel', value: '010-8778-0000', display: '010-8**8-****', protocol: 'tel:' },
        { type: 'email', value: 'snini7355@naver.com', display: 'snini7355@naver.com', protocol: 'mailto:' },
        { type: 'link', value: 'https://github.com/SHAhn1111', display: 'Github', protocol: '' }
    ];

    contacts.forEach(function (contact) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = `${contact.protocol}${contact.value}`;
        a.textContent = contact.display;
        if (contact.type === 'link') a.target = '_blank';
        li.appendChild(a);
        ul.appendChild(li);
    });
});
```

## 3.JSX로 만들기

[React App (shahn1111.github.io)](https://shahn1111.github.io/WebProgrammingReact/0329/build/)

```jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <h1>안소현의 소개</h1>
      <section id="my_info">
        <h2>My Info</h2>
        <img src="./profile_images.jpg" alt="안소현의 강아지 사진" />
        <table>
          <tbody>
            <tr>
              <th>이름</th>
              <td>안소현</td>
            </tr>
            <tr>
              <th>직업</th>
              <td>대학생</td>
            </tr>
            <tr>
              <th>나이</th>
              <td>25</td>
            </tr>
            <tr>
              <th>거주지</th>
              <td>부산</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="about">
        <h2>About Me!</h2>
        <p>
          안녕하세요. 저는 2024년 4월 현재 소프트웨어학과에 재학중인 안소현입니다.
          현재 개발자를 목표로 전공 공부와 영어 공부를 하고 있습니다. 학교 수업과 책, 인터넷 강의 등을 통하여
          공부를 하고 있고 공부 한 내용을 깃허브에 업로드 하고 있습니다.
        </p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <ul>
          <li><a href="tel:01087780000">010-8**8-****</a></li>
          <li><a href="mailto:snini7355@naver.com">snini7355@naver.com</a></li>
          <li><a href="https://github.com/SHAhn1111" target="_blank">Github</a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
```
## 4.SPA기획

플래너 페이지 한 눈에 지금 해야 할 일을 볼 수 있으며 뽀모도로 타이머를 추가하고 데일리루틴을 기록하게 함

(https://www.figma.com/file/mv3Oye0CpRWwSVwSK2uL7K/Untitled?type=design&node-id=0%3A1&mode=design&t=k9CCrK1l6fGfKJHG-1)

![image](https://github.com/SHAhn1111/WebProgrammingReact/assets/144648041/95559eb2-1191-40fa-b7f3-b15a820d01ec)


# 수업 내용 간단 정리

## JSX 소개

JSX는 JavaScript XML의 약자로, XML과 유사한 구문을 사용하여 DOM 트리를 생성할 수 있는 JavaScript의 확장입니다. 주로 React 프로젝트 개발에 사용되며, 브라우저에서 실행 전에 Babel을 사용하여 일반 JavaScript 코드 형태로 변환됩니다.

## JavaScript 라이브러리

### Frontend 라이브러리

프론트엔드 라이브러리는 동적으로 HTML 엘리먼트를 생성하고 DOM에 추가하는 방식으로 작동합니다. SPA(Single Page Application) 같은 현대적인 웹 애플리케이션을 개발할 때 주로 사용됩니다.

### React Raw API

React는 웹 브라우저와 네이티브 플랫폼에서 동작하도록 설계된 라이브러리로, `React.createElement()`와 `ReactDOM.render()` 메서드를 사용하여 HTML 태그를 직접 생성하고 DOM에 추가할 수 있습니다.

## JSX 작성 및 사용법

### 기본 규칙

1. **하나의 부모 요소**: 모든 JSX 코드는 단일 부모 요소 안에 포함되어야 합니다.
2. **JavaScript 표현식**: `{}`를 사용하여 JSX 내부에 JavaScript 표현식을 삽입할 수 있습니다.
3. **스타일과 속성**: CSS 스타일은 객체 형태로 JSX에 적용되며, 속성은 camelCase를 사용하여 지정합니다.
