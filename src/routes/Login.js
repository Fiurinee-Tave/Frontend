import styled from "styled-components";
import Header from "../components/Header";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  //태블릿
  @media (max-width: 1199px) {
  }

  //모바일 가로
  @media (max-width: 767px) {
  }

  //모바일 세로
  @media (max-width: 575px) {
  }
`;

const Container = styled.div`
  width: 500px;
  height: 400px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  gap: 10px;

  @media (max-width: 575px) {
    width: 400px;
  }
`;

const BigText = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const SmallText = styled.div`
  font-size: 15px;
`;

const LoginBtn = styled.button`
  padding: 0;
  margin: 30px 0;
  outline: none;
  border: none;
  background: none;
`;

function Login() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <BigText>-SNS 간편 로그인/회원가입-</BigText>
        <SmallText>간편하게 회원가입하고</SmallText>
        <SmallText>나만의 꽃 저장소를 만들어보세요:{")"}</SmallText>
        <LoginBtn>
          <img src="/img/KakaoLogin.png" width="300px" />
        </LoginBtn>
      </Container>
      `
    </Wrapper>
  );
}

export default Login;
