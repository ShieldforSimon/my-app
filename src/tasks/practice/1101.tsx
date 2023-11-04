import react, { useEffect, useState } from "react";
// React（中等难度）
// 1. 写一个hook，输入2个任意参数，作用是当这两个参数均产生变化时，则console.log一下"变化”（提示：需要记录上一次的值）

// export const useConsole = (x: any, y: any) => {
//   const [countX, setCountX] = useState(0);
//   const [countY, setCountY] = useState(0);
//
//   useEffect(() => {
//     setCountX(countX + 1);
//   }, [x]);
//   useEffect(() => {
//     setCountY(countY + 1);
//   }, [y]);
//   if (x > 1 && y > 1) {
//     console.log("变化");
//     setCountX(1);
//     setCountY(1);
//   }
// };

const a = [
  {
    name: "apple",
    taste: "sweet",
  },
  {
    name: "orange",
    taste: "sour",
  },
  {
    name: "banana",
    taste: "spicy",
  },
];
let b = a.map((item) => item.name);
let c = a.map((item) => item.taste);
let result: any = [];

b.forEach((item: any, index) => {
  let obj: any = {};
  obj[b[index]] = c[index];
  return result.push(obj);
});
console.log(result);
