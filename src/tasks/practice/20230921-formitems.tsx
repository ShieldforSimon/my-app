import { Modal, Timeline } from "antd";
import React, { useState } from "react";
// import { Form, Button,Input, Radio, Cascader } from "antd";

// const addressoptions: any[] = [
//   {
//     value: "浙江省",
//     label: "浙江省",
//     children: [
//       {
//         value: "杭州市",
//         label: "杭州市",
//         children: [
//           {
//             value: "拱墅区",
//             label: "拱墅区",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: "安徽省",
//     label: "安徽省",
//     children: [
//       {
//         value: "六安市",
//         label: "六安市",
//         children: [
//           {
//             value: "霍邱县",
//             label: "霍邱县",
//           },
//         ],
//       },
//     ],
//   },
// ];

// export function FormID() {
//   const onchangeevent = (x: any,y:any[]) => {
//     console.log(y);
//   };
//   const [gendervalue, setGendervalue] = useState<any>("male");

//   return (
//     <Form
//       name="basic"
//       labelCol={{ span: 8 }}
//       wrapperCol={{ span: 8 }}
//       initialValues={{ remember: true }}
//       onValuesChange={onchangeevent}
//     >
//       <Form.Item
//         label="Your Name"
//         name="yourname"
//         rules={[{ required: true, message: "Please input your name" }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="ID number"
//         name="ID number"
//         rules={[{ required: true, message: "Please input your IDnumber" }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Gender"
//         name="Gender"
//         rules={[{ required: true, message: "Please check your gender" }]}
//       >
//         <Radio.Group  name="genderoptions" >
//           <Radio  name="male" value={"male"}>male</Radio>
//           <Radio  name="female" value={"female"}>female</Radio>
//         </Radio.Group>
//       </Form.Item>

//       <Form.Item
//         label="Address"
//         name="address"
//         rules={[{ required: true, message: "Please input your address" }]}
//       >
//         <Cascader options={addressoptions} placeholder="please check here" />
//       </Form.Item>

//       <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// }
const renderdata = new Array(10)
  .fill(1)
  .map((a: string, index: number) => ({ id: index, title: a + index }));
const Rendertimeline = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<number>(0);
 
  return (
    <div>
      {renderdata.map((a) => {
         const onclick = () => {
          setOpen(true);
          setId(a.id);
        };
        return(
        <Timeline>
          <Timeline.Item>
            <div key={a.id} onClick={onclick}>
              {a.title}
            </div>
          </Timeline.Item>
        </Timeline>)
}
)}
      <Modal title="id">
        <p>{id}</p>
      </Modal>
    </div>
  );
};
