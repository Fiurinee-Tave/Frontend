import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import axios from "axios";
import api from "../axios";
import Guide from "./Guide";
import { useEffect, useState } from "react";

SwiperCore.use([Autoplay, Navigation, Pagination]);

{/* 헤더가 이미지랑 같이*/}

const StyledImg = styled.div`
  position: relative;
  background-size: cover;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  @media (max-width: 575px) {
    height: 35vh;
  }

`;
const ImageSlide = styled.img`
  width: 100vw;
  height: 70vh;
  object-fit: cover;
  opacity: 0.6;
  filter: blur(0.5px);
  @media (max-width: 575px) {
    height: 35vh;
  }

`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const LoginLine = styled.div`
position: absolute;
  display: flex;
  top: 20px;
  right: 50px;
  gap:30px;
  justify-content: center;
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
    font-size: 15px;
  }
`;

const Title = styled.div`
  font-size: 13vw;
  color: #eb5360;
  position: absolute;
  top: 150px;
  left: 170px;
  font-family: "Italianno", cursive;
  font-weight: 400;
  font-style: normal;
    @media (max-width: 575px) {
    left: 40px;
    font-size: 70px;
    top: 60px;
  }
`;

const Detail = styled.div`
  font-size: 2.5vw;
  position: absolute;
  top: 300px;
  left: 300px;
  text-shadow: 3px 4px 6px gray;
  @media (max-width: 575px) {
    left: 60px;
    top: 120px;
    font-size: 15px;
  }
`;

const RecommendBtn = styled.button`
  background-color: #fff3f3;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  right: 160px;
  bottom: 15px;
  padding: 15px 25px;
  border-style: dashed;
  border-color: gray;
    font-family: "Gowun Batang", serif;
  font-weight: 400;
  font-style: normal;
  @media (max-width: 575px) {
    font-size: 10px;
    padding: 8px 23px;
    right: 50px;
  }
`;

const DetailBtn = styled.button`
  border-radius: 50%;
  width:58px;
  height:58px;
  font-size: 30px;
  cursor: pointer;
  position: absolute; 
  right: 90px;
  bottom: 18px;
  background-color: #fff3f3;
  border-style: dashed;
  border-color: gray;
  font-family: "Gowun Batang", serif;
  font-weight: 400;
  font-style: normal;
    @media (max-width: 575px) {
    font-size: 10px;
    width:30px;
    height:30px;
    right: 15px;
  }
`;

function MainImage({login}) {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token");
  const memberId = localStorage.getItem("member_id");
  const [showDetails, setShowDetails] = useState(false);
  const images = [
    "/img/MainImage1.png",
    "/img/MainImage2.png",
    "/img/MainImage3.png",
    "/img/MainImage4.png",
  ];


  const logout = async () => {
    try {
      await api.get(`https://emotionfeedback.site/model/${memberId}/logout`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  const Login = () => {
    navigate("/login");
  };

  const recommend = () => {
    if(login){
      navigate("/reco0/auth");
    }else{
      navigate("/reco0");
    }
  };

  const handleButtonClick = () => {
    setShowDetails(true); // 버튼 클릭 시 상태 업데이트
  };

  const handleClose = () => {
    setShowDetails(false); 
  };
  return (
    <StyledImg>
      
      <Swiper
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        //onSlideChange={() => console.log("slide change")}
        //onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <ImageSlide src={image} />
            
          </SwiperSlide>
        ))}
      </Swiper>
      <Overlay>
      {login? 
            <LoginLine>
              <NormalText onClick={() => {
              navigate("/mypage");
            }}>마이페이지</NormalText>
            <NormalText onClick={logout}>로그아웃</NormalText>
            </LoginLine>
            :
            <LoginButton onClick={Login}>로그인/회원가입</LoginButton>}
            <RecommendBtn onClick={recommend}>선물할 꽃 추천받기</RecommendBtn>
            <Title>fiurinee</Title>
            <Detail>당신의 마음을 선물하세요</Detail>
            <DetailBtn onClick={handleButtonClick}> ? </DetailBtn>
      </Overlay>
      {showDetails && <Guide handleClose={handleClose}/>}
    </StyledImg>
  );
}

export default MainImage;
