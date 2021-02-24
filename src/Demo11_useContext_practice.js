import React, { useContext, createContext, useReducer } from "react";

const ThemeContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "RED":
      return { ...state, color: action.payload };
    case "BLUE":
      return { ...state, color: action.payload };
    default:
      return state;
  }
}

const initState = {
  color: "blue",
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <ThemeContext.Provider value={{ color: state.color, dispatch }}>
        <Content1 />
        <Content2 />
      </ThemeContext.Provider>
    </div>
  );
}

function Content1() {
  const { color, dispatch } = useContext(ThemeContext);

  return (
    <div>
      <div style={{ color }}>小红书的颜色</div>
      <button onClick={() => dispatch({ type: "RED", payload: "red" })}>
        红色
      </button>
    </div>
  );
}

function Content2() {
  const { color, dispatch } = useContext(ThemeContext);
  return (
    <div>
      <div style={{ color }}>内容的颜色</div>
      <button onClick={() => dispatch({ type: "BLUE", payload: "blue" })}>
        蓝色
      </button>
    </div>
  );
}

export default App;
