import React, { useState, useEffect } from "react";
function Demo() {
  const [count, setCount] = useState(0);
  //稍加复杂的场景  让 setInterval 回调函数获取到最新的 state 和props
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  return <div>{count}</div>;
}

export default Demo;
