import react, { useEffect, useState } from "react";
import { Form, Input, InputNumber, Select } from "antd";
// 场景：商场进货单。以下是一个描述进货的对象：
// {
//   name:  “Apple”,
//   catalog: “fruit”,
//   taste: [“sweet”, “juciy”],
//   price: 10,
//     salePrice: 15,
//   count: 1000,
//   discount: 0.9
//
const catalogOptions = [
  "Aquatic products",
  "livestock products",
  "fruits",
  "vegetables",
  "daily processed foods",
  "general foods",
];
const tasteOptions = [
  "Sour",
  "sweet",
  "bitter",
  "spicy",
  "fragrant",
  "smelly",
  "soft",
  "hard",
  "glutinous",
  "numb",
  "crispy",
];
type catalogType = {
  name: string;
  catalog: string;
  taste: [string, string];
  price: number;
  salePrice: number;
  count: number;
  discount: number;
};

//
//
// - [ ] 请你选用合适的form组件，制作一个表单供商人填写，要求表意清楚（展示用中文），填写方便
// - [ ] 当用户填写时，实时展示此进货单总价和利润
export const PurchaseOrder = (commdity: catalogType): any => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [interest, setInterest] = useState<number>(0);

  return (
    <div>
      <Form
        form={form}
        title="Shopping List"
        onValuesChange={(x, y) => {
          form.getFieldsValue(true);
          setInterest(
            form.getFieldValue("count") * form.getFieldValue("salePrice"),
          );
        }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            { required: true, message: "please enter name" },
            { type: "string", message: "name can only be valid" },
          ]}
        >
          <input />
        </Form.Item>
        <Form.Item
          name="catalog"
          label="Catalog"
          rules={[{ required: true, message: "please choose catalog" }]}
        >
          <Select
            allowClear={true}
            style={{ width: "600px" }}
            placeholder={"please choose catalog"}
            options={catalogOptions.map((a) => ({ label: a, value: a }))}
          />
        </Form.Item>
        <Form.Item name="taste" label="Taste">
          <Select
            placeholder={"please choose catalog"}
            mode="multiple"
            allowClear
            style={{ width: "600px" }}
            options={tasteOptions.map((a) => ({ label: a, value: a }))}
          />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "please enter price" }]}
        >
          <InputNumber
            placeholder={"please  enter price"}
            style={{ width: "600px" }}
          />
        </Form.Item>
        <Form.Item
          name="salePrice"
          label="SalePrice"
          rules={[{ required: true, message: "please enter sale price" }]}
        >
          <InputNumber
            placeholder={"please  enter sale price"}
            style={{ width: "600px" }}
          />
        </Form.Item>
        <Form.Item
          name="count"
          label="Count"
          rules={[
            { required: true, message: "please enter count " },
            { type: "integer" },
          ]}
        >
          <InputNumber
            placeholder={"please  enter count"}
            style={{ width: "600px" }}
            min={1}
            max={99}
          />
        </Form.Item>
        <Form.Item
          name="discount"
          label="Discount"
          rules={[{ type: "integer" }]}
        >
          <InputNumber
            placeholder={"please  enter discount"}
            style={{ width: "600px" }}
            min={1}
            max={10}
          />
        </Form.Item>
      </Form>
      <div>总利润:{interest}RMB</div>
      <div>纯利润:{}RMB</div>
    </div>
  );
};
