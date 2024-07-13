import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const Wrapper = styled.div`
  width: 46vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 50px;
  @media (max-width: 575px) {
    width: 95%;
  }
`;

const Title = styled.div`
  font-size: 40px;
  @media (max-width: 575px) {
    font-size: 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: white;
  display: flex;
  box-shadow: 4px 4px 8px #c6c6c6;
  @media (max-width: 575px) {
    height: 180px;
  }
`;

const FlowerImage = styled.img`
  width: 40%;
  height: 100%;
  border: 1px solid gray;
  object-fit: cover;
`;

const FlowerInfo = styled.div`
  padding: 10px;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1vh;
  @media (max-width: 575px) {
    gap: 2vw;
  }
`;

const BottomText = styled.div`
  padding: 1vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1vh;
    @media (max-width: 575px) {
    gap: 1vw;
    padding: 1vw;
  }
`;

const ToText = styled.div`
  font-size: 2.5vw;
  color: #959090;
  font-family: "Italianno", cursive;
  font-weight: 400;
  font-style: normal;
  @media (max-width: 575px) {
    font-size: 4vw;
  }
`;

const FlowerName = styled.div`
  width: 100%;
  padding: 0 0 1vh 0;
  font-size: 1.6vw;
  font-weight: 500;
  border-bottom: 1px solid black;
  @media (max-width: 575px) {
    font-size: 3vw;
    padding: 0 0 1.5vw 0;
  }
`;

const Name = styled.div`
  font-size: 1.4vw;
  font-weight: 550;
  @media (max-width: 575px) {
    font-size: 2vw;
  }
`;


const DateText = styled.div`
  font-size: 1.3vw;
  line-height:1.2;
  color: gray;
  @media (max-width: 575px) {
    font-size: 1.9vw;
  }
`;

const Floriography = styled.div`
  font-size: 1.3vw;
  @media (max-width: 575px) {
    font-size: 2.1vw;
  }
`;

const FromText = styled.div`
  font-size: 2vw;
  color: #959090;
  font-family: "Italianno", cursive;
  font-weight: 400;
  font-style: normal;
  @media (max-width: 575px) {
     font-size: 3vw;
  }
`;

function TodayFlower(member) {
  const [flowerData, setFlowerData] = useState({
    flowerName: "",
    flowerPeriod: "",
    flowerLangu: "",
    flowerImg: "",
    flowerExplain:"",
  });

  const fetchData = async () => {
    const response = await axios.get(`https://emotionfeedback.site/main/today`);
    //console.log(response);
    setFlowerData({
      flowerName: response.data.flower,
      flowerPeriod: response.data.period,
      flowerLangu: response.data.flower_language,
      flowerImg: response.data.image,
      flowerExplain: response.data.explain,
    });

  };

  useEffect(() => {
    fetchData();
  }, []);

  const today = new Date();

  return (
    <Wrapper>
      <Title>오늘의 꽃</Title>
      <Container>
        <FlowerImage
          src={flowerData.flowerImg}
          alt={flowerData.flowerName}
        ></FlowerImage>
        <FlowerInfo>
          <TopText>
            <ToText>to.</ToText>
            <FlowerName>{today.getMonth() + 1}월 {today.getDate()}일</FlowerName>
            <Name>{flowerData.flowerName}</Name>
            <DateText>
              <br/>
              "{flowerData.flowerExplain}"
            </DateText>
          </TopText>
          <BottomText>
            <Floriography>"{flowerData.flowerLangu}"</Floriography>
            <FromText>from.</FromText>
          </BottomText>
        </FlowerInfo>
      </Container>
    </Wrapper>
  );
}

export default TodayFlower;
