import styled from "styled-components";
import MainImage from "../components/MainImage";
import TodayFlower from "../components/TodayFlower";
import FlowerShop from "../components/FlowerShop";
import SeasonFlower from "../components/SeasonFlower";
import { useMediaQuery } from "react-responsive";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import MainAnniversary from "../components/MainAnniversary";
import axios from "axios";
import api from "../axios";

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

  const [accessToken0, setAccessToken] = useState(null);
  const [refreshToken0, setRefreshToken] = useState(null);
  const [memberId0, setMemberId] = useState(null);
  const [userData, setUserData] = useState(null);

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

        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setMemberId(memberId);

        navigate("/auth");

      }else{
        setAccessToken(localStorage.getItem("access_token"));
      setMemberId(localStorage.getItem("member_id"));
      setRefreshToken(localStorage.getItem("refresh_token"));
      }
    }
  }, [login, location, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      if (login && memberId0 && accessToken0) {
        try {
          const response = await api.get(
            `https://emotionfeedback.site/member/${memberId0}/anniversary/zero-day`,
            {
              headers: { Authorization: `Bearer ${accessToken0}` },
            }
          );
          setUserData(response.data);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      }
    };

    fetchData();
  }, [login, memberId0, accessToken0]);


  // 
  return (
    <Wrapper>
     {(userData == null || userData[0].name == null) ?<MainImage login={login}/> : <MainAnniversary login={login} name={userData[0].name}/>}
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
