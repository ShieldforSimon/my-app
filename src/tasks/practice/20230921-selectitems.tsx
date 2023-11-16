import { Select } from "antd";
import React, { useState } from "react";


const handleChange = (X: string) => {
  console.log(X);
};

export const Selectitems: React.FC = () => (
  <>
    <Select
      defaultValue="刘东"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        {
          value: "ljz",
          label: "刘炯知"
        },
        {
          value: "ld",
          label: "刘东",
        },
      ]}
    />
  </>
);
