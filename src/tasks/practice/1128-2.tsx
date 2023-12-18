import react from "react";
import styled from "styled-components";
export function TitleThree() {
  return (
    <Container>
      <ContainerOne>
        <div style={{ fontSize: 46 }}>兰格格</div>
        <div style={{ fontSize: 14 }}>草原酸奶 活的益生菌</div>
      </ContainerOne>
      <ContainerTwo>八旗菌凝酪</ContainerTwo>
      <ContainerThree>
        <div
          style={{
            width: 20,
            height: 18,
            borderRight: "2px dotted #11118c",
            marginRight: 3,
          }}
        ></div>
        EIGHT PROBIOTICS YOGURT
        <div
          style={{
            width: 20,
            height: 18,
            borderLeft: "2px dotted #11118c",
            marginLeft: 3,
          }}
        ></div>
      </ContainerThree>
      <ContainerFour>
        <div
          style={{
            width: 55,
            height: 70,
            borderRight: "2px dotted #11118c",
            marginRight: 3,
          }}
        >
          <div style={{ fontSize: 12 }}>每桶含有</div>益生菌活菌数
          <div
            style={{
              fontSize: 12,
              letterSpacing: -2,
              color: "red",
              fontWeight: 800,
              transform: "scale(0.9,1.2)",
            }}
          >
            700亿CFU
          </div>
        </div>
        <div
          style={{
            transform: "scale(1,4)",
            width: 160,
            height: 60,
            top: 400,
            marginTop: 85,
            marginLeft: 13,
          }}
        >
          凝固型风味发酵乳
        </div>
        <div
          style={{
            width: 55,
            borderLeft: "2px dotted #11118c",
            marginLeft: 3,
            display: "flex",
            flexDirection: "column",
            fontWeight: 500,
            alignItems: "center",
          }}
        >
          <div
            style={{
              transform: "scale(1,1.5)",
              marginBottom: 10,
            }}
          >
            净含量
          </div>
          <div
            style={{
              transform: "scale(1,2)",
            }}
          >
            760g
          </div>
        </div>
      </ContainerFour>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ContainerOne = styled.div`
  color: white;
  background-color: #11118c;
  padding: 20px 10px 1px 10px;
`;
const ContainerTwo = styled.div`
  color: #11118c;
  background-color: white;
  padding: 15px 10px 0 10px;
  font-size: 65px;
  font-weight: 900;
`;
const ContainerThree = styled.div`
  color: #11118c;
  background-color: white;
  padding: 0 10px 0 10px;
  font-size: 13px;
  font-weight: 900;
  width: 300px;
  height: 16px;
  border: 1px solid #11118c;
  border-left-width: 0;
  border-right-width: 0;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: scale(1, 1.3);
`;
const ContainerFour = styled.div`
  color: #11118c;
  background-color: white;
  margin-top: 180px;
  width: 260px;
  height: 70px;
  border: 1px solid #11118c;
  border-left-width: 0;
  border-right-width: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
