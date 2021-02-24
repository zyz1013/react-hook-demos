import React, { useRef, useEffect } from "react";
// 自定义 Hook 必须以 use 开头
// 这个约定非常重要。不遵循的话，由于无法判断某个函数是否包含对其内部 Hook 的调用，React 将无法自动检查你的 Hook 是否违反了 Hook 的规则

// useIsMounted 判断页面是否渲染好，只有为true时才能进行setState的操作，否则react会报警告:已销毁的组件不能setState

function Demo() {
  const isMounted = useIsMounted();

  return <div>是否已渲染好:{isMounted ? "是" : "否"}</div>;
}

function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

export default Demo;
