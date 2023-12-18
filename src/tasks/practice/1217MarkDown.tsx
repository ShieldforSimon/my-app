import react, { FC, useState } from "react";
import React from "react";
import { Button, List } from "antd";
import displayName = List.displayName;

type MarkDownProps = {
  content: string;
  onClearFormat: () => void;
};
const MarkDown: React.FC<MarkDownProps> = ({ content, onClearFormat }) => {
  const lines = content.split("\n");
  return (
    <div>
      {lines.map((line: string, index) => {
        if (line.trim().startsWith("#")) {
          const level = (line.match(/^#+/) || [""])[0].length + 1;
          const Tag = `h${level}` as React.ElementType;
          return <Tag key={index}>{line.substring(level).trim()}</Tag>;
        } else {
          // const boldText = line.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
          const a = line.replace(
            /\*(.*?)\*/g,
            (_: string, match: string) => `<strong>${match}</strong>`,
          );
          return <p key={index} dangerouslySetInnerHTML={{ __html: a }}></p>;
        }
      })}
      <Button onClick={onClearFormat}>清除格式</Button>
    </div>
  );
};
export const Preview: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputValue = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleClearFormat = () => {
    const clearText = inputValue.replace(/[#*]/g, "");
    setInputValue(clearText);
  };
  return (
    <div style={{ display: "flex" }}>
      <textarea
        value={inputValue}
        onChange={handleInputValue}
        style={{ width: "50%", height: "300px", padding: "10px" }}
      />
      <MarkDown content={inputValue} onClearFormat={handleClearFormat} />
    </div>
  );
};
