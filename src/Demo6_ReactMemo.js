import React, { useState } from "react";

function Son(props) {
  console.log(`我是子组件${props.count}`);
  return <div>我是子组件{props.count}</div>;
}

// 我们用了React.memo后，该组件在传入的值不变的前提下是不会被重新渲染的
function Demo() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);

  return (
    <div>
      <p>{age}</p>
      <button onClick={() => setCount(count + 1)}>count+</button>
      <button onClick={() => setAge(age + 1)}>age+</button>
      <MemoSon count={count} />
    </div>
  );
}

const MemoSon = React.memo(Son);

export default Demo;
