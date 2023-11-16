import React, { useEffect, useRef, useState } from "react";

// 2.深入学习React hooks  , 封装一个hook实现以下功能: Hook两个参数,
// 第一个为函数F, 第二个参数为数字N, 每隔N秒就执行函数F, 且第一次执行控制台输入一个”功能启动”.

// export function RenderFunction() {
//   const [count, SetCount] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       SetCount(count + 1);
//     }, 1000);
//     return () => {
//       clearInterval(timer);
//     };
//   }, [count]);

//   return <span>{count}</span>;
// }

// 写一个组件，有title一个状态，每隔一秒输出这个title，每隔5秒将标题随机变化一下
// 当计时器第一次输出title的，额外输出一句：计时器开始工作
type x = typeof RenderFunction;
type y = ReturnType<x>;

function useSecondRender() {
  const [title, setTitle] = useState<number>(50);
  // typeof取setInterval类型
  let previousTimer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    console.log("开始启动计时器:");
  }, []);

  useEffect(() => {
    clearInterval(previousTimer.current);
    previousTimer.current = setInterval(() => {
      setTitle(title + 5);
      console.log("time");
    }, 5000);
  }, [title]);
  return title;
}
export function RenderFunction(): any {
  const title = useSecondRender();
  return <>{title}</>;
}
