// - [ ] 使用styled-components和react，实现以下组件（antd的segment），输入一个参数options：要求样式精确一模一样
import React, { useState } from "react";
import styled from "styled-components";

const AllFrame = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
  height: auto;
  background-color: lightgray;
`;
const ButtonItem = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 30px;
  font-size: 14px;
  border: 0.5px solid lightgray;
  border-radius: 2px;
  margin: 2px;
  background-color: #262626;
  transition: background-color 1s;
`;
export function ButtonSegment() {
  const [checkedDay, setCheckedDay] = useState<string | null>(null);
  const optionData = ["daily", "weekly", "monthly", "quarterly", "yearly"].map(
    (item) => ({ label: item, value: item }),
  );
  return (
    <AllFrame>
      {optionData.map((item) => (
        <ButtonItem
          key={item.label}
          onClick={() => {
            setCheckedDay(item.label);
          }}
          style={{
            backgroundColor: checkedDay === item.label ? "white" : "lightgray",
          }}
        >
          {item.value}
        </ButtonItem>
      ))}
    </AllFrame>
  );
}
