# Report 0405 & 수업 정리

---
Report : 웹 사이트를 5개 이상의 컴포넌트로 구성하고, 2개 이상의 props를 전달하는 컴포넌트를 하나 이상 포함하기
[수업정리](https://github.com/SHAhn1111/WebProgrammingReact/tree/main/0405#%EC%88%98%EC%97%85-%EC%A0%95%EB%A6%AC)
[React App (shahn1111.github.io)](https://shahn1111.github.io/WebProgrammingReact/0405/build/)


![과제과제](https://github.com/SHAhn1111/WebProgrammingReact/assets/144648041/fc8b43ef-d661-46b9-9f6b-af6f73b3ef46)

- 블로그 포스트를 표시하는 **`BlogPost`** 컴포넌트를 포함하며, 이 컴포넌트는 **`title`**, **`summary`**, **`author`**라는 세 개의 props를 **`PostList`**컴포넌트에게 전달받습니다. 전체 애플리케이션 구조는 **`App`** 컴포넌트가 중심이 되어 다른 모든 컴포넌트를 통합하며, **`PostList`**는 여러 **`BlogPost`** 컴포넌트를 렌더링하는 데 사용됩니다.

```jsx
import React from 'react';
import Navigation from './components/Navigation';
import PostList from './components/PostList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="content">
        <PostList />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;

```

```jsx
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Sidebar() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen style={{}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>18살 트럼프 막내아들, 정치무대 등장 예고</Accordion.Header>
        <Accordion.Body>
        도널드 트럼프 전 미국 대통령의 막내아들인 배런 트럼프(18)가 오는 7월 정치 무대에 처음 모습을 드러낸다고 워싱턴포스트(WP) 등 미국 매체들이 9일(현지시각) 전했습니다.<br></br>
        <br></br>
배런 트럼프는 7월 15∼18일 위스콘신주 밀워키에서 대선 후보 공식 지명을 위해 열리는 공화당 전당대회에 플로리다주를 대표하는 대의원(총 41명)의 일원으로 참석할 예정입니다.<br></br>
<br></br>
아직 공화당 대선 경선은 끝나지 않았지만 트럼프 전 대통령은 이미 지난 3월 후보 자리 확보에 필요한 과반 대의원을 확보했습니다.<br></br>
<br></br>
트럼프 전 대통령과 그의 현 부인인 멜라니아 트럼프 여사 사이에서 태어난 배런은 부친이 2017년 대통령 임기를 시작했을 때 10살이었습니다.<br></br>
<br></br>
그동안 부친의 정치 일정에 모습을 드러내지 않았기에 이번 전당대회 참석이 정치 무대 데뷔전이 되는 셈입니다.<br></br>
<br></br>
배런의 이복형인 도널드 트럼프 주니어와 에릭 트럼프, 이복 누나인 티파니 트럼프도 플로리다주 대의원 명단에 이름을 올렸습니다.<br></br>
<br></br>
트럼프 전 대통령 집권 1기 때 부친을 도와 가장 왕성한 공개 활동을 했던 장녀 이방카 트럼프는 대의원 명단에서 빠졌습니다.<br></br>
<br></br>출처 : SBS 뉴스<a href='https://news.sbs.co.kr/news/endPage.do?news_id=N1007642017&plink=COPYPASTE&cooper=SBSNEWSEND'> 원본 링크 </a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><a href='https://news.sbs.co.kr/news/endPage.do?news_id=N1007642010&plink=COPYPASTE&cooper=SBSNEWSEND'>송파구 다세대주택서 화재…주민 4명 연기흡입</a>
        </Accordion.Header>
        <Accordion.Body>
        앵커:<br></br>
        <br></br>
얼마 전 중국 회사가 만든 전기차가, 화물차와 부딪혀서 불이 났는데 차 문이 열리지 않아서, 차에 타고 있던 3명이 숨졌습니다. 사고 이후, 12일 만에 전기차 회사가 해명을 내놨는데, 그게 오히려 논란을 더 키우고 있습니다.
<br></br><br></br>
자세한 내용, 베이징에서 정영태 특파원이 전해왔습니다.<br></br>
<br></br>
기자:<br></br>
<br></br>
중국 전기차 브랜드 아이토의 신형 SUV M7이 고속도로에서 트럭과 충돌한 뒤 불이 났습니다.<br></br>
<br></br>
탑승자를 구하려 하지만 차 문이 열리지 않자, 고속도로 관리원은 소화기로, 지나던 시민은 손으로 뒷문 유리창을 깹니다.<br></br>
<br></br>
[현장 구조 나선 시민 : 창문을 깨야 했어요. 차 문의 매립형 손잡이가 밖으로 안 나왔거든요. 차 안의 3명은 이미 기절한 상황이었나요? 네, 맞아요.]<br></br>
<br></br>
하지만 불길이 순식간에 차량 전체로 번졌고 차에 탔던 일가족 3명은 모두 숨졌습니다.<br></br>
<br></br>
[현장 구조 나선 시민 : 만약 1분만 더 빨랐다면 모두 구할 수 있었을 텐데, 정말 안타까워요. 방법이 없었어요.]<br></br>
<br></br>
충돌 시 자동 해제돼야 하는 차 문 잠금장치가 풀리지 않은 게 결함 아니냐는 의혹이 거세게 일었습니다.<br></br>
<br></br>
제조사가 사고 발생 12일 만에 입장을 내놨습니다.<br></br>
<br></br>
충돌 당시 트럭 후미 철제 구조물이 앞좌석까지 침범했고, 전력선이 순간 차단되면서 충돌 신호가 전달 안 된 게 차 문이 열리지 않은 원인이라고 해명했습니다.<br></br>
<br></br>
이런 해명은 오히려 논란에 불을 지폈습니다.<br></br>
<br></br>
충돌 시 전력이 끊기면 즉각 잠금장치가 풀리게 설계하거나, 다른 보조 장치가 있어야 한다는 겁니다.<br></br>
<br></br>
또 시속 150km까지 자동 긴급 제동이 가능한 화웨이의 지능형시스템을 광고했지만, 다른 실상도 도마에 올랐습니다.<br></br>
<br></br>
사고 당시 속도가 시속 115km였는데, 해당 차량은 사양이 낮아 시속 85km까지만 작동하는 다른 제품이 탑재됐다는 겁니다.<br></br>
<br></br>
화웨이 공동 설계만 믿은 구매자들을 기만했다는 비판이 터져 나오고 있습니다.<br></br>
<br></br>
이번 사고를 계기로, 전기차 안전 우려가 커지면서 엄격한 기준 마련이 시급하다는 목소리가 높습니다.<br></br>
<br></br>
(영상취재 : 양아타, 영상편집 : 박춘배, 영상출처 : 웨이보 더우인)<br></br>
<br></br>
출처 : SBS 뉴스 <a href='https://news.sbs.co.kr/news/endPage.do?news_id=N1007638584&plink=NEXTPLAY&cooper=SBSNEWSEND&plink=COPYPASTE&cooper=SBSNEWSEND'>원본 링크</a>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Sidebar;

```

```jsx
import React from 'react';
import BlogPost from './BlogPost';
import Stack from 'react-bootstrap/Stack'

function PostList() {
  const posts = [
    { id: 1, title: '오늘의 일기', summary: '오늘의 하루를 적는 일기장입니다.', author: '안소현' },
    { id: 2, title: '식단표', summary: '하루동안 무엇을 먹었는지 적는 곳입니다.', author: '안소현' }
  ];

  return (

      <div className="p-2">
          {posts.map(post => (
            <BlogPost key={post.id} title={post.title} summary={post.summary} author={post.author} />
          ))}
      </div>

  );
}

export default PostList;

```

```jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="목록" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">일상글</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                정보글
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                질문게시판
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

```

```jsx
import React from 'react';

function Footer() {
  return (
    <footer>
      <p>ⓒ 2024 Blog App 안소현. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

```

```jsx
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack'
function BlogPost({ title, summary, author }) {
  return (
  <Stack direction="horizontal" gap={3}>  
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {summary}
        </Card.Text>
        <Button variant="primary">{author}</Button>
      </Card.Body>
    </Card>
  </Stack>
  );
}

export default BlogPost;
```
#수업 정리
---

## React 컴포넌트

### 컴포넌트의 기본 개념
- **정의**: 컴포넌트는 HTML 요소를 반환하는 함수와 같습니다. 입력(props)을 받고 React 엘리먼트를 출력으로 반환합니다.
- **특성**:
  - 컴포넌트는 여러 번 재사용할 수 있습니다.
  - 하나의 컴포넌트는 여러 작은 컴포넌트로 구성될 수 있습니다.
  - React 애플리케이션은 일반적으로 컴포넌트 아키텍처를 사용하여 구축됩니다.

### 컴포넌트의 유형
- **함수형 컴포넌트**:
  ```javascript
  function Welcome(props) {
    return <h1>안녕, {props.name}</h1>;
  }
  ```
- **클래스 컴포넌트**:
  ```javascript
  class Welcome extends React.Component {
    render() {
      return <h1>안녕, {this.props.name}</h1>;
    }
  }
  ```

### 컴포넌트 생성하기
- 컴포넌트는 대문자로 시작하는 이름을 사용하여 일반 HTML 태그와 구분합니다.
- React에서 간단한 컴포넌트 구조를 생성하는 예:
  ```javascript
  function App() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  ```

## Props (속성)
Props는 React에서 컴포넌트가 서로 대화하는 방법입니다. 읽기 전용이며 부모 컴포넌트에서 자식 컴포넌트로 전달됩니다.

### Props 사용하기
- **Props 전달 및 접근 방법**:
  ```javascript
  function Greeting(props) {
    return <h1>안녕, {props.name}!</h1>;
  }
  ```
- **기본 Props 및 Prop Types**:
  - Props가 제공되지 않은 경우 기본 props를 설정합니다.
  - `PropTypes`를 사용하여 props의 유형을 정의합니다.

### Props 예제
- 여러 props 전달하기:
  ```javascript
  <Component name="React" version="17.0" />
  ```
- 함수형 컴포넌트에서 props 접근 방법:
  ```javascript
  function Component(props) {
    return <h1>{props.name}은(는) React 버전 {props.version}을 사용합니다.</h1>;
  }
  ```

## 고급 컴포넌트 사용법
- **컴포넌트 구성**:
  - 컴포넌트는 서로 중첩될 수 있습니다.
  - 예시:
    ```javascript
    function App() {
      return (
        <Main>
          <Header />
          <Content />
        </Main>
      );
    }
    ```
- **이벤트 처리**:
  - React 컴포넌트는 클릭, 타이핑 등의 이벤트를 처리할 수 있습니다.
  - 예시:
    ```javascript
    function Button(props) {
      return <button onClick={props.handleClick}>클릭하세요</button>;
    }
    ```
