import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Entry = styled.div`
  margin-left: 130px;
  margin-top: 120px;
`;

const Title = styled.div`
  margin-left: 170px;
  font-size: 40px;
`;

const Wrapper = styled.div`
  width: 800px;
  height: 500px;
  margin-left: 130px;
  margin-top: 30px;
  background-color: white;
  display: flex;
  box-shadow: 4px 4px 8px #c6c6c6;
`;

const FlowerImage = styled.img`
  width: 50%;
  height: 100%;
  border: 1px solid gray;
`;
const TopText = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  border-bottom: 2px black;
  height: 50%;
`;

const ToText = styled.div`
  font-size: 22px;
  color: #959090;
`;

const FlowerName = styled.div`
  padding-top: 25px;
  padding-left: 20px;
  font-size: 27px;
`;

const Date = styled.div`
  padding-left: 20px;
  font-size: 22px;
`;

const Line = styled.hr`
  border-top: 1px solid gray;
  margin: 10px 7px 10px 13px;
  width: 290px;
`;

const Floriography = styled.div`
  padding-top: 150px;
  font-size: 20px;
  padding-top: 250px;
  padding-left: 2vw;
`;
//안녕
const FromText = styled.div`
  position: absolute;
  font-size: 22px;
  color: #959090;
  padding-top: 4vh;
  padding-left: 13vw;
`;

function TodayFlower() {
  return (
    <Entry>
      <Title>오늘의 꽃</Title>
      <Wrapper>
        <FlowerImage></FlowerImage>
        <TopText>
          <ToText>to.</ToText>
          <FlowerName>장미(rose)</FlowerName>
          <Line />
          <Date>6월 6일</Date>
          <Floriography>"나의 마음 그대만이 아네"</Floriography>
          <FromText>from.</FromText>
        </TopText>
      </Wrapper>
    </Entry>
  );
}

export default TodayFlower;
