import styled from "styled-components";
import MainImage from "../components/MainImage";
import TodayFlower from "../components/TodayFlower";
import FlowerShop from "../components/FlowerShop";


const Wrapper = styled.div`
  width: 100%;

`;

const Line2 = styled.div`
  width: 100%;
  display:flex;
  justifyContent:'space-between';
  `;

function Mainpage() {
  

  return (<Wrapper>
    <MainImage/>
    <Line2>
    <TodayFlower/>
    <FlowerShop/>
    </Line2>
    </Wrapper>);
}

export default Mainpage;
