import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import refreshAccessToken from "../axios";

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

  const accessToken = localStorage.getItem("access_token");
  const memberId = localStorage.getItem("member_id");

  const logout = async () => {
    try {
      await axios.get(
        `https://emotionfeedback.site/member/${memberId}/logout`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      localStorage.clear();
      navigate("/");
    } catch (error) {
      if (error.response.status === 401) {
        refreshAccessToken(memberId);
      }
      console.error("Failed to fetch user data:", error);
    }
  };

  const mainPage = () => {
    if (login) {
      navigate("/auth");
    } else {
      navigate("/");
    }
  };

  return (
    <Wrapper>
      <Logo onClick={mainPage}>fiurinee</Logo>
      {login ? (
        <LoginUserText>
          <NormalText
            onClick={() => {
              navigate("/mypage");
            }}
          >
            마이페이지
          </NormalText>
          <NormalText onClick={logout}>로그아웃</NormalText>
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
