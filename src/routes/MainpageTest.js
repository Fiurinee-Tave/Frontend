import styled from "styled-components";
import MainImage from "../components/MainImage";
import TodayFlowerTest from "../components/TodayFlowerTest";
import FlowerShopTest from "../components/FlowerShopTest";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

const Line2 = styled.div`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
`;

function MainpageTest() {
  return (
    <Wrapper>
      <MainImage />
      <Line2>
        <TodayFlowerTest />
        <FlowerShopTest />
      </Line2>
    </Wrapper>
  );
}

export default MainpageTest;
