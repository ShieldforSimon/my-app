import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import React, { useState } from 'react';

export const Buttonitems: React.FC = () => {
  const [size, setSize] = useState<SizeType>('large');

  return (
    <>
      <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
      </Radio.Group>
      <br />
      <br />
      <br />
      <Button type="primary" icon={<DownloadOutlined />} size={size}>
        Download
      </Button>
    </>
  );
};
// 18:34
// All iCloud
// 11 September 2023 at 14:30
// 12号题目(周二) :
// 1.学会使用npm安装ant-desgin，阅读一遍ant-
// design文档
// 2.把所有ant-desgin的组件浏览一遍 (背下来组件名(单词),如输入框叫Input)，晚上抽查对应的名字 (全部)
// 3.在工程中使用一个button组件画一个按钮


// 13号题目(周三) :
// 1.尝试使用ant-design中的table组件渲染一组数据2.尝试使用ant-design中select组件渲染一组对象，并且当用户选择一个值，在控制台输出这个对象
// 3.记忆组件名字
// 14号题目(周四)
// 1.巩固table组件的参数
// 2.使用form组件，以及其他合适的组件，渲染个填写身份证的表单，包括不限于:身份证号，姓名，住址，出生年月，每当数据发生变化的时候，控制台输出表单的值
// 15号题目(周五)1.巩固form组件，使用Form.List2.自定义一个form组件
