import React, { useState, useEffect } from "react";
import { Button, Form, Input, Modal, Timeline } from "antd";
import TimelineItem from "antd/es/timeline/TimelineItem";


// 一个对象数组，对象有title和id属性，用时间线组件渲染
// 题2，在上题基础上，每一个时间点的标题可点击，展示出一个弹窗，弹窗里渲染这个id。弹窗可关闭，
// 题3，在题2基础上，弹窗数据用form去展示（title和id），切均不可编辑
type timelineitem = {
  id: number;
  title: string;
};
const renderData = new Array(10)
  .fill(1)
  .map((a: string | number, index: number) => (
    {
    id: index + 1,
    title: index + "a",
  }
  ));

export function TimeLineRender() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<number>();
  const [title, setTitle] = useState("");

  const handleok = () => {
    setOpen(false);
  };
  const handlecancel = () => {
    setOpen(false);
  };

  return (
    <div>
      {renderData.map((a: timelineitem) => {
        const onopen = () => {
          setOpen(true);
          setId(a.id);
          setTitle(a.title);
        };
        return (
          <Timeline>
            <Timeline.Item>
              <div onClick={onopen} key={a.id}>
                {a.title}
              </div>
            </Timeline.Item>
          </Timeline>
        );
      })}
      <Modal title="Title" open={open} onOk={handleok} onCancel={handlecancel}>
        <Form name={title + id} labelCol={{ span: 4 }} wrapperCol={{ span: 4 }}>
          <Form.Item label="Id" name={id}>
            <Input defaultValue={id} disabled={true}/>
            </Form.Item>
          <Form.Item label="Title" name={title}>
          <Input defaultValue={title} disabled={true}/>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
// import React, { useState, useEffect } from "react";
// import { Button, Modal, Timeline } from "antd";
// import TimelineItem from "antd/es/timeline/TimelineItem";

// // Timeline
// // mode	通过设置 mode 可以改变时间轴和内容的相对位置	left | alternate | right	-
// // pending	指定最后一个幽灵节点是否存在或内容	boolean | ReactNode	false
// // pendingDot	当最后一个幽灵节点存在時，指定其时间图点	ReactNode	<LoadingOutlined />
// // reverse	节点排序	boolean	false

// // Timeline.item
// // 时间轴的每一个节点。
// // 参数	说明	类型	默认值
// // color	指定圆圈颜色 blue、red、green、gray，或自定义的色值	string	blue
// // dot	自定义时间轴点	ReactNode	-
// // label	设置标签	ReactNode	-
// // position	自定义节点位置	left | right	-

// // 一个对象数组，对象有title和id属性，用时间线组件渲染
// // 题2，在上题基础上，每一个时间点的标题可点击，展示出一个弹窗，弹窗里渲染这个id。弹窗可关闭，
// // 题3，在题2基础上，弹窗数据用form去展示（title和id），切均不可编辑
// type timelineitem = {
//   id: number;
//   title: string;
// };
// type timelineitems = [data: timelineitem];
// const renderData = new Array(10)
//   .fill(1)
//   .map((a: string | number, index: number) => ({
//     id: index + 1,
//     title: index + "a",
//   }));

// export function TimeLineRender() {
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [id, setId] = useState<number>();

//   const handleok = () => {
//     setOpen(false);
//   };
//   const handlecancel = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       {renderData.map((a: timelineitem) => {
//         const onopen = () => {
//           setOpen(true);
//           setId(a.id);
//         };
//         return (
//           <Timeline>
//             <Timeline.Item>
//               <div onClick={onopen} key={a.id}>
//                 {a.title}
//               </div>
//             </Timeline.Item>
//           </Timeline>
//         );
//       })}
//       <Modal title="Title" open={open} onOk={handleok} onCancel={handlecancel}>
//         {id}
//       </Modal>
//     </div>
//   );
// }
