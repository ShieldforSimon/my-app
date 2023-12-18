import styled from "styled-components";
import react from "react";
import axios from "axios";

export function CssPractice() {
  let url = window.location.href;
  let domain = window.location.host;
  let port = location.port;
  console.log(url, domain, port);
  return (
    <Container>
      <div></div>
      <Right></Right>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  border: 3px solid blue;
  margin-top: 300px;
  margin-left: 300px;
  display: flex;
`;
const Child = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: #e08b0e 2px solid;
  box-sizing: border-box;
`;
const Left = styled(Child)`
  align-self: center;
`;
const Right = styled(Child)``;

axios.get("www.baidu.com").then(() => {
  axios.get("www.baidu.com").then(() => {
    axios.get("www.baidu.com").then((r) => console.log("3次请求全部成功"));
  });
});

async function getRequest() {
  let firstRes = await axios.get("www.baidu.com");
  if (firstRes) {
    let SecondRes = await axios.get("www.baidu.com");
    if (SecondRes) {
      let thirdRes = await axios.get("www.baidu.com");
    }
  }
}
function getData() {
  return axios.get("www.baidu.com");
}
Promise.all([getData(), getData(), getData()]).then((data) => {
  console.log({ data });
});
