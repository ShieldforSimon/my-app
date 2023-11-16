import react, { useState } from "react";
const a = {
  err_no: 0,
  err_msg: "success",
  data: {
    offer: {
      title: "",
      activity_id: "2020",
      start_time: 1617638400,
      end_time: 1618934400,
      status: 2,
      image:
        "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2879410508de459c91ae8b7509ca75f8~tplv-k3u1fbpfcp-zoom-1.image",
      close_image:
        "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a38d640009e14c87a7d29cd95dee27dd~tplv-k3u1fbpfcp-zoom-1.image",
      url: "https://juejin-activity.bytedance.net/rank",
      is_show: 0,
    },
    top: {
      title: "玩游戏抽PS5！",
      activity_id: "2310251",
      start_time: 1697299200,
      end_time: 1698595200,
      status: 1,
      image:
        "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ef5f1b83ea949709e1abfa9fde78d7e~tplv-k3u1fbpfcp-jj:0:0:0:0:q75.image#?w=512\u0026h=512\u0026s=69988\u0026e=png\u0026a=1\u0026b=db69f8",
      close_image:
        "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/882fc263e36347ffbf6d598de520870e~tplv-k3u1fbpfcp-image.image",
      url: "https://juejin.cn/magic/eco/runtime/release/6522830e395b6405e161dea4?appType=juejin\u0026magic_page_no=1\u0026magic_source=1025sydb",
      is_show: 1,
    },
  },
};

const b: object = a.data.top;
let keyArr = [...Object.keys(b)].map((item) =>
  item.replace(/_(\w)/g, function (str, word) {
    return word.toUpperCase();
  }),
);
let valueArr = [...Object.values(b)].map((item) =>
  item.replace(/_(\w)/g, function (str: string, word: string) {
    return word.toUpperCase();
  }),
);
let newB = {};
valueArr.map((item: any, index) => {
  // @ts-ignore
  newB[keyArr[index]] = item;
});
console.log(newB);

// import { Button, Input } from "antd";
// // // 一个平均值函数，0或1个函数参数，参数为数字。
// // // 此函数可无限制传入数字，直到参数为0个则输出平均值
// // //
// // // 示例：
// // // avg(1)(2)    //无输出
// // // avg(1)(2)()    // 输出1.5
// // // avg(2)(2)(2)(2)() //输出2
// //
// // const AverageNum = (x: number) => {};
// // //
// // const a = {
// //   schema: {
// //     fields: ["adUnitCode", "hvp", "hour"],
// //     delimiter: "|",
// //   },
// // };
// //
// // const obj = [
// //   {
// //     schema: {
// //       fields: ["adUnitCode", "hvp", "hvp", "hour"],
// //       delimiter: "|",
// //     },
// //   },
// //   {
// //     schema: {
// //       fields: ["adUniode", "v", "hou"],
// //       delimiter: "|",
// //     },
// //   },
// //   {
// //     schema: {
// //       fields: ["itCode", "hvp", "qwewqr"],
// //       delimiter: "|",
// //     },
// //   },
// //   {
// //     schema: {
// //       fields: ["adUnde", "hhhh", "ho"],
// //       delimiter: "|",
// //     },
// //   },
// // ];
// // const arr = obj.map((a) => {
// //   const result: any[] = [];
// //   a.schema.fields.forEach((item: any) => {
// //     if (!result.includes(item)) {
// //       return result.push(item);
// //     }
// //   });
// //   return result;
// // });
// // console.log(arr);
//
// // export const Aaa = () => {
// //   const [num, setNum] = useState<number>(0);
// //   const result: number[] = [];
// //   let averageIs: number;
// //   let sum: number;
// //   const onchange = (x: any) => {
// //     setNum(x.target.value);
// //     result.push(x);
// //     if (!x) {
// //       result.reduce((sum, curr) => {
// //         sum += curr;
// //         return sum;
// //       }, 0);
// //       averageIs = sum / result.length;
// //       alert(averageIs);
// //     }
// //   };
// //   return (
// //     <div>
// //       <Input onClick={onchange} />
// //     </div>
// //   );
// // // };
// // let sum: number[] = [];
// // let result: number;
// // let len: number;
// // function func(x: number | undefined): any {
// //   if (typeof x === "number") {
// //     sum.push();
// //     len = sum.length;
// //     return func(x);
// //   } else if (typeof x === undefined) {
// //     result = sum.reduce((res, curr) => (res += curr), 0);
// //     return result / len;
// //     sum = [];
// //     len = 0;
// //     result = 0;
// //   }
// // }
// let sum: number[] = [];
// let result = 0;
// function func(x: number | undefined): any {
//
//   if (typeof x === "number") {
//     sum.push(x);
//     if (sum.length >= 2) {
//       return (result = sum.reduce((x, curr) => (x += curr), 0) / sum.length);
//     }
//   } else if (typeof x === undefined) {
//     console.log(result);
//   }
// }
//
// // let sum: number[] = [];
// // let result = 0;
// // function func(x: number | undefined): any {
// //   if (typeof x === "number") {
// //     sum.push(x);
// //     if (sum.length >= 2) {
// //       return (result = sum.reduce((x, curr) => (x += curr), 0) / sum.length);
// //     }
// //   } else if (typeof x === undefined) {
// //     console.log(result);
// //   }
// // }
//
