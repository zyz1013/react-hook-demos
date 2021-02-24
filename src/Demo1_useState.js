import React, { useState, useEffect } from "react";
// 经典的 setInterval 错误写法：
function Demo() {
  const [count, setCount] = useState(0);
  // 预期的效果是页面上的数字会每秒增加 1 ，但其实数字增加到 1 后便静止不动了。由于 useEffect 的依赖为空数组，所以 setInterval 只会在组件完成初次渲染后被调用一次，从而使得回调函数在之后每次被定时调用时，取到的 count 都是初次渲染时的值 0（闭包的原因），页面上的数值也会永远停留在 1。
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div>{count}</div>;
}

export default Demo;
