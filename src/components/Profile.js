import styled from "styled-components";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import IconPencil from "../icons/IconPencil";
import Anniversary from "./Anniversary";
import IconCheck from "../icons/IconCheck";
import ImgChange from "./ImgChange";

import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;

  //iphone SE => width:375px;
  @media (max-width: 575px) {
    height: 500px;
  }
`;

const ProfileContainer = styled.div`
  width: 100%;
  height: 330px;
  background-color: white;
  padding: 10px;
  border-radius: 15px;

  display: flex;
  align-items: center;
  gap: 15px;

  box-shadow: 2px 2px 2px #858585;

  //iphone SE => width:375px;
  @media (max-width: 575px) {
    flex-direction: column;
    height: 470px;
  }
`;

const UserImgContainer = styled.div`
  width: 300px;
  height: 100%;
  //background-color: #f4f4f4;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  //iphone SE => width:375px;
  @media (max-width: 575px) {
    width: 100%;
    height: 180px;
  }
`;

const UserImg = styled.img`
  width: 60%;
  height: 60%;
  border-radius: 10px;
`;

const UserInfoContainer = styled.div`
  width: calc(100% - 300px);
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  //iphone SE => width:375px;
  @media (max-width: 575px) {
    width: 100%;
    height: calc(100% - 100px);
    border: 1px solid red;
  }
`;

const UserInfo = styled.div`
  width: 100%;
  height: 40px;
  padding: 5px;
  border-bottom: 1px solid #989898;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BigText = styled.div`
  font-size: 28px;

  @media (max-width: 575px) {
    font-size: 23px;
  }
`;

const MiddleText = styled.div`
  font-size: 20px;

  @media (max-width: 575px) {
    font-size: 15px;
  }
`;

const GuideText = styled.div`
  font-size: 15px;

  @media (max-width: 575px) {
    font-size: 10px;
  }
`;

const ImgList = [
  "/img/profileImg/f1.png",
  "/img/profileImg/f2.png",
  "/img/profileImg/f3.png",
  "/img/profileImg/f4.png",
];

const ColorList = ["#FFF8EB", "#FFBDBD", "#CEF4B7", "#CAD3F3"];

function Profile({ openModal, userInfo, anniversaries, modifyProfileImg }) {
  const isMobile = useMediaQuery({ query: "(max-width: 575px)" });
  const [imgChange, setImgChange] = useState(false);
  const [img, setImg] = useState(ImgList[0]);
  const [color, setColor] = useState(ColorList[0]);
  const [profileImg, setProfileImg] = useState({ img: null, color: null });

  const handleImgChange = () => {
    if (imgChange === true) {
      modifyProfileImg(profileImg.img, profileImg.color);
      setImgChange(!imgChange);
    } else {
      setImgChange(!imgChange);
    }
  };

  useEffect(() => {
    setImg(ImgList[parseInt(userInfo.profileImage / 10) - 1]);
    setColor(ColorList[(userInfo.profileImage % 10) - 1]);
  }, [userInfo]);

  return (
    <Wrapper>
      {isMobile ? (
        <ProfileContainer>
          <UserInfo>
            <BigText>"{userInfo.nickname}" Profile</BigText>
            <MiddleText>2002.07.27</MiddleText>
          </UserInfo>
          {imgChange ? (
            <UserImgContainer
              style={{ backgroundColor: ColorList[profileImg.color - 1] }}
            >
              <UserImg src={ImgList[profileImg.img - 1]} />

              <IconCheck onClick={handleImgChange} />
            </UserImgContainer>
          ) : (
            <UserImgContainer style={{ backgroundColor: color }}>
              <UserImg src={img} />

              <IconPencil onClick={handleImgChange} />
            </UserImgContainer>
          )}
          {imgChange ? (
            <ImgChange
              profileImg={profileImg}
              setProfileImg={setProfileImg}
            ></ImgChange>
          ) : (
            <Anniversary openModal={openModal} anniversaries={anniversaries} />
          )}
        </ProfileContainer>
      ) : (
        <ProfileContainer>
          {imgChange ? (
            <UserImgContainer
              style={{ backgroundColor: ColorList[profileImg.color - 1] }}
            >
              <UserImg src={ImgList[profileImg.img - 1]} />

              <IconCheck onClick={handleImgChange} />
            </UserImgContainer>
          ) : (
            <UserImgContainer style={{ backgroundColor: color }}>
              <UserImg src={img} />

              <IconPencil onClick={handleImgChange} />
            </UserImgContainer>
          )}

          <UserInfoContainer>
            <UserInfo>
              <BigText>"{userInfo.nickname}" Profile</BigText>
              <MiddleText>2002.07.27</MiddleText>
            </UserInfo>
            {imgChange ? (
              <ImgChange
                profileImg={profileImg}
                setProfileImg={setProfileImg}
              ></ImgChange>
            ) : (
              <Anniversary
                openModal={openModal}
                anniversaries={anniversaries}
              />
            )}
          </UserInfoContainer>
        </ProfileContainer>
      )}

      {imgChange ? (
        <GuideText>
          * 원하는 꽃 일러스트와 배경색의 조합을 선택하세요.
        </GuideText>
      ) : (
        <GuideText>
          * 기념일을 수정 혹은 삭제하려면 해당 기념일을 클릭하세요.
        </GuideText>
      )}
    </Wrapper>
  );
}

export default Profile;
