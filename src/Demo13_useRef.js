import React, { useState, useRef } from "react";

// 类组件、React 元素用 React.createRef，函数组件使用 useRef
// useRef 返回一个可变的 ref 对象，其 current 属性被初始化为传入的参数（initialValue）

// useRef 返回的 ref 对象在组件的整个生命周期内保持不变，也就是说每次重新渲染函数组件时，返回的ref 对象都是同一个（使用 React.createRef ，每次重新渲染组件都会重新创建 ref）

function Demo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Son />
    </div>
  );
}

let input;

function Son() {
  const inputRef = useRef();
  console.log("inputRef===input:" + (inputRef === input)); // false true true ...
  input = inputRef;
  return (
    <div>
      <input ref={inputRef}></input>
    </div>
  );
}

export default Demo;
