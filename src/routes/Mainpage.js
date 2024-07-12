import styled from "styled-components";
import MainImage from "../components/MainImage";
import TodayFlower from "../components/TodayFlower";
import FlowerShop from "../components/FlowerShop";
import SeasonFlower from "../components/SeasonFlower";
import { useMediaQuery } from "react-responsive";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Wrapper = styled.div`
  width: 100vw;
  heigth: 100vh;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

const Line2 = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  gap:5vw;
  padding: 3vh 9vw;
`;

const MobileLine = styled.div`
  width: 100%;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

function Mainpage({ login }) {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:575px)" });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (login) {
      const queryParams = new URLSearchParams(location.search);
      const accessToken = queryParams.get("access_token");
      const refreshToken = queryParams.get("refresh_token");
      const memberId = queryParams.get("member_id");

      if (accessToken) {
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
        localStorage.setItem("member_id", memberId);

        navigate("/auth");
      }
    }
  }, []);

  return (
    <Wrapper>
      <MainImage login={login}/>
      {isDesktopOrMobile !== true ? (
        <>
          <Line2>
            <TodayFlower />
            <FlowerShop />
          </Line2>
          <SeasonFlower />
        </>
      ) : (
        <>
          <TodayFlower />
          <FlowerShop />
          <SeasonFlower />
        </>
      )}
    </Wrapper>
  );
}

export default Mainpage;
