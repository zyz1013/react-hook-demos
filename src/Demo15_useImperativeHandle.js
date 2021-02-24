import React, { useRef, useImperativeHandle, forwardRef } from "react";

// useImperativeHandle可以让你在使用 ref 时，自定义暴露给父组件的实例值，不能让父组件想干嘛就干嘛
// 在大多数情况下，应当避免使用 ref 这样的命令式代码。useImperativeHandle 应当与 forwardRef 一起使用
// 父组件可以使用操作子组件中的多个 ref

function Demo() {
  const parentRef = useRef(); //{current:''}
  function getFocus() {
    parentRef.current.focus();
    // 因为子组件中没有定义这个属性，实现了保护，所以这里的代码无效
    // parentRef.current.addNumber(666);
    parentRef.current.changeText("<script>alert(1)</script>");
    console.log(parentRef.current.name);
  }
  return (
    <>
      <Child ref={parentRef} />
      <button onClick={getFocus}>获得焦点</button>
    </>
  );
}

function Child(props, parentRef) {
  // 子组件内部自己创建 ref
  let focusRef = useRef();
  let inputRef = useRef();

  useImperativeHandle(parentRef, () => {
    return {
      focusRef,
      inputRef,
      focus() {
        focusRef.current.focus();
      },
      changeText(text) {
        inputRef.current.value = text;
      },
    };
  });

  return (
    <>
      <input ref={focusRef} />
      <input ref={inputRef} />
    </>
  );
}

Child = forwardRef(Child);

export default Demo;
