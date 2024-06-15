import styled from "styled-components";
import { useState } from "react";


const Wrapper = styled.div`
    width: 100%;
    height:70vh;
    display: flex;
    align-items: center;
    padding: 0 160px;
    margin-bottom: 40px;
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
width: 32%;
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
            <FlowerImage1></FlowerImage1>
            <Line1>
                <FlowerImage2></FlowerImage2>
                <FlowerImage3></FlowerImage3>
            </Line1>
            <Line2>
            <FlowerImage4></FlowerImage4>
            <FlowerImage5></FlowerImage5>
            </Line2>
        </Wrapper>
    );
  }
  
  export default SeasonFlower;