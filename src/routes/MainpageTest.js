import styled from "styled-components";
import MainImage from "../components/MainImage";
import TodayFlowerTest from "../components/TodayFlowerTest";
import FlowerShop from "../components/FlowerShop";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

const Line2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function MainpageTest() {
  return (
    <Wrapper>
      <MainImage />
      <Line2>
        <TodayFlowerTest />
        <FlowerShop />
      </Line2>
    </Wrapper>
  );
}

export default MainpageTest;
