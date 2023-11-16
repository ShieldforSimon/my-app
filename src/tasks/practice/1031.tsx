import react, { useEffect, useRef, useState } from "react";
import { Button, Form, Input, Radio, Select, Tooltip } from "antd";
import React from "react";
import { QuestionOutlined } from "@ant-design/icons";

// Ant题：
// {
//   name: “apple”,
//   size: “small”,    // size:  small, medium, large
//   eatable: true,
//     taste: “SWEET”,   // 如果不能吃，这个字段不展示，用户自由输入
//   xyz: “”  // 输入框，禁用
// }
// - [ ] 表单渲染后的1秒后，开始启动在上题标题后面，增加一个时间显示，时间每隔5秒刷新，如：Small-Apple: 5s
// - [ ] 当上述标题（标题整体Small-Apple: 5s）发生变化时，将标题整体填入xyz字段

export const RenderForm: React.FC = () => {
  const [form] = Form.useForm();
  const [rendering, setRendering] = useState<boolean>(true);
  const [renderTimer, setRenderTimer] = useState<boolean>(true);
  const [renderTasteField, setRenderTasteField] = useState<boolean>(false);
  const [timeCount, setTimeCount] = useState<number>(0);

  const [renderXyz, setRenderXyz] = useState<boolean>(true);
  let previousTimer = useRef<any>();

  useEffect(() => {
    setTimeout(() => {
      clearInterval(previousTimer.current);
      previousTimer.current = setInterval(() => {
        setTimeCount(timeCount + 5);
      }, 5000);
    }, 1000);
  }, [timeCount]);

  useEffect(() => {
    setTimeout(() => {
      setRenderXyz(false);
    }, 10000);
  }, []);

  return (
    <Form
      form={form}
      onValuesChange={(x, y) => {
        form.setFieldValue(
          "xyz",
          form.getFieldValue("size") + "-" + form.getFieldValue("name"),
        );
        setRenderTasteField(form.getFieldValue("eatable"));
      }}
    >
      <Form.Item name="xyz" label="XYZ" style={{ width: 250 }}>
        <Input disabled={renderXyz} />
        {renderTimer && <div>:{timeCount}</div>}
      </Form.Item>
      <Form.Item
        name="name"
        label="Name"
        style={{ width: 250 }}
        rules={[{ required: true, message: "please input name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="size"
        label="Size"
        style={{ width: 250 }}
        rules={[{ required: true, message: "please choose size" }]}
      >
        <Select
          placeholder="choosed size"
          options={["small", "medium", "large"].map((item) => ({
            label: item,
            value: item,
          }))}
        />
      </Form.Item>
      <Form.Item
        name="eatable"
        label={
          <Tooltip title="this field can influence field named taste">
            Eatable
            <QuestionOutlined />
          </Tooltip>
        }
        style={{ width: 250 }}
      >
        <Radio.Group defaultValue={false}>
          <Radio value={true}>yes</Radio>
          <Radio value={false}>no</Radio>
        </Radio.Group>
      </Form.Item>
      {renderTasteField && (
        <Form.Item name="taste" label="Taste" style={{ width: 250 }}>
          <Input />
        </Form.Item>
      )}
    </Form>
  );
};
