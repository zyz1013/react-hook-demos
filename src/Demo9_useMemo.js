import React, { useState, useMemo } from "react";

// useMemo 的返回值
// 返回一个 memoized 值。在依赖参数不变的的情况返回的是上次第一次计算的值

// age变化时useMemo不计算
function Demo() {
  const [count, setCount] = useState(100000);
  const [age, setAge] = useState(0);

  const computeValue = useMemo(() => {
    function computeExpensiveValue(count) {
      console.log("computeExpensiveValue 被执行");
      //比较大计算
      const array = new Array(count).fill(count);
      return array.reduce((currentTotal, item) => {
        return currentTotal + item;
      }, 0);
    }
    return computeExpensiveValue(count);
  }, [count]);

  return (
    <div>
      <p>{computeValue}</p>
      <button onClick={() => setCount(count + 1)}>count+</button>
      <button onClick={() => setAge(age + 1)}>age+</button>
    </div>
  );
}

export default Demo;
