import react from "react";
import styled from "styled-components";
import { MessageOutlined } from "@ant-design/icons";
// 11.23题（综合，主要训练业务转化为代码能力）
// 实现微信的聊天框界面（不需要输入这块的UI），请自己设计数据，通过组件去渲染。
// - [ ] 题1-4 整体UI正确，颜色、边距、边框、头像等一致。（难度1，耗时4）
// - [ ] 题5-6 数据定制合理、命名规范。（难度3，耗时1）
// - [ ] 题7-8 实现聊天框滚动效果，新增一个按钮，产出一条随机对话数据。（难度2，耗时1）
type messageType = {
  name: string;
  id: string;
  time: string;
  message: string;
};
const conversationData: messageType[] = [
  {
    name: "炯",
    id: "1",
    time: "12:40",
    message: "在干嘛?",
  },
  {
    name: "炯",
    id: "2",
    time: "12:43",
    message: "回话?",
  },
  {
    name: "东",
    id: "3",
    time: "12:59",
    message: "在拯救世界",
  },
  {
    name: "炯",
    id: "4",
    time: "13:05",
    message: "怎么拯救?",
  },
  {
    name: "东",
    id: "5",
    time: "15:32",
    message:
      "千年发展目标没有关注社会公正与不平等问题，因而饱受诟病。根据联合国对于千年发展目标取得的进展评估显示，最弱势的社会群体包括最贫穷的社会成员以及那些因性别、年龄、残疾或种族问题而被置于弱势地位的人口，他们的需求频频受到忽视。还有一种批评意见认为，千年发展目标的制定未能充分咨询目标受益者的看法。",
  },
];
export function WeChat() {
  return (
    <PersonalChatFrame>
      <TopFrame>
        <TopFrameInterlocutor>囧</TopFrameInterlocutor>
        <TopFrameOperation>
          <b>...</b>
        </TopFrameOperation>
      </TopFrame>

      <TalkFrame>
        {conversationData.map((x: messageType) => (
          <EveryConversationData>
            <EveryConversationTime>{x.time}</EveryConversationTime>
            <EveryConversationItems
              style={{
                flexFlow: `${x.name}` === "东" ? "row-reverse" : "row",
              }}
            >
              <EveryConversationAvatar>
                {<MessageOutlined style={{ fontSize: 25 }} />}
              </EveryConversationAvatar>
              <EveryConversationMessage
                style={{
                  backgroundColor:
                    `${x.name}` === "东" ? "rgb(100 225 100)" : "white",
                }}
              >
                {x.message}
              </EveryConversationMessage>
            </EveryConversationItems>
          </EveryConversationData>
        ))}
      </TalkFrame>

      <InputFrame></InputFrame>
    </PersonalChatFrame>
  );
}
const BasicDiv = styled.div`
  background-color: #f6f6f6;
  border-radius: 10px;
  border-width: 0;
  width: 560px;
  display: flex;
`;

const EveryConversationData = styled(BasicDiv)`
  border-radius: 0;
  flex-direction: column;
  padding: 10px;
  align-items: center;
`;
const EveryConversationTime = styled(EveryConversationData)`
  font-size: 12px;
  width: fit-content;
  height: 10px;
  align-content: center;
  justify-content: center;
  color: gray;
`;
const EveryConversationItems = styled(BasicDiv)`
  border-width: 0;
  flex-direction: row;
  width: 520px;
`;
const EveryConversationAvatar = styled(BasicDiv)`
  font-size: 25px;
  width: 40px;
  height: 40px;
  padding-top: 0;
  margin-top: 0;
  border-width: 0;
  flex-direction: column;
  text-align: justify;
  justify-content: flex-start;
  align-items: center;
`;
const EveryConversationMessage = styled(BasicDiv)`
  background-color: white;
  border-radius: 5px;
  border-width: 0;
  width: fit-content;
  max-width: 300px;
  font-size: 15px;
  font-weight: 700;
  padding: 7px;
  font-family: Fangsong, serif;
  height: max-content;
`;
const InputFrame = styled(BasicDiv)`
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  flex-direction: row;
  height: 150px;
  width: 558px;
  top: 0;
  justify-content: space-between;
`;
const TalkFrame = styled(BasicDiv)`
  border-radius: 0;
  height: 320px;
  border: 1px solid lightgray;
  flex-direction: column;
  overflow: scroll;
`;
const TopFrame = styled(BasicDiv)`
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  flex-direction: row;
  align-items: center;
  height: 52px;
  top: 0;
  justify-content: space-between;
`;
const TopFrameInterlocutor = styled(BasicDiv)`
  font-size: 18px;
  width: auto;
  height: 52px;
  margin-left: 0;
  padding-left: 20px;
  font-family: fangsong;
`;
const TopFrameOperation = styled(BasicDiv)`
  font-size: 25px;
  margin-right: 0;
  height: 52px;
  width: auto;
  padding-right: 10px;
`;

const PersonalChatFrame = styled(BasicDiv)`
  position: relative;
  margin-top: 100px;
  margin-left: 100px;
  flex-direction: column;
  height: 550px;
  border: 1px solid lightgray;
  box-shadow: black;
  align-items: center;
  justify-content: center;
`;
