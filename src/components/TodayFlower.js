import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding:0 50px;
  @media (max-width: 575px) {
    width: 95%;
  }
`;

const Title = styled.div`
  font-size: 40px;
  @media (max-width: 575px) {
      font-size:20px;
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
  gap: 10px;
`;

const BottomText = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
`;

const ToText = styled.div`
  font-size: 22px;
  color: #959090;
  @media (max-width: 575px) {
      font-size:16px;
  }
`;

const FlowerName = styled.div`
  width: 100%;
  padding: 10px 0;
  font-size: 27px;
  border-bottom: 1px solid black;
    @media (max-width: 575px) {
      font-size:18px;
      padding: 5px 0;
  }
`;

const Date = styled.div`
  font-size: 22px;
    @media (max-width: 575px) {
      font-size:13px;
  }
`;

const Floriography = styled.div`
  font-size: 20px;
    @media (max-width: 575px) {
      font-size:10px;
  }
`;
//안녕
const FromText = styled.div`
  font-size: 22px;
  color: #959090;
    @media (max-width: 575px) {
      font-size:16px;
  }
`;

function TodayFlower() {
  return (
    <Wrapper>
      <Title>오늘의 꽃</Title>
      <Container>
        <FlowerImage></FlowerImage>
        <FlowerInfo>
        <TopText>
          <ToText>to.</ToText>
          <FlowerName>장미(rose)</FlowerName>
          <Date>6월 6일</Date>
          </TopText>
          <BottomText>
          <Floriography>"나의 마음 그대만이 아네"</Floriography>
          <FromText>from.</FromText>
          </BottomText>
        </FlowerInfo>
      </Container>
    </Wrapper>
  );
}

export default TodayFlower;
