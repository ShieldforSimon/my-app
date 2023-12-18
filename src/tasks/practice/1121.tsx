import styled from "styled-components";
export function Icon() {
  return (
    <Outer>
      <Inner>
        <InSquareLeft />
        <InSquareRight />
        <InSquareBottomLeft />
        <InSquareBottomRight />

        <InSquareHalfLeft />
        <InSquareHalfRight />
        <InSquareHalfBottomLeft />
        <InSquareHalfBottomRight />

        <InLast>
          <ContentTop>
            <EnglishTitle />
            <ContentTopCenter>
              <InSquareSmallLeft />
              <InSquareSmallRight />

              <EnglishPoetryLeft />
              <ContentTopCenterLast />
              <EnglishPoetryRight />
            </ContentTopCenter>
            <EnglishTitle />
          </ContentTop>

          <ContentBottom />
        </InLast>
      </Inner>
    </Outer>
  );
}
const BasicStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Outer = styled(BasicStyle)`
  width: 300px;
  height: 500px;
  background-color: #e08b0e;
  border-radius: 10px;
  margin: 20px 40px;
`;
const Inner = styled(BasicStyle)`
  position: relative;
  width: 250px;
  height: 450px;
  border: 1px black solid;
`;
const InSquare = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border: 1px solid #e08b0e;
  z-index: 1;
`;
const InSquareLeft = styled(InSquare)`
  left: 0;
  top: 0;
  margin-top: -1px;
  margin-left: -1px;
`;
const InSquareBottomLeft = styled(InSquare)`
  left: 0;
  bottom: 0;
  margin-bottom: -1px;
  margin-left: -1px;
`;
const InSquareRight = styled(InSquare)`
  right: 0;
  top: 0;
  margin-top: -1px;
  margin-right: -1px;
`;
const InSquareBottomRight = styled(InSquare)`
  right: 0;
  bottom: 0;
  margin-bottom: -1px;
  margin-right: -1px;
`;
const InSquareHalf = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  border: 1px solid black;
  z-index: 1;
`;
const InSquareHalfBottomRight = styled(InSquareHalf)`
  right: 0;
  bottom: 0;
  margin-bottom: -1px;
  margin-right: -1px;
  border-bottom-color: #e08b0e;
  border-right-color: #e08b0e;
`;
const InSquareHalfBottomLeft = styled(InSquareHalf)`
  left: 0;
  bottom: 0;
  margin-bottom: -1px;
  margin-left: -1px;
  border-bottom-color: #e08b0e;
  border-left-color: #e08b0e;
`;
const InSquareHalfRight = styled(InSquareHalf)`
  right: 0;
  top: 0;
  margin-bottom: -1px;
  margin-right: -1px;
  border-top-color: #e08b0e;
  border-right-color: #e08b0e;
`;
const InSquareHalfLeft = styled(InSquareHalf)`
  left: 0;
  top: 0;
  margin-bottom: -1px;
  margin-left: -1px;
  border-top-color: #e08b0e;
  border-left-color: #e08b0e;
`;
const InLast = styled(BasicStyle)`
  flex-direction: column;
  width: 230px;
  height: 430px;
  border: 1px black solid;
  z-index: 2;
`;
const ContentTop = styled(BasicStyle)`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  height: 350px;
  width: 230px;
`;
const ContentTopCenter = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 350px;
  width: 180px;
  border: 1px solid black;
  border-top: none;
`;
const InSquareSmallStyle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border: 1px solid #e08b0e;
  z-index: 1;
`;
const InSquareSmallLeft = styled(InSquareSmallStyle)`
  left: 0;
  bottom: 0;
  margin-bottom: -1px;
  margin-left: -1px;
`;
const InSquareSmallRight = styled(InSquareSmallStyle)`
  right: 0;
  bottom: 0;
  margin-bottom: -1px;
  margin-right: -1px;
`;
const EnglishTitle = () => {
  return <TextStyle>UME HOUSE-UME HOUSE-UME HOUSE</TextStyle>;
};

const TextStyle = styled(BasicStyle)`
  display: block;
  text-align-last: justify;
  word-spacing: 1px;
  font-size: 13px;
  width: 15px;
  height: 350px;
  writing-mode: vertical-rl;
  text-align: justify-all;
  letter-spacing: 2px;
`;
const EnglishPoetryLeft = () => {
  return <PoetryStyle>爱清闲 爱天然 城外西湖 湖上有青山</PoetryStyle>;
};
const EnglishPoetryRight = () => {
  return <PoetryStyle>屋老一树梅花小 住个诗人 添个新诗料</PoetryStyle>;
};
const PoetryStyle = styled(BasicStyle)`
  justify-content: space-around;
  padding-top: 10px;
  text-align-last: justify;
  text-align: justify;
  writing-mode: vertical-lr;
  height: 320px;
  width: 30px;
  font-family: cursive;
  font-size: 17px;
  letter-spacing: 0;
  word-spacing: 12px;
`;
const ContentTopCenterLast = () => {
  return (
    <ContentTopCenterLastStyle>
      <Brand>小梅屋</Brand>
      <EnglishBrand>UME HOUSE</EnglishBrand>
      <BrandName>蜂蜜味梅饼</BrandName>
    </ContentTopCenterLastStyle>
  );
};

const EnglishBrand = styled.div`
  text-align: justify;
  text-align-last: justify;
  width: 75px;
  font-size: 12px;
  font-weight: 700;
`;
const Brand = styled(EnglishBrand)`
  word-spacing: 20px;
  font-size: 18px;
`;
const BrandName = styled(EnglishBrand)`
  writing-mode: vertical-rl;
  font-size: 54px;
`;
const ContentTopCenterLastStyle = styled(BasicStyle)`
  flex-direction: column;
  height: 320px;
  width: 90px;
  padding: 30px 10px 0;
  margin: 5px;
`;
const ContentBottom = () => {
  return (
    <ContentBottomStyle>
      <CircleLetterLeft>
        <b>闷</b>
      </CircleLetterLeft>
      <CircleLetterRight>
        <b>弘</b>
      </CircleLetterRight>
      <CircleLetterBottomLeft>
        <b>庵</b>
      </CircleLetterBottomLeft>
      <CircleLetterBottomRight>
        <b>一</b>
      </CircleLetterBottomRight>

      <ContentBottomT>
        净含量:<b>80</b>克
      </ContentBottomT>
      <ContentBottomB>小梅屋剧社</ContentBottomB>
    </ContentBottomStyle>
  );
};
const ContentBottomStyle = styled(BasicStyle)`
  flex-direction: column;
  position: relative;
  width: 200px;
`;
const CircleLetter = styled(BasicStyle)`
  position: absolute;
  width: 14px;
  height: 14px;
  border: 1px solid black;
  border-radius: 50%;
  font-family: cursive;
  font-weight: 500;
  font-size: 14px;
`;
const CircleLetterLeft = styled(CircleLetter)`
  top: 5px;
  left: 15px;
`;
const CircleLetterRight = styled(CircleLetter)`
  top: 5px;
  right: 15px;
`;
const CircleLetterBottomLeft = styled(CircleLetter)`
  bottom: 5px;
  left: 15px;
`;
const CircleLetterBottomRight = styled(CircleLetter)`
  bottom: 5px;
  right: 15px;
`;
const ContentBottomT = styled(EnglishBrand)`
  font-size: 18px;
  font-weight: 400;
  width: 120px;
  letter-spacing: 2px;
  padding-top: 2px;
`;
const ContentBottomB = styled(EnglishBrand)`
  letter-spacing: 2px;
  padding-top: 1px;
  width: 120px;
  font-family: cursive;
`;
