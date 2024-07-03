import styled from "styled-components";
import RecommendLogItem from "../items/RecommendLogItem";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

import refreshAccessToken from "../axios";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 25px;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LogContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MiddleText = styled.div`
  font-size: 20px;

  @media (max-width: 575px) {
    font-size: 15px;
  }
`;

const MovePageBtn = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
  font-family: "Gowun Batang", serif;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 575px) {
    font-size: 15px;
  }
`;

function RecentLog() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token");
  const memberId = localStorage.getItem("member_id");
  const [recent, setRecent] = useState();

  const fetchData = async () => {
    try {
      const main = await axios.get(
        `http://3.36.169.209:8080/member/${memberId}/recommend/recent`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      const sub = await axios.get(
        `http://3.36.169.209:8080/member/${memberId}/harmony/recent`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      //setRecent(main.map((v, i) => (v.order === ));
      console.log(main);
      console.log(sub);
    } catch (error) {
      if (error.response.status === 401) {
        refreshAccessToken(memberId);
      }
      console.error("Failed to fetch user data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      <TextContainer>
        <MiddleText>최근 추천 받은 꽃</MiddleText>
        <MovePageBtn onClick={() => navigate("/mypage/recommend_log")}>
          더보기→
        </MovePageBtn>
      </TextContainer>
      <LogContainer>
        {recent?.map((v, i) => (
          <RecommendLogItem key={i} info={v} />
        ))}
      </LogContainer>
    </Wrapper>
  );
}

export default RecentLog;
