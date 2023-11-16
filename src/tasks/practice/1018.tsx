import react from "react";

// type Person = {
//   name: string;
//   age: string;
// };
// const run = (plays: Function[], man: Person) => {
//   return plays.map((item) => item(man));
// };
// // 2. 写一个函数，输入2个参数，第一个为一个人员对象数组，第二个为一个函数数组，
// // 将人员对象数组中的每个人，依次执行题1中的run，输出新的人员数组。
// const groupRun = (men: Person[], plays: Function[]) => {
//   return mans.map((item) => {
//     return run(plays, item);
//   });
// };

// 写一个函数，函数输入一个函数A，返回一个函数B，函数B和函数A具有相同功能，但是无论多少次调用只会被执行一次（第一次）。

// const b = (c: Function) => {
//   let a = false;
//   return (...args: any) => {
//     if (!a) {
//       a = true;
//       return c(...args);
//     }
//   };
// };
//c可能带参数,不写的话会丢,所以传给他参数

// 写一个函数，函数输入一个函数X，返回一个函数Y，函数Y和函数X具有相同功能，
// 但是函数Y如果返回了字符串，且此字符串中包含”monk”，则删除此”monk”

// const deleteMonk = (x: Function): any => {
//   (...args: any[]) => {
//     let a = x(...args);
//     if (typeof a === "string" && a.includes("monk")) {
//       return a.split("monk").join("");
//     } else {
//       return a;
//     }
//   };
// };

// 对象（先学习对象常用的几个方法：Object.entries Object.keys Object.values JSON.stringrify JSON.parse）：
//
// 写一个函数，输入两个参数，一个任意对象，一个字符串数组，且此数组的字符串一定属于上述对象的key，请计算出此字符串数组在未知对象上对应的值。
//
// 举例：
// {  a: 1, b:2, c: { d: 5, e: 6, f: {g: “xy”}} }
// [“a”, “f”, “g”]
// 输出：[1,{g: “xy”}, “xy”]

// const findValue = (x: any, y: string[]) => {
//   let keysArr = Object.keys(x);
//   let valueArr = Object.values(x);
//   let result: any = [];
//   y.map((item) => {
//     keysArr.forEach((c, index) => {
//       if (c === item) {
//         return result.push(valueArr[index]);
//       }
//     });
//     return result;
//   });
// };

// 正则表达式
//有一个位置字符串,判断他是否符合只有数字和大写字母组成
//有一个未知字符串,替换其中所有dick为suck
