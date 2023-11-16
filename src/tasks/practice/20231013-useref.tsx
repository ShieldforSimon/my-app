import React from "react";
import { atom, useAtom } from "jotai";
//
// 2. 学习全局状态，题：写3个组件，三个组件都没有props，组件1渲染一个数字的平方，
// 组件2渲染一个数字的立方，组件3为一个按钮和一个数字，每点一下数字加1，切联动组件12更新。
// 3. 了解样式的style写法。晚上抽查，这种写法和css写法有什么区别。
// 4. 安装styled-components，学习这种css的写法。

// 全局变量就是单纯指会贯穿整个APP生命周期的变量，用于单纯的保存一些信息，或者封装一些全局工具和方法的对象。
// 而共享状态则是指哪些需要跨组件或跨路由共享的信息，这些信息通常也是全局变量，而共享状态和全局变量的不同在
// 于前者发生改变时需要通知所有使用该状态的组件，而后者不需要。
export const countAtom = atom(0);
export function CountAdd(): any {
  const [num, setNum] = useAtom(countAtom);
  const onclick = () => {
    setNum(num + 1);
  };
  return (
    <div>
      {num}
      <button onClick={onclick}>点击+1</button>
    </div>
  );
}

//
// import { useAtom } from "jotai";
// import { countAtom } from "./20231013-useref";
// export function CountSquare() {
//   const [count] = useAtom<number>(countAtom);
//   return <div>平方: {count * count}</div>;
// }
// export function CountCube() {
//   const [num] = useAtom<number>(countAtom);
//   return <div>cube: {num * num * num}</div>;
// }
