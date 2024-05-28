import styled from "styled-components";
import IconBirthday from "../icons/IconBirthday";
import Anniversary from "./Anniversary";

const Wrapper = styled.div`
  width: 70%;
  height: 360px;
  padding: 15px;
  display: flex;
  background-color: white;
  border-radius: 15px;
`;

const ProfileImage = styled.div`
  width: 25%;
  height: 100%;
  margin-right: 15px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff8eb;
`;

const Image = styled.img`
  width: 90%;
`;

const ProfileInfo = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const UserInfo = styled.div`
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

function Profile() {
  return (
    <Wrapper>
      <ProfileImage>
        <Image />
      </ProfileImage>
      <ProfileInfo>
        <UserInfo>
          <div>"mooni" profile</div>
          <Birthday>
            <IconBirthday />
            <div>2002.07.27</div>
          </Birthday>
        </UserInfo>
        <Anniversary />
      </ProfileInfo>
    </Wrapper>
  );
}

export default Profile;
