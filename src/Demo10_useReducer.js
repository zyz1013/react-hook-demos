import React, { useReducer } from "react";
// useReducer 和 redux 中 reducer 很像
// useState 内部就是靠 useReducer 来实现的
// useState 的替代方案，它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法
// 在某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { number: state.number + 1 };
    case "decrement":
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

function init(initialState) {
  return {
    number: initialState,
  };
}

function Demo() {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <div>
      <p>{state.number}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default Demo;
