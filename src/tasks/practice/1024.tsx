import react, { useState } from "react";
import { Button, Drawer, Form, Input, Radio, Select, Tag } from "antd";
import React from "react";
// 综合题(90分钟)
// 使用antd, 写一个按钮, 按钮点击后打开弹窗, 弹窗里是一个个人信息录入表单,包含以下字段
// name	必填, 只能由数字字母组成
// age	必填, 只能是数字且大于0小于150
// gender	必填, 只有男女两个值可选
// dick	非必填, 下拉选择器, 可从5-30选
// like.gender	非必填, 只有男女两个值可选
// like.type	非必填, 普通文本, 长度小于100
// 注: like是个对象
// {
//   name: ‘xas1’,
// …,
//   like: {
//     gender: “男”,
//     type: ‘’
//   }
// }
export const ButtonDrawer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const drawerOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [likeGender, setLikeGender] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [LovedGender, setLovedGender] = useState<string | null>(null);
  const [tagData, setTagData] = useState(null);

  const dickOptions = new Array(26).fill(1).map((item, index) => ({
    label: index + 5,
    value: 5 + index,
  }));

  const [form] = Form.useForm<{ name: string; age: number }>();

  async function postForm(value: any) {
    let res = await fetch("www.google.com", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    let response = await res.json();
    console.log(response);
  }
  const onFinish = (values: any) => {
    postForm(values);
  };

  const handleGenderChange = (e: any) => {
    setGender(e.target.value);
  };

  const handleLovedGenderChange = (e: any) => {
    setLovedGender(e.target.value);
    if (LovedGender && gender) {
      form.getFieldValue(gender === "man" ? "woman" : "man");
    }
  };

  const onValuesField = (item: any) => setTagData(item.target.value);

  return (
    <>
      <Button type="primary" onClick={drawerOpen}>
        点我
      </Button>
      <Drawer
        title="Person Message Edit"
        open={open}
        onClose={onClose}
        width={500}
      >
        <Form name="basic" autoComplete="off" form={form} onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter name ",
              },
              {
                pattern: /^[A-Za-z0-9]*$/,
                message: "Name can only contain letters and numbers",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: "please input age",
              },
              {
                type: "number",
                max: 149,
                min: 1,
                message: " age can only from 0 to 150",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="ValuesField"
            name="valuesField"
            rules={[
              {
                required: true,
                message: "Please enter valuesField ",
              },
              {
                pattern: /^(?!abc)[A-Za-z]+(,[A-Za-z]+)*$/,
                message: "逗号分隔 且只能是单词 不能以xyz开头",
              },
            ]}
          >
            <Input
              placeholder="此字段需要输入以逗号分隔的字符串"
              onChange={onValuesField}
            />
          </Form.Item>
          <Form.Item label="Tags" name="tags">
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Cock"
            name="cock"
            rules={[
              {
                type: "number",
                max: 30,
                min: 5,
                message: "Please enter cock from5-30",
              },
            ]}
          >
            <Select defaultValue="cockLength" options={dickOptions} />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please enter your gender" }]}
          >
            <Radio.Group
              value={likeGender}
              defaultValue="man"
              onChange={handleGenderChange}
            >
              <Radio value="man">man</Radio>
              <Radio value="woman">woman</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Loved Gender" name="loved gender">
            <Radio.Group onChange={handleLovedGenderChange}>
              <Radio value="man">man</Radio>
              <Radio value="woman">woman</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Loved Type"
            name="like.type"
            rules={[
              {
                type: "string",
                max: 150,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
      {/*// name 必填, 只能由数字字母组成 // age 必填, 只能是数字且大于0小于150 //*/}
      {/*gender 必填, 只有男女两个值可选 // dick 非必填, 下拉选择器, 可从5-30选 //*/}
      {/*like.gender 非必填, 只有男女两个值可选 // like.type 非必填, 普通文本,*/}
      {/*长度小于100*/}
    </>
  );
};
