import React, { useState, useEffect } from "react";
// 打印顺序是什么?

let timer1 = 0;
function Demo() {
  let timer2 = 0;
  const [count, setCount] = useState(0);
  console.log("--timer1--" + timer1);
  console.log("--timer2--" + timer2);

  useEffect(() => {
    let timer3 = 100;
    timer3 = setInterval(() => {
      timer1++;
      timer2++;
      setCount(count + 1);
    }, 3000);
    console.log("--timer3--" + timer3);
    return () => {
      console.log("--timer3--" + timer3);
      clearInterval(timer3);
    };
  }, [count]);

  return <div>{count}</div>;
}

export default Demo;
