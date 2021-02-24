import React, { useState } from "react";

// age 改变时 子组件也重现渲染了  函数组件可以用memo 优化  看demo2
function Demo() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);

  return (
    <div>
      <p>{age}</p>
      <button onClick={() => setCount(count + 1)}>count+</button>
      <button onClick={() => setAge(age + 1)}>age+</button>
      <Son count={count} />
    </div>
  );
}

function Son(props) {
  console.log(`我是子组件${props.count}`);
  return <div>我是子组件{props.count}</div>;
}

export default Demo;
