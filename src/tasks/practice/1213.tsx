import react, { FC, useState } from "react";
import styled from "styled-components";
import { Input } from "antd";

export function TranslateMarkDown() {
  const [inputValue, setInputValue] = useState<string>("translate");
  return (
    <TranslateFrame>
      <Input width="200px" onChange={(e) => setInputValue(e.target.value)} />
      <MarkDownNote prop={inputValue} />
    </TranslateFrame>
  );
}
type MarkDownStyle = {
  prop: string;
};
const MarkDownNote: FC<MarkDownStyle> = ({ prop }) => {
  // prop="#Title1\n##Title2\nParagraph *bold* he";
  const titleArr = prop?.match(/(#{0,6})[^#]+[(\n)]/g);
  const titleArr1 = titleArr?.filter((x) => /#{6}/g.test(x));
  const titleArr2 = titleArr?.filter((x) => /#{5}(?!#)/g.test(x));
  const titleArr3 = titleArr?.filter((x) => /#{4}(?!#)/g.test(x));
  const titleArr4 = titleArr?.filter((x) => /#{3}(?!#)/g.test(x));
  const titleArr5 = titleArr?.filter((x) => /#{2}(?!#)/g.test(x));
  const titleArr6 = titleArr?.filter((x) => /#{1}(?!#)/g.test(x));
  const paragraphArr = prop
    .match(/(?<=\n)[^#\\s]*/g)
    ?.filter((i) => i !== "")
    ?.map((i) => i.replaceAll(/(\*)(.*?)(\*)/g, "<b>$2</b>"));
  return (
    <Content>
      {titleArr1?.map((i) => <H1 key={i}>i</H1>)}
      {titleArr2?.map((i) => <H2 key={i}>i</H2>)}
      {titleArr3?.map((i) => <H3 key={i}>i</H3>)}
      {titleArr4?.map((i) => <H4 key={i}>i</H4>)}
      {titleArr5?.map((i) => <H5 key={i}>i</H5>)}
      {titleArr6?.map((i) => <H6 key={i}>i</H6>)}
      {paragraphArr?.map((i) => <p key={i}>i</p>)}
    </Content>
  );
};
const H1 = styled.div`
  font-size: 40px;
  color: red;
`;
const H2 = styled.div`
  font-size: 35px;
  color: #b2513c;
`;
const H3 = styled.div`
  font-size: 30px;
  color: #b2963c;
`;
const H4 = styled.div`
  font-size: 26px;
  color: #79b23c;
`;
const H5 = styled.div`
  font-size: 24px;
  color: #3cb293;
`;
const H6 = styled.div`
  font-size: 22px;
  color: #3c6bb2;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  border: 2px solid #4f9832;
  width: 300px;
  height: 300px;
`;
const TranslateFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 600px;
  height: 300px;
  border: 2px solid goldenrod;
`;
