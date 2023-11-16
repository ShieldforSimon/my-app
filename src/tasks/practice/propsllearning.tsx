import React, { useState } from "react";
//将一组对象作为组件属性渲染出来
// type User = {
//   name: string;
//   id: string;
// };

// type Props = {
//   users: User[];
// };

// export const ObjtoTag: React.FC<Props> = ({ users }) => {
//   return (
//     <div>
//       {users.map((u) => (
//         <div>
//           {u.name}
//           {u.id}
//         </div>
//       ))}
//     </div>
//   );
// };
// 1编写组件显示指定标题
// type Prop={
//     title:string;
// }
// export function Title(prop:Prop){
//     return (
//         <h1>{prop.title}</h1>
//     )
// }

// 2编写组件显示传入的图片
// type Props={
//     src:string;
//     alt:string;
// }
// export const Img:React.FC<Props>=({src,alt})=>{
//     return (
//         <img src={src} alt={alt}/>
//     )
// }
// 3编写组件显示用户信息
// type user = {
//   name: string;
//   age: number;
//   gender: string;
// };
// type Props = {
//   data: user;
// };

// export function UserInfo(prop: Props) {
//   const { name, age, gender } = prop.data;

//   return (
//     <div>
//       <div>{name}</div>
//       <div>{age}</div>
//       <div>{gender}</div>
//     </div>
//   );
// }
// 4编写组件显示todo列表并高亮已完成项
// 5编写组件显示分页后的列表数据

// 6编写组件实现selectable列表项
// 组件接收一个数组数据,渲染为列表
// 每个列表项左侧或前方有一个CheckBox
// 点击CheckBox可以选中该项,再次点击可以取消选中
// 选中项需要有视觉反馈(比如颜色变化)表示其被选中状态
// 可以同时选中多个列表项
// 选中状态需要进行管理,点击后可以一直保持选中
// 这样我们就可以实现一个可选择列表组件,支持多选和取消选择,并有视觉反馈效果。
// 主要考察状态管理、事件处理和条件渲染的综合应用能力。
// 需要运用React的状态Hooks等实现。请让我知道如果对题目要求有任何不清楚的地方,我可以提供进一步解释或者示例。
// type plan = {
// id:string;
// content:string;
// todo:boolean;
// }

// type Props = {
//     data:plan[];
// }
// export function TodoPlan(prop:Props){
//     const { data }= prop;
//     const todo=true;

//         return (
//             <ul>
//                 {
//                 data.map(item=>(
//                 <>
//                 <button onClick={()=>item.todo?false:true}>alter state </button>
//                 <li key={item.id} style={{color:item.todo?"green":"red"}}>{item.content}</li>
//                 </>
//                 ))}
//             </ul>
//         )
// }

// 7编写组件实现可展开和关闭的列表项详情
// 2.4编写组件接收用户对象并显示完整信息
// type user = {
//   name: string;
//   age: number;
//   gender: string;
// };
// type Props = {
//   data: user;
// };

// const UserInfo: React.FC<Props>=(prop)=>{
//     const {name,age,gender}=prop.data;
// return (
//     <div>
//         {name}
//         {age}
//         {gender}
//     </div>
// )
// }

// 2.5编写组件接收Tree数据并渲染嵌套节点
// Tree数据结构
// type TreeData = {
//   name: string;
//   children: TreeData[];
// };

// export const Tree = ({ data }: { data: TreeData }) => {
//   const renderTree = (item: TreeData) => {
//     return (
//       <ul>
//         <li>{item.name}</li>
//         {item.children.length > 0 &&
//           item.children.map((child) => renderTree(child))}
//       </ul>
//     );
//   };
//   return renderTree(data);
// };

// 递归渲染树形组件

//   const Tree = ({data}) => {

//     const renderTree = (data) => {
//       return (
//         <ul>
//           <li>{data.name}</li>
//           {data.children.length > 0 &&
//             data.children.map(child => renderTree(child))
//           }
//         </ul>
//       )
//     }

//     return renderTree(data);

//   }
//   // 使用
//   <Tree data={tree} />




