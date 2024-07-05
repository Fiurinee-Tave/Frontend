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
    font-size: 16px;
  }
`;

const FlowerName = styled.div`
  width: 100%;
  padding: 10px 0;
  font-size: 27px;
  border-bottom: 1px solid black;
  @media (max-width: 575px) {
    font-size: 18px;
    padding: 5px 0;
  }
`;

const Date = styled.div`
  font-size: 22px;
  @media (max-width: 575px) {
    font-size: 13px;
  }
`;

const Floriography = styled.div`
  font-size: 20px;
  @media (max-width: 575px) {
    font-size: 10px;
  }
`;

const FromText = styled.div`
  font-size: 22px;
  color: #959090;
  @media (max-width: 575px) {
    font-size: 16px;
  }
`;

function TodayFlower(member) {
  const [flowerData, setFlowerData] = useState({
    flowerName: "",
    flowerPeriod: "",
    flowerLangu: "",
    flowerImg: "",
  });

  const fetchData = async () => {
    const response = await axios.get(`http://3.36.169.209:8080/main/today`);
    //console.log(response);
    setFlowerData({
      flowerName: response.data.Flower,
      flowerPeriod: response.data.period,
      flowerLangu: response.data.flower_language,
      flowerImg: response.data.image,
    });
    //console.log(response.data.period);
  };

  useEffect(() => {
    fetchData();
  }, []);

  /*
    fetch("http://3.36.169.209:8080/main/today")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setFlowerData({
          flowerName: data.Flower,
          flowerPeriod: data.period,
          flowerLangu: data.flower_language,
          flowerImg: data.image
        });

        //console.log("여기 플라워 뜬다 :  ",flowerImg);
      })
      .catch((error) => console.error("Error:", error));
  }, []
   */

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
            <FlowerName>{flowerData.flowerName}</FlowerName>
            <Date>{flowerData.flowerPeriod}</Date>
          </TopText>
          <BottomText>
            <Floriography>{flowerData.flowerLangu}</Floriography>
            <FromText>from.</FromText>
          </BottomText>
        </FlowerInfo>
      </Container>
    </Wrapper>
  );
}

export default TodayFlower;
