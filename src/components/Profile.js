import styled from "styled-components";
import IconBirthday from "../icons/IconBirthday";
import IconPencil from "../icons/IconPencil";
import Anniversary from "./Anniversary";
import { useState } from "react";
import IconCheck from "../icons/IconCheck";

const Wrapper = styled.div`
  width: 70%;
  height: 360px;
  padding: 15px;
  display: flex;
  background-color: white;
  border-radius: 15px;
  box-shadow: 2px 2px 2px #c6c6c6;
`;

const ProfileImage = styled.div`
  width: 25%;
  height: 100%;
  margin-right: 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff8eb;
  padding-top: 30px;
`;

const Image = styled.img`
  width: 90%;
`;

const ProfileInfo = styled.div`
  width: calc(75% - 15px);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  padding: 10px;
  padding-top: 0px;
  width: 100%;
  height: 15%;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

const Birthday = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 0 20px 20px 0;
`;

const ProfileModifyContainer = styled.div`
  width: calc(75% - 15px);
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0 50px;
  justify-content: center;
`;

const MiniImage = styled.img`
  width: 150px;
  height: 150px;
  border: 3px dashed #f98181;
`;

const ProfileImageList = [
  "/img/ProfileImage.png",
  "/img/ProfileImage.png",
  "/img/ProfileImage.png",
  "/img/ProfileImage.png",
  "/img/ProfileImage.png",
  "/img/ProfileImage.png",
];

function Profile({ openModal }) {
  const [modify, setModify] = useState(false);

  const handleProfile = () => {
    setModify(!modify);
  };

  if (modify) {
    return (
      <Wrapper>
        <ProfileImage>
          <Image src="/img/ProfileImage.png" />
          <IconContainer>
            <IconCheck onClick={handleProfile} />
          </IconContainer>
        </ProfileImage>
        <ProfileModifyContainer>
          {ProfileImageList.map((v, i) => (
            <MiniImage src={v} key={i} />
            //click시 backgroundColor 변경 함수 필요
            //연필 아이콘 체크로 변경
          ))}
        </ProfileModifyContainer>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <ProfileImage>
          <Image src="/img/ProfileImage.png" />
          <IconContainer>
            <IconPencil onClick={handleProfile} />
          </IconContainer>
        </ProfileImage>
        <ProfileInfo>
          <Title>
            <div>"user" profile</div>
            <Birthday>
              <IconBirthday />
              <div>2002.07.27</div>
            </Birthday>
          </Title>
          <Anniversary openModal={openModal} />
        </ProfileInfo>
      </Wrapper>
    );
  }
}

export default Profile;
