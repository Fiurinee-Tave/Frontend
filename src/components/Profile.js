import styled from "styled-components";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import IconPencil from "../icons/IconPencil";
import Anniversary from "./Anniversary";
import IconCheck from "../icons/IconCheck";
import ImgChange from "./ImgChange";

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
  background-color: #f4f4f4;
  border-radius: 10px;
  position: relative;
  //iphone SE => width:375px;
  @media (max-width: 575px) {
    width: 100%;
    height: 180px;
  }
`;

const UserImg = styled.div`
  width: 100%;
  height: 100%;
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

function Profile({ openModal }) {
  const isMobile = useMediaQuery({ query: "(max-width: 575px)" });
  const [imgChange, setImgChange] = useState(false);

  const handleImgChange = () => {
    setImgChange(!imgChange);
  };

  const handleUserInfo = () => {
    // user 정보 가져오는 함수
    // Usename, Event(BD...), ProfileImg
  };

  useEffect(() => {
    handleUserInfo();
  }, []);

  return (
    <Wrapper>
      {isMobile ? (
        <ProfileContainer>
          <UserInfo>
            <BigText>"username" Profile</BigText>
            <MiddleText>2002.07.27</MiddleText>
          </UserInfo>

          <UserImgContainer>
            <UserImg />
            {imgChange ? (
              <IconCheck onClick={handleImgChange} />
            ) : (
              <IconPencil onClick={handleImgChange} />
            )}
          </UserImgContainer>
          {imgChange ? (
            <ImgChange></ImgChange>
          ) : (
            <Anniversary openModal={openModal} />
          )}
        </ProfileContainer>
      ) : (
        <ProfileContainer>
          <UserImgContainer>
            <UserImg />
            {imgChange ? (
              <IconCheck onClick={handleImgChange} />
            ) : (
              <IconPencil onClick={handleImgChange} />
            )}
          </UserImgContainer>

          <UserInfoContainer>
            <UserInfo>
              <BigText>"username" Profile</BigText>
              <MiddleText>2002.07.27</MiddleText>
            </UserInfo>
            {imgChange ? (
              <ImgChange></ImgChange>
            ) : (
              <Anniversary openModal={openModal} />
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
