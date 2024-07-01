import styled from "styled-components";
import Header from "../components/Header";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  //iphone SE => width:375px;
  @media (max-width: 575px) {
  }
`;

const LoginContainer = styled.div`
  width: 550px;
  height: 400px;
  margin-top: 100px;

  background-color: white;
  border: 1px solid #d9d9d9;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;

  @media (max-width: 575px) {
    margin-top: 50px;
    width: 300px;
    height: 250px;
    gap: 30px;
  }
`;

const BoldText = styled.div`
  font-size: 25px;
  font-weight: bold;

  @media (max-width: 575px) {
    font-size: 20px;
  }
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const NormalText = styled.div`
  font-size: 15px;

  @media (max-width: 575px) {
    font-size: 13px;
  }
`;

const LoginButton = styled.button`
  padding: 0;
  outline: none;
  border: none;
  background-color: white;
  width: 400px;

  @media (max-width: 575px) {
    width: 250px;
  }
`;

const KaKaoImage = styled.img`
  width: 100%;
`;

function Login() {
  const kakaoLink = `http://3.36.169.209:8080/oauth2/authorization/kakao`;

  const onClickLogin = () => {
    window.location.href = kakaoLink;
  };

  return (
    <Wrapper>
      <Header login={false} />
      <LoginContainer>
        <BoldText>-SNS 간편 로그인/회원가입-</BoldText>
        <TextGroup>
          <NormalText>간편하게 회원가입하고</NormalText>
          <NormalText>나만의 꽃 저장소를 만들어보세요:{")"}</NormalText>
        </TextGroup>
        <LoginButton onClick={onClickLogin}>
          <KaKaoImage src="/img/KakaoLogin.png" alt="" />
        </LoginButton>
      </LoginContainer>
    </Wrapper>
  );
}

export default Login;
