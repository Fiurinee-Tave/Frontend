import styled from "styled-components";
import MainImage from "../components/MainImage";
import TodayFlower from "../components/TodayFlower";
import FlowerShop from "../components/FlowerShop";
import SeasonFlower from "../components/SeasonFlower";
import { useMediaQuery } from "react-responsive";

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
  margin: 0 100px 0px 100px;
  justify-content: center;
`;

const MobileLine = styled.div`
width: 100%;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

function Mainpage() {
  const isDesktopOrMobile = useMediaQuery({query: '(max-width:575px)'});
  return (
    <Wrapper>
      <MainImage />
      {isDesktopOrMobile !== true?
      <>
      <Line2>
        <TodayFlower />
        <FlowerShop />
      </Line2>
      <SeasonFlower />
      </>
      :
      <>
        <TodayFlower />
        <FlowerShop />
        <SeasonFlower />
      </>
      }
    </Wrapper>
  );
}

export default Mainpage;
