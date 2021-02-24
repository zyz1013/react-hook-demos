import React, { useRef, useState } from "react";

// 因为函数组件没有实例，所以函数组件无法像类组件一样可以接收 ref 属性
// function Parent() {
//   return (
//       <>
//        <Child ref={xxx} /> 这样是不行的
//       </>
//   )
// }

// forwardRef 可以在父组件中操作子组件的 ref 对象
// forwardRef 可以将父组件中的 ref 对象转发到子组件中的 dom 元素上
// 子组件接受 props 和 ref 作为参数

function Demo() {
  const [number, setNumber] = useState(0);
  const inputRef = useRef(); //{current:''}
  function getFocus() {
    inputRef.current.value = "focus";
    inputRef.current.focus();
  }
  return (
    <>
      <Child ref={inputRef} />
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={getFocus}>获得焦点</button>
    </>
  );
}

function Child(props, ref) {
  return <input type="text" ref={ref} />;
}

Child = React.forwardRef(Child);

export default Demo;
