import styled from "styled-components";
import { useState } from "react";


const Wrapper = styled.div`
    width: 100%;
    height:90vh;
    display: flex;
    padding: 3vh 12vw;
    flex-direction: column;
    @media (max-width: 575px) {
     height:50vh;
    padding: 0.1vh 12vw;
    }
`;

const InWrapper = styled.div`
    width: 100%;
    height:80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:20px 0.5vw 10px 0.5vw;
    @media (max-width: 575px) {
      height:38vh;
      padding:20px 0.5vw 0px 0.5vw;
  }
`;


const Title = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  @media (max-width: 575px) {
    font-size: 20px;
    justify-content: left;
  }
`;

const FlowerImage1 = styled.img`
  width: 44%;
  height: 100%;
  border: 1px solid gray;
`;

const Line1 = styled.div`
padding:0 2%;
width: 20%;
height: 100%;
display: flex;
flex-direction: column;
`;

const FlowerImage2 = styled.img`
    margin-bottom:5%;
    width: 100%;
    height: 100%;
    border: 1px solid gray;
`;

const FlowerImage3 = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid gray;
`;

const Line2 = styled.div`
width: 33%;
height: 100%;
display: flex;
flex-direction: column;
`;

const FlowerImage4 = styled.img`
    margin-bottom:5%;
    width: 100%;
    height: 100%;
    border: 1px solid gray;

`;

const FlowerImage5 = styled.img`
  width: 100%;
  height: 30%;
  border: 1px solid gray;
`;

function SeasonFlower() {
    return (
        <Wrapper>
          <Title>시즌꽃</Title>
          <InWrapper>
            <FlowerImage1></FlowerImage1>
            <Line1>
                <FlowerImage2></FlowerImage2>
                <FlowerImage3></FlowerImage3>
            </Line1>
            <Line2>
            <FlowerImage4></FlowerImage4>
            <FlowerImage5></FlowerImage5>
            </Line2>
          </InWrapper>
        </Wrapper>
    );
  }
  
  export default SeasonFlower;