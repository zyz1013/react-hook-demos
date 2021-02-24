import React, { useReducer, useContext, createContext } from "react";

// 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值
// 当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定
// 当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值
// useContext(MyContext) 相当于 class 组件中的 static contextType = MyContext 或者 <MyContext.Consumer>
// useContext(MyContext) 只是让你能够读取 context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 <MyContext.Provider> 来为下层组件提供 context

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

const CouterContext = createContext();

function Demo() {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <CouterContext.Provider value={{ state, dispatch }}>
      <Son />
    </CouterContext.Provider>
  );
}

// //方案一
// function Son() {
//   return (
//     <CouterContext.Consumer>
//       {(value) => {
//         return (
//           <>
//             <div>{value.state.number}</div>
//             <button onClick={() => value.dispatch({ type: "increment" })}>
//               +
//             </button>
//             <button onClick={() => value.dispatch({ type: "decrement" })}>
//               -
//             </button>
//           </>
//         );
//       }}
//     </CouterContext.Consumer>
//   );
// }

//方案二
function Son() {
  const { state, dispatch } = useContext(CouterContext);

  return (
    <div>
      <div>{state.number}</div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default Demo;
