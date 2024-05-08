//ex2) action type과 데이터를 정의하여 사용
function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + action.payload };
        case "DECREMENT":
            return { count: state.count - action.payload };
        default:
            throw new Error("unsupported action type: ", action.type);
    }
}