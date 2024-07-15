import React from "react";
import styled from "styled-components";
import axios from "axios";
import refreshAccessToken from "../axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axios";

const StyledImg = styled.div`
  position: relative;
  background-size: cover;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  background-image:url("/img/PartyBackground.png");
  border:20px solid rgba(255,255,255, 1);
  @media (max-width: 575px) {
    height: 35vh;
    border:9px solid rgba(255,255,255, 1);
  }

`;

const Image = styled.img`
  width: 25vw;
  height: 53vh;
  position: absolute;
  right: 15vw;
  top: 8vh;
  opacity: 0.8;
  filter: blur(0.5px);
  @media (max-width: 575px) {
    width: 28vw;
    height: 35vh;
    top: 0vh;
    right: 7vw;
  }

`;


const LoginLine = styled.div`
  position: absolute;
  display: flex;
  top: 20px;
  right: 50px;
  gap:30px;
  justify-content: center;
  @media (max-width: 575px) {
    gap:20px;
    top: 2vh;
    right: 4vw;
  }
`;

const LoginButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 50px;
  text-size: 30px;
`;

const NormalText = styled.div`
  cursor: pointer;
 text-size: 30px;
 top: 20px;
  @media (max-width: 575px) {
    top: 20px;
    font-size: 15px;
  }
`;

const MainText = styled.div`
 font-size:4vw;
 font-weight:600;
 top: 16vh;
 left: 8vw;
 line-height:1.3;
 position: absolute;
  @media (max-width: 575px) {
    top: 10vh;
  }
`;

const Title = styled.div`
  font-size: 3vw;
  color: #eb5360;
  position: absolute;
  top: 2vh;
  left: 2vw;
  font-family: "Italianno", cursive;
  font-weight: 400;
  font-style: normal;
    @media (max-width: 575px) {
    left: 5vw;
    font-size: 5vw;
  }
`;

const RecommendBtn = styled.button`
  background-color: #fff3f3;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  left: 8vw;
  bottom: 6vh;
  padding: 15px 25px;
  border-style: dashed;
  border-color: gray;
  font-family: "Gowun Batang", serif;
  font-weight: 400;
  font-style: normal;
  @media (max-width: 575px) {
    font-size: 2.5vw;
    padding: 2vw 2.6vw;
  }
`;

const Detail = styled.div`
  font-size: 2vw;
  position: absolute;
  top: 40vh;
  left: 8vw;
  font-weight: 400;
  @media (max-width: 575px) {
    top: 17vh;
    font-size: 2.5vw;
  }
`;

const SearchBtn = styled.button`
  background-color: #fff3f3;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  left: 25vw;
  bottom: 6vh;
  padding: 15px 25px;
  border-style: dashed;
  border-color: gray;
    font-family: "Gowun Batang", serif;
  font-weight: 400;
  font-style: normal;
  @media (max-width: 575px) {
    left: 37vw;
    font-size: 2.5vw;
    padding: 2vw 2.6vw;
  }
`;

//  text-shadow: 1px 3px 4px gray;


function MainAnniversary({login,name}) {

    const navigate = useNavigate();
    const accessToken = localStorage.getItem("access_token");
    const memberId = localStorage.getItem("member_id");

    useEffect(() => {
        if (localStorage.getItem("member_id") === null) {
          navigate("/");
        }
      }, []);

    
  
    const logout = async () => {
      try {
        await api.get(`https://emotionfeedback.site/member/${memberId}/logout`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        localStorage.clear();
        navigate("/", { state: { fromLogout: true } });
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };
  
    const recommend = () => {
        navigate("/reco0/auth");
    };

    const today = new Date();

    const SearchFlower = () => {
      navigate("/searchflower");
    }

  
    return (
      <StyledImg>
        <Image src="/img/PartyPeople.svg" alt="Party People Image" />
        <MainText>{today.getMonth() + 1}월 {today.getDate()}일은
            <br/>"{name}" 입니다!
        </MainText>
        <Detail>
        기념일에 선물하기 좋은 꽃을 추천받아보세요
        </Detail>
              <LoginLine>
                <NormalText onClick={() => {
                navigate("/mypage");
              }}>마이페이지</NormalText>
              <NormalText onClick={logout}>로그아웃</NormalText>
              </LoginLine>
              <RecommendBtn onClick={recommend}>선물할 꽃 추천받기</RecommendBtn>
              <SearchBtn onClick={SearchFlower}>꽃 백과사전</SearchBtn>
              <Title>fiurinee</Title>
      </StyledImg>
    );
  }
  
  export default MainAnniversary;
  