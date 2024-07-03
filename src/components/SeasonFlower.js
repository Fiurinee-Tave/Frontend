import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from 'axios';
import FlowerDetail from "../components/FlowerDetail";


const Wrapper = styled.div`
    width: 100vw;
    height:90vh;
    display: flex;
    padding: 3vh 12vw;
    align-items: center;
    flex-direction: column;
    @media (max-width: 575px) {
    gap:1vh;
     height:45vh;
     padding: 0px 70px;
    }
`;

const InWrapper = styled.div`
    gap:1vw;
    width: 80vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:20px 0.5vw 10px 0.5vw;
    @media (max-width: 575px) {
      gap:1vw;
      width: 70vw;
      height: 38vh;
      padding:20px 0.5vw 0px 0.5vw;
  }
`;


const Title = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  @media (max-width: 575px) {
    width: 100%;
    height: 5vh;
    font-size: 20px;
    justify-content: left;
  }
`;

const Line1 = styled.div`
  flex:2.8;
  height: 78vh;
  position: relative;
    @media (max-width: 575px) {
     height:45vh;
    }
`;

const FlowerImage1 = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Line2 = styled.div`
flex:1.2;
height: 76vh;
gap:2vh;
display: flex;
flex-direction: column;
position: relative;
@media (max-width: 575px) {
     height:44vh;
    }
`;

const FlowerImage2 = styled.img`
    width: 100%;
    height: 50%;
    position: absolute;
`;

const Image23 = styled.div`
    width: 100%;
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;  
`;



const FlowerImage3 = styled.img`
  width: 100%;
  height: 50%;
  position: absolute;
`;

const Line3 = styled.div`
flex:2;
height: 76vh;
gap: 2vh;
display: flex;
flex-direction: column;
position: relative;
@media (max-width: 575px) {
     height:44vh;
    }
`;

const Image4 = styled.div`
    width: 100%;
    flex:2;
    display: flex;
    justify-content: center;
    align-items: center;  
`;


const FlowerImage4 = styled.img`
    width: 100%;
    height: 67%;
    position: absolute;

`;

const Image5 = styled.div`
    width: 100%;
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;  
`;

const FlowerImage5 = styled.img`
  width: 100%;
  height: 33%;
  position: absolute;
`;



function SeasonFlower(member) {
  const [seasonData0, setSeasonData0] = useState([]);
  const [seasonData1, setSeasonData1] = useState([]);
  const [seasonData2, setSeasonData2] = useState([]);
  const [seasonData3, setSeasonData3] = useState([]);
  const [seasonData4, setSeasonData4] = useState([]);
  
  
  const fetchData = async () => {
    const response = await axios.get(
      `http://3.36.169.209:8080/main/season`
    );

    console.log(response.data);
    console.log(response.data[0]);
    setSeasonData0(response.data[0]);
    setSeasonData1(response.data[1]);
    setSeasonData2(response.data[2]);
    setSeasonData3(response.data[3]);
    setSeasonData4(response.data[4]);

  }

    useEffect(() => {
      fetchData();
    },[]);



    return (
        <Wrapper>
          <Title>시즌꽃</Title>
          <InWrapper>
            <Line1>
            <FlowerImage1 src={seasonData0.image}></FlowerImage1>
            <FlowerDetail name={seasonData0.flower} period={seasonData0.period} flower_lang={seasonData0.flower_language} height="100%" width="100%" ></FlowerDetail>
            </Line1>
            <Line2>
              <Image23>
                <FlowerImage2 src={seasonData1.image}></FlowerImage2>
                <FlowerDetail name={seasonData1.flower} period={seasonData1.period} flower_lang={seasonData1.flower_language} height="50%" width="100%" ></FlowerDetail>
                </Image23>
                <Image23>
                <FlowerImage3 src={seasonData2.image}></FlowerImage3>
                <FlowerDetail name={seasonData2.flower} period={seasonData2.period} flower_lang={seasonData2.flower_language} height="50%" width="100%" ></FlowerDetail>
                </Image23>
            </Line2>
            <Line3>
              <Image4>
            <FlowerImage4 src={seasonData3.image}></FlowerImage4>
            <FlowerDetail name={seasonData3.flower} period={seasonData3.period} flower_lang={seasonData3.flower_language} height="67%" width="100%"></FlowerDetail>
            </Image4>
            <Image5>
            <FlowerImage5 src={seasonData4.image}></FlowerImage5>
            <FlowerDetail name={seasonData4.flower} period={seasonData4.period} flower_lang={seasonData4.flower_language}height="33%" width="100%"></FlowerDetail>
            </Image5>
            </Line3>
          </InWrapper>
        </Wrapper>
    );
  }
  
  export default SeasonFlower;