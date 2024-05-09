# 0419 수업 내용 정리

---

## React 훅(Hook) 상세 요약

## 훅(Hook)의 등장 배경
- 함수형 컴포넌트의 한계를 극복하고, 클래스 컴포넌트의 복잡성을 줄이기 위해 도입된 기능입니다.
- 함수형 컴포넌트에서도 상태 관리와 생명주기 기능을 사용할 수 있게 해줍니다.

## React Hook의 주요 기능
- `useState`, `useEffect` 등의 훅을 통해 클래스 컴포넌트에서만 가능했던 다양한 기능을 사용할 수 있습니다.

## useState 훅 사용 예
```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}
```

## useEffect 훅의 기본 사용법
- 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있습니다.
```javascript
import { useEffect } from 'react';

function Example() {
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);

  return <div>Hello, React!</div>;
}
```

## 훅 사용시 준수해야 할 규칙
- 최상위 레벨에서만 Hook을 호출해야 하며, 반복문, 조건문, 중첩된 함수 내에서 Hook을 실행하면 안 됩니다.
- React 함수 컴포넌트 내에서만 Hook을 호출할 수 있습니다.
