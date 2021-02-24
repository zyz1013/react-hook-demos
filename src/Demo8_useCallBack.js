import React, { useState, useCallback } from "react";

// 接收一个内联回调函数参数和一个依赖项数组（子组件依赖父组件的状态，即子组件会使用到父组件的值）
// useCallback 会返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新

// 先说结论useCallback和useMemo都可缓存函数的引用或值，但是从更细的使用角度来说useCallback缓存函数的引用，useMemo缓存计算数据的值。

function Demo() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);

  // 可以配合memo用于优化子组件的渲染次数
  const addClick = useCallback(() => {
    console.log("age变化时我会渲染吗?"); //不会
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => addClick()}>count+</button>
      <button onClick={() => setAge(age + 1)}>age+</button>
    </div>
  );
}

export default Demo;
