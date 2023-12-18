import axios from "axios";
import react, { useState } from "react";
import Any = jasmine.Any;
// let midValue: Exclude<any, Function>;
// export function createState(initialValue:  Exclude<any, Function>) {
//   midValue = midValue ? midValue : initialValue;
//   function way(useState: any) {
//     return (midValue= useState);
//   }
//   return [midValue, way];
// }
//
// function(){
//   return <div onClick={}>dianwo+1{midValue}</div>
// }

// - [ ] 写一个函数once，输入一个任意函数，返回一个函数。此返回的函数和输入的函数功能完全一致，但是只有第一次调用会生效，后续调用无作用。（难度3）

// async function postForm(value: any) {
//   let res = await fetch("www.baidu.com", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(value),
//   });
//   let response = await res.json();
//   console.log(response);
// }
function getData() {
  axios({
    method: "get",
    url: "www.baidu.com",
  }).then(() => {
    axios({
      method: "get",
      url: "www.baidu.com",
    }).then(() => {
      axios({
        method: "get",
        url: "www.baidu.com",
      });
    });
  });
}

axios({
  method: "get",
  url: "www.baidu.com",
}).then((firstRes) => {});
axios({
  method: "get",
  url: "www.baidu.com",
}).then((firstRes) => {});

function getBaiduData() {
  return axios.get("www.baidu.com");
}

async function getRequest() {
  let result = axios.all([(getBaiduData(), getBaiduData(), getBaiduData())]);
  console.log(result);
}

async function postForm(value: any) {
  let res = await fetch(`www.baidu.com/${value}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });
  let response = await res.json();
  console.log(response);
}
// 写一个函数once，输入一个任意函数，返回一个函数。此返回的函数和输入的函数功能完全一致，但是只有第一次调用会生效，后续调用无作用。

// 方法1  使用闭包

//解释:定义函数时使用泛型声明类型,该泛型类型T必须是一个函数,概率函数接受任意数量的参数(...args:any[]),并返回任意类型的值.
// 解释: 为什么要包含undefined,因为在ts中的变量默认可以是undefined的.第一次调用函数时,result会被赋值为具体结果,但在后
// 续调用时并不会被重新赋值,因此保持为之前的计算结果,而ts会将未赋值的变量默认为undefined
function once1<T extends (...args: any[]) => any>(func: T): T {
  let called = false;
  let result: ReturnType<T>;

  return function (...args: Parameters<T>): ReturnType<T> | undefined {
    if (!called) {
      called = true;
      result = func(...args);
    }
    return result;
  } as T;
}

//- [x] 实现一个函数useState，输入参数和输出参数和react的一致
let midValue: any = null;
export function createState<T>(initialValue: T): [T, (newState: T) => void] {
  if (midValue === null) {
    midValue = initialValue;
  }
  const way = (useState: T) => {
    midValue = useState;
  };
  return [midValue, way];
}
