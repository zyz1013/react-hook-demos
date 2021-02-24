import React, { useState, useEffect } from "react";
function Demo() {
  const [count, setCount] = useState(0);
  //用最低成本的办法
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div>{count}</div>;
}

export default Demo;
