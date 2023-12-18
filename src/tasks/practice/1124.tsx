// 请写一个组件，设计Wifi数据。并渲染出此Wifi面板
// - [ ] 题1-4 整体UI正确，颜色、边距、边框等一致。（难度2，耗时4）
// - [ ] 题5-6 数据定制合理、命名规范。（难度2，耗时1）
// - [ ] 题7-8 每隔2秒，其他网络中的数据会随机变化。（难度2，耗时1）
import styled from "styled-components";
import {
  CheckOutlined,
  LeftOutlined,
  LockOutlined,
  RightOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { Switch } from "antd";
import { useEffect, useState } from "react";

export function WiFiBoard() {
  const networkNamesArr = new Array(5).fill(1).map((item, index) => ({
    name: index,
    id: "abc" + index,
    checked: false,
  }));
  const [networkData, setNetworkData] = useState(networkNamesArr);
  useEffect(() => {
    const changeArr = setInterval(() => {
      setNetworkData(
        networkData.map((x) => {
          x.name += Math.floor(Math.random() * 11 - 5);
          return x;
        }),
      );
    }, 2000);
    return () => {
      clearInterval(changeArr);
    };
  }, []);
  return (
    <Container>
      <TitleDiv
        style={{
          fontSize: 18,
          padding: 4,
          marginLeft: 16,
          alignItems: "center",
        }}
      >
        <LeftOutlined />
        <RightOutlined
          style={{
            marginLeft: 14,
            marginRight: 14,
            color: "lightgray",
          }}
        />
        <SettingTitle>
          <b>Wi-Fi</b>
        </SettingTitle>
      </TitleDiv>

      <CheckedNetworkItem>
        <CheckedNetworkItemTop>
          <CheckedNetworkItemTopLeft>
            <WifiOutlined
              style={{
                fontSize: 20,
                padding: 4,
                color: "white",
                backgroundColor: "#3e74ea",
                borderRadius: "5px",
                marginLeft: 10,
              }}
            />
            <SettingTitle
              style={{
                fontSize: 14,
              }}
            >
              Wi-Fi
            </SettingTitle>
          </CheckedNetworkItemTopLeft>
          <CheckedNetworkItemTopRight>
            <Switch defaultChecked style={{}} />
          </CheckedNetworkItemTopRight>
        </CheckedNetworkItemTop>

        <CheckedNetworkItemTop>
          <CheckedNetworkItemTopLeft
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: 10,
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: 13,
              }}
            >
              abs
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#2dce2d",
                }}
              ></div>
              <div
                style={{
                  marginLeft: 10,
                  fontSize: 14,
                }}
              >
                Connected
              </div>
            </div>
          </CheckedNetworkItemTopLeft>
          <CheckedNetworkItemTopRight
            style={{
              width: 160,
              justifyContent: "space-around",
            }}
          >
            <LockOutlined
              style={{
                fontSize: 12,
              }}
            />
            <WifiOutlined
              style={{
                fontSize: 14,
              }}
            />
            <SignalCircle>Details...</SignalCircle>
          </CheckedNetworkItemTopRight>
        </CheckedNetworkItemTop>
      </CheckedNetworkItem>

      {/*第二部分*/}

      <NetworkTitle
        style={{
          position: "absolute",
          top: 180,
        }}
      >
        <b>Known Networks</b>
      </NetworkTitle>
      <CheckedNetworkItemTop
        style={{
          position: "absolute",
          top: 210,
        }}
      >
        <OtherNetWorkFrameLeft>
          abs
          <CheckOutlined style={{ marginRight: 4 }} />
        </OtherNetWorkFrameLeft>
        <OtherNetWorkFrameRight>
          <LockOutlined
            style={{
              fontSize: 12,
            }}
          />
          <WifiOutlined
            style={{
              fontSize: 10,
            }}
          />
          <OtherNetWorkSignalCircle>...</OtherNetWorkSignalCircle>
        </OtherNetWorkFrameRight>
      </CheckedNetworkItemTop>
      <NetworkTitle
        style={{
          position: "absolute",
          top: 280,
        }}
      >
        <b>Other Networks</b>
      </NetworkTitle>
      <div style={{ position: "absolute", top: 320, flexFlow: "scroll" }}>
        {networkData.map((item) => (
          <CheckedNetworkItemTop style={{ marginTop: 0 }}>
            <OtherNetWorkFrameLeft key={item.id}>
              {item.name}
            </OtherNetWorkFrameLeft>
            <OtherNetWorkFrameRight style={{ width: 60 }}>
              <LockOutlined
                style={{
                  fontSize: 12,
                }}
              />
              <WifiOutlined
                style={{
                  fontSize: 10,
                }}
              />
            </OtherNetWorkFrameRight>
          </CheckedNetworkItemTop>
        ))}
      </div>
    </Container>
  );
}

const BasicDiv = styled.div`
  border-radius: 10px;
  width: 500px;
  background-color: #efefef;
`;
const InnerBasicDiv = styled.div`
  border-radius: 10px;
  width: 460px;
  border-collapse: collapse;
  background-color: #efefef;
`;

const CheckedNetworkItemTop = styled(InnerBasicDiv)`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: solid 1px lightgray;
  margin-bottom: -1px;
  background-color: #efefef;
`;

const CheckedNetworkItemTopLeft = styled(InnerBasicDiv)`
  height: 50px;
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const CheckedNetworkItemTopRight = styled(InnerBasicDiv)`
  height: 50px;
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const CheckedNetworkItem = styled(InnerBasicDiv)`
  height: 100px;
  position: absolute;
  top: 50px;
`;
const SettingTitle = styled(InnerBasicDiv)`
  width: fit-content;
  font-size: 16px;
`;
const KnownNetworkItem = styled(InnerBasicDiv)`
  height: 180px;
`;
const NetworkTitle = styled(InnerBasicDiv)`
  font-size: 13px;
  height: 25px;
  background-color: #f6f6f6;
  padding: 5px;
`;
const Container = styled(BasicDiv)`
  position: relative;
  margin-top: 50px;
  margin-left: 50px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  background-color: #f6f6f6;
`;
const TitleDiv = styled(BasicDiv)`
  position: absolute;
  height: 30px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  top: 0;
  left: 0;
  width: 460px;
  background-color: #f6f6f6;
`;
const SignalCircle = styled.div`
  background-color: white;
  width: 60px;
  font-size: 13px;
  height: 16px;
  border-radius: 10px;
  padding: 5px;
  border: 1px solid #f6f6f6;
  box-shadow: 0 1px 0 #c2c2c2;
`;
const OtherNetWorkSignalCircle = styled(SignalCircle)`
  width: 6px;
  height: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid grey;
  box-shadow: 0 0 0;
`;
const OtherNetWorkFrameLeft = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  width: 200px;
  height: 50px;
  font-size: 14px;
  margin-left: 48px;
`;

const OtherNetWorkFrameRight = styled(CheckedNetworkItemTopRight)`
  width: 80px;
  justify-content: space-around;
  padding-right: 14px;
`;
