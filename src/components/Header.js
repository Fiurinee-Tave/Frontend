import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px 50px;
  border-bottom: 1px solid #989898;

  display: flex;
  justify-content: space-between;
  align-items: center;

  //iphone SE => width:375px;
  @media (max-width: 575px) {
    padding: 10px 20px;
  }
`;

const Logo = styled.div`
  font-size: 45px;
  color: #eb5360;
  font-family: "Italianno";
  font-weight: 500;
  font-style: normal;

  cursor: pointer;

  @media (max-width: 575px) {
    font-size: 20px;
  }
`;

const LoginUserText = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 575px) {
    gap: 10px;
  }
`;

const NormalText = styled.div`
  cursor: pointer;

  @media (max-width: 575px) {
    font-size: 15px;
  }
`;

function Header({ login }) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        Fiurinee
      </Logo>
      {login ? (
        <LoginUserText>
          <NormalText
            onClick={() => {
              navigate("/mypage");
            }}
          >
            마이페이지
          </NormalText>
          <NormalText
            onClick={() => {
              navigate("/");
            }}
          >
            로그아웃
          </NormalText>
        </LoginUserText>
      ) : (
        <NormalText
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인/회원가입
        </NormalText>
      )}
    </Wrapper>
  );
}

export default Header;
