# 0503 수업내용 정리

- pdf의 소스코드를 올림

## React 훅

## useReducer 훅

- `useReducer`는 React에서 컴포넌트의 상태 관리를 위해 사용하는 훅입니다.
- 복잡한 상태 로직을 관리할 때 `useState`의 대체제로 사용됩니다.
- `useReducer(reducer, initialState)` 형태로 사용되며, `reducer` 함수를 통해 상태 업데이트 로직을 실행합니다.

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

## useState 훅

- `useState`는 가장 기본적인 상태 관리 훅입니다.
- 상태와 상태를 업데이트하는 함수를 반환합니다.

```javascript
const [state, setState] = useState(initialState);
```

## useContext 훅

- `useContext`는 전역 데이터를 관리하는 Context API를 더 쉽게 사용할 수 있게 해주는 훅입니다.
- Props 드릴링 문제를 해결하고 컴포넌트간 데이터를 효율적으로 공유할 수 있습니다.

```javascript
const value = useContext(MyContext);
```

## useRef 훅

- `useRef`는 DOM 요소에 직접 접근하거나, 렌더링 사이에 지속되어야 할 데이터를 저장하는데 사용합니다.
- `.current` 속성을 통해 참조된 값을 관리합니다.

```javascript
const myRef = useRef(initialValue);
```

## useEffect 훅

- `useEffect`는 컴포넌트가 렌더링될 때 부수 효과를 실행하기 위한 훅입니다.
- 의존성 배열에 따라 실행 조건을 제어할 수 있습니다.

```javascript
useEffect(() => {
  // 효과 로직
}, [dependencies]);
```

## useLayoutEffect 훅

- `useLayoutEffect`는 DOM 변화 후 바로 실행되며, 화면 갱신 전에 동기적으로 코드를 실행할 수 있습니다.
- 주로 DOM 조작이 포함된 작업에 사용됩니다.

## useImperativeHandle 훅

- `useImperativeHandle`은 부모 컴포넌트에 자식 컴포넌트의 인스턴스 함수나 변수를 노출할 때 사용합니다.
- `forwardRef`와 함께 사용되어 부모 컴포넌트가 자식 컴포넌트의 함수나 변수에 접근할 수 있게 합니다.

```javascript
useImperativeHandle(ref, () => ({
  // 노출할 함수나 변수
}));
```

## useInsertionEffect 훅

- `useInsertionEffect`는 CSS-in-JS 라이브러리에서 스타일을 주입하기 전에 사용됩니다.
- 렌더링 중에 동기적으로 스타일을 적용할 때 사용되며, 브라우저가 스타일을 다시 계산하는 것을 최소화합니다.


## useMemo 훅
- **목적**: 계산 비용이 큰 연산의 결과값을 메모이징하여 성능을 최적화합니다.
- **사용법**:
  ```javascript
  const value = useMemo(() => calculate(), [dependencies]);
  ```

## useCallback 훅
- **목적**: 함수를 메모이징하여 컴포넌트 리렌더링 시 함수가 새로 생성되는 것을 방지합니다.
- **사용법**:
  ```javascript
  const memoizedCallback = useCallback(() => {
    performAction();
  }, [dependencies]);
  ```

## useTransition 훅
- **목적**: 상태 업데이트를 'transition'으로 표시하여 우선 순위를 관리함으로써, UI 블로킹을 줄이고 부드러운 사용자 경험을 제공합니다.
- **사용법**:
  ```javascript
  const [isPending, startTransition] = useTransition();
  ```

## useDeferredValue 훅
- **목적**: 특정 값의 처리 우선순위를 낮추어 사용자 경험을 개선합니다.
- **사용법**:
  ```javascript
  const deferredValue = useDeferredValue(value);
  ```

