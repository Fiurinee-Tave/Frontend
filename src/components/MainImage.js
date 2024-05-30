import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const StyledImg = styled.div`
    position:relative;
    background-Image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('/img/MainImage1.png');
    background-size: cover;
    width: 100vw;
    height: 60vh;
    display: flex;
    align-items: center;

  `;

const LoginButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px; 
  right: 50px;
`;

const Title = styled.div`
  font-size:150px;
  color:#EB5360;
  position: absolute;
  top: 150px; 
  left: 170px;

`;

const Detail = styled.div`
  font-size:40px;
  position: absolute;
  top: 300px; 
  left: 300px;
`;

const RecommendBtn = styled.button`
  background-color:#FFF3F3;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  right: 160px;
  bottom: 15px;
  padding: 15px 25px;
  border-style: dashed;
  border-color:gray;
`;

const DetailBtn = styled.button`
  border-radius:50px;
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  right: 120px;
  bottom: 20px;
  background-color:#FFF3F3;
  border-style: dashed;
  border-color:gray;
`;


function MainImage(){
    
const navigate = useNavigate();

  const Login = () => {
    //로그인창으로 이동
    navigate("/login");

};

  const recommend = () => {
    navigate("/reco0");
  };


    return(
        <StyledImg>
            <LoginButton onClick={Login}>로그인 / 회원가입</LoginButton>
            <RecommendBtn onClick={recommend}>선물할 꽃 추천받기</RecommendBtn>
            <Title>Fiurinee</Title>
            <Detail>당신의 마음을 선물하세요</Detail>
            <DetailBtn> ? </DetailBtn>
        </StyledImg>
        );

}

export default MainImage;