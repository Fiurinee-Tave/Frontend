import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #989898;

  //태블릿
  @media (max-width: 1199px) {
  }

  //모바일 가로
  @media (max-width: 767px) {
  }

  //모바일 세로
  @media (max-width: 575px) {
    padding: 10px 20px;
  }
`;

const LoginWrapper = styled.div`
  display: flex;
  gap: 25px;

  //모바일 세로
  @media (max-width: 575px) {
    font-size: 13px;
    gap: 10px;
  }
`;

const Logo = styled.div`
  font-size: 25px;
  color: #eb5360;
  cursor: pointer;

  //모바일 세로
  @media (max-width: 575px) {
    font-size: 20px;
  }
`;

const Mypage = styled.div`
  cursor: pointer;
`;

const Logout = styled.div`
  cursor: pointer;
`;
function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    //logout처리과정 후
    navigate("/");
  };

  return (
    <Wrapper>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        fiurinee
      </Logo>
      <LoginWrapper>
        <Mypage
          onClick={() => {
            navigate("/mypage");
          }}
        >
          마이페이지
        </Mypage>
        <Logout onClick={handleLogout}>로그아웃</Logout>
      </LoginWrapper>
    </Wrapper>
  );
}

export default Header;
