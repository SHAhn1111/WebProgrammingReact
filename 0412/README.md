# Report 0412 & 수업 정리

---

Report : 

1.웹사이트를 5개 이상의 컴포넌트로 구성하세요.

2개 이상의 props를 전달하는 컴포넌트를 하나 이상 포함하세요.

2개 이상의 state를 가진 컴포넌트를 하나 이상 포함하세요.

1개 이상의 props와 1개 이상의 state를 가진 컴포넌트를 하나 이상 포함하세요

2. 회원가입 페이지 만들기

## 1. 0405의 웹사이트에서 추가함

[React App (shahn1111.github.io)](https://shahn1111.github.io/WebProgrammingReact/0412/build/)

![0412과제](https://github.com/SHAhn1111/WebProgrammingReact/assets/144648041/f72ec324-9143-4f8b-a2ea-a9ab24d20983)

- **BlogPost** 컴포넌트를 수정하여 각 게시글의 상세보기 상태와 좋아요 수를 관리하는 상태를 추가
- **State**: 각 게시글에 대해 **`isExpanded`**와 **`likesCount`**라는 두 상태를 추가              **`isExpanded`**는 게시글의 상세 설명을 보여줄지 말지 결정하는 토글 기능을, **`likesCount`**는 사용자가 게시글에 좋아요를 눌렀을 때 카운트를 증가시키는 기능
- **Toggle Expand**: 사용자가 'More' 또는 'Less' 버튼을 클릭할 때 **`isExpanded`** 상태를 토글하여 전체 요약 내용을 보여주거나 숨김
- **Increment Likes**: 'Like' 버튼을 클릭할 때마다 **`likesCount`** 상태를 업데이트하여 좋아요 수를 표시
- **Props**: **`title`**, **`summary`**, **`author`** — 이 세 가지 props를 부모 컴포넌트로부터 받음. 이들은 각각 게시글의 제목, 요약 내용, 저자 정보를 표시하는 데 사용.

```jsx
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function BlogPost({ title, summary, author }) {
  const [isExpanded, setIsExpanded] = useState(false); // 게시글 확장 상태
  const [likesCount, setLikesCount] = useState(0); // 좋아요 카운트

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const incrementLikes = () => {
    setLikesCount(likesCount + 1);
  };

  return (
    <Card style={{ width: '18rem', marginBottom: '1rem', display: 'inline-block' }}>
      <Card.Img variant="top" src="./식단.jpg" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {isExpanded ? summary : `${summary.substring(0, 15)}...`}
        </Card.Text>
        <Button variant="primary" onClick={toggleExpand}>
          {isExpanded ? 'Less' : 'More'}
        </Button>
        <Button variant="secondary" onClick={incrementLikes}>
          Like ({likesCount})
        </Button>
      </Card.Body>
      <Card.Footer>
        Written by {author}
      </Card.Footer>
    </Card>
  );
}

export default BlogPost;

```

## 2. 회원가입페이지 만들기

[React App (shahn1111.github.io)](https://shahn1111.github.io/WebProgrammingReact/0412/build/)

- 자바스크립트의 정규식을 이용해 비밀번호 유효성 검사도 구현함

![0419과제](https://github.com/SHAhn1111/WebProgrammingReact/assets/144648041/a13c5a77-e039-47e8-8430-4f2ff3685653)

```jsx
import React, { useState } from 'react';
import './Signup.css';

function Signup() {
    // Define state for each input field
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setPasswordConfirmation] = useState("");

    // 오류 메세지
    const [error, setError] = useState('');
    //const [emailMessage, setEmailMessage] = useState<String>('');
    const [passwordMessage, setPasswordMessage] = useState("");
    const [passwordConfirmationMessage, setPasswordConfirmationMessage] = useState("");

   // 유효성 검사
    //const [isEmail, setIsEmail] = useState<boolean>(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordConfirmation, setIsPasswordConfirmation] = useState(false);

    const onChangePw = (e) => {
      const currentPassword = e.target.value;
      setPassword(currentPassword);
      const passwordRegExp =
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/;
        if(!passwordRegExp.test(currentPassword)){
          setPasswordMessage(
            "숫자+영문자+특수문자 조합으로 8자 이상으로 입력해주세요"
          );
          setIsPassword(false);
        }else{
          setPasswordMessage("안전한 비밀번호 입니다.");
          setIsPassword(true);
        }

    };
    const onChangePaswwordConfirmation = (e) => {
      const currentPasswordConfirmation = e.target.value;
      setPasswordConfirmation(currentPasswordConfirmation);
      if(password !== currentPasswordConfirmation){
        setPasswordConfirmationMessage("비밀번호가 같지 않습니다.");
        setIsPasswordConfirmation(false);
      }else{
        setPasswordConfirmationMessage("비밀번호가 같습니다.");
        setIsPasswordConfirmation(true);
      }
    };

  return (
    <div className="registration-form">
      <div className='header-register'>
        <span className="back-arrow">
        </span>
        <h2>Register</h2>
      </div>
      <form >
        <div className="email_i">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ex@naver.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="user_i">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="password_i">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={onChangePw}
          />
          <p className={`message ${isPassword ? 'success-message' : 'error-message'}`}>
          {passwordMessage}
          </p>

        </div>
        <div className="confirm_p">
          <label htmlFor="confirm-password">Password confirmation</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
            value={confirmPassword}
            onChange={onChangePaswwordConfirmation}
          />
          <p className={`message ${isPasswordConfirmation ? 'success-message' : 'error-message'}`}>
            {passwordConfirmationMessage}
          </p>
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Signup;

```

---

# 수업정리

---
## 컴포넌트 상태 (State)

### State 정의
- **State**는 리액트 컴포넌트의 상태를 관리하는 데이터로, 변화에 따라 컴포넌트가 재렌더링 됩니다.
- 변수와 달리, State의 변경은 화면을 자동으로 갱신하게 만듭니다.

### State 사용법
- 클래스 컴포넌트에서는 `this.state`를 사용하여 초기 상태를 설정하고, `this.setState()`로 상태를 갱신합니다.
- 함수형 컴포넌트에서는 `useState` 훅을 사용하여 상태를 관리합니다.

```javascript
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}
```

## 이벤트 처리

### 이벤트 핸들링
- 리액트에서 이벤트는 카멜 케이스(camelCase)로 작성하며, 함수를 이벤트 핸들러로 전달합니다.
- 예를 들어, 클릭 이벤트는 `onClick`으로 처리하며, 함수를 직접 바인딩 할 수 있습니다.

```javascript
<button onClick={handleClick}>클릭</button>
```

## 컴포넌트 생명주기 (Lifecycle)

### 주요 생명주기 메서드
1. **Mounting** - 컴포넌트가 DOM에 삽입되는 단계
2. **Updating** - props 또는 state의 변경으로 컴포넌트가 갱신되는 단계
3. **Unmounting** - 컴포넌트가 DOM에서 제거되는 단계

```javascript
class LifecycleExample extends React.Component {
    componentDidMount() {
        console.log('컴포넌트가 마운트됨');
    }

    componentDidUpdate() {
        console.log('컴포넌트가 업데이트됨');
    }

    componentWillUnmount() {
        console.log('컴포넌트가 언마운트됨');
    }

    render() {
        return <div>Hello, World!</div>;
    }
}
```
