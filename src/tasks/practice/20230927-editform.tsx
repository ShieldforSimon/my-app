// 2. 在题1的基础上，最右侧还有一个detail按钮，点击后展示一个drawer，drawer里使用List组件渲染这个对象
// 1. 使用表格渲染一组对象（用你昨天代码的那组），最右侧有一个编辑按钮，点击编辑，打开弹窗，用form渲染这条数据。

import { Button, Drawer, List, Space } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import Column from "antd/es/table/Column";
import React, { useState } from "react";

type datatype = {
  key: number;
  name: number;
  content: string;
};

const data = new Array(10).fill(1).map((a: string, index: number) => ({
  key: index,
  name: index + 1,
  content: index + "命运",
}));

export const Renderform: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [linedata, setLinedata] = useState<datatype>({
    key: 0,
    name: 1,
    content: 0 + "命运",
  });

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const columns: ColumnsType<datatype> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Content",
      dataIndex: "content",
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Button
          onClick={() => {
            setOpen(true);
            setLinedata(record);
          }}
        >
          编辑
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data}></Table>
      <Drawer title="弹窗" placement="right" onClose={onClose} open={open}>
        <List
          bordered
          renderItem={(item: any) => (
            <List.Item>
              <List.Item.Meta
                title={<a>{item.title}</a>}
              />
            </List.Item>
          )}
        />
      </Drawer>
    </div>
  );
};
