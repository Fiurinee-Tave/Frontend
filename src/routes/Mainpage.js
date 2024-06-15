import styled from "styled-components";
import MainImage from "../components/MainImage";
import TodayFlower from "../components/TodayFlower";
import FlowerShop from "../components/FlowerShop";
import SeasonFlower from "../components/SeasonFlower";

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
  margin: 0 100px 50px 100px;
  justify-content: center;
`;

function Mainpage() {
  return (
    <Wrapper>
      <MainImage />
      <Line2>
        <TodayFlower />
        <FlowerShop />
      </Line2>
      <SeasonFlower />
    </Wrapper>
  );
}

export default Mainpage;
