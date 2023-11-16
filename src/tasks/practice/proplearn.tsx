import React, { useEffect, useState } from "react";

// type Props = {
//   title: string;
//   initialCount: number;
// };
// export const ClickCount: React.FC<Props> = ({ title, initialCount }) => {
//   const [count, countNum] = useState(initialCount);
//   return (
//     <div>
//       <button onClick={() => countNum(count + 1)}> {count} </button>
//       <div>{title}</div>
//     </div>
//   );
// };

// type Props={
//     onClickFunc:Function;
//     count:number;
// }

// export const RenderOnclick:React.FC<Props>=({onClickFunc,count})=>{
//     return (
//         <button onClick={()=>onClickFunc()}>{count}</button>
//     )

// }

// 一个组件,渲染一个按钮和count,每三次点击count加1
// export function ClickNum(){
//     const [count,SetCount]=useState(0);
//     const [time,setTime]=useState(1);
//     return (
//         <button onClick={()=>{
//             setTime(time+1);
//             time%3===0&&(SetCount(count+1));
//         }}>每三次点击count+1:{count}</button>
//     )
// }

// 一个组件,渲染一个按钮和count,每过1s,count+1,点击count按钮就会重置

export function InternalCount() {
  const [count, SetCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      SetCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return <span>{count}</span>;
}


// export const CheckBox: React.FC<{ options: { label: string,value: string }[] }> = ({options}) => {
//   const [selected, setSelected] = useState("");

//   return (
//     <div>
//       {options.map(({ label, value }) => (
//         <div key={value} onClick={() => setSelected(value)}>
//           <span>{value === selected ? "选中了:" : null}</span>
//           <label>{label}</label>
//         </div>
//       ))}
//     </div>
//   );
// };


// const buttonitem=[daily,weeekly,monthly,quarterly,yearly]

// export const CheckBox: React.FC<{ options: { label: string,value: string }[] }> = ({options}) => {
//   const [selected, setSelected] = useState("");

//   return (
//     <div>
//       {options.map(({ label, value }) => (
//         <div key={value} onClick={() => setSelected(value)}>
//           <span>{value === selected ? "选中了:" : null}</span>
//           <label>{label}</label>
//         </div>
//       ))}
//     </div>
//   );
// };

