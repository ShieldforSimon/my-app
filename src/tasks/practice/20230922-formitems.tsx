import type { RadioChangeEvent, DatePickerProps } from "antd";
// import {
//   Button,
//   Checkbox,
//   Form,
//   Input,
//   Select,
//   Radio,
//   DatePicker,
//   Space,
// } from "antd";
import React, { useState } from "react";

// // 2.使用form组件，以及其他合适的组件，渲染一个填写身份证的表单，
// // 包括不限于: 身份证号，姓名，住址，出生年月，每当数据发生变化的时候，控制台输出表单的值
// const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };
// const Selectitems: React.FC = () => (
//   <>
//     <Select
//       defaultValue="汉族"
//       style={{ width: 120 }}
//       onChange={handleChange}
//       options={[
//         {
//           value: "汉族",
//           label: "汉族",
//         },
//         {
//           value: "满族",
//           label: "满族",
//         },
//         {
//           value: "维吾尔族",
//           label: "维吾尔族",
//         },
//         {
//           value: "藏族",
//           label: "藏族",
//         },
//       ]}
//     />
//   </>
// );

// const onChange: DatePickerProps["onChange"] = (date, dateString) => {
//   console.log(date, dateString);
// };
// const Dateitems: React.FC = () => (
//   <Space direction="vertical">
//     <DatePicker onChange={onChange} />
//     <DatePicker onChange={onChange} picker="week" />
//     <DatePicker onChange={onChange} picker="month" />
//     <DatePicker onChange={onChange} picker="quarter" />
//     <DatePicker onChange={onChange} picker="year" />
//   </Space>
// );

// const Radioitems: React.FC = () => {
//   const [value, setValue] = useState(1);
//   const onChange = (e: RadioChangeEvent) => {
//     console.log("radio checked", e.target.value);
//     setValue(e.target.value);
//   };

//   return (
//     <Radio.Group onChange={onChange} value={value}>
//       <Radio value={1}>man</Radio>
//       <Radio value={2}>human</Radio>
//     </Radio.Group>
//   );
// };

// // 主体
//  const FormID: React.FC = () => {
//   const onFinish = (values: string) => {
//     console.log("Success:", values);
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     console.log("Failed:", errorInfo);
//   };
//   return (
//     1
//   );
// };
