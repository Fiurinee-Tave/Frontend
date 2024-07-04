import styled from "styled-components";
import RecommendLogItem from "../items/RecommendLogItem";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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

function RecentLog({ recentReco, settingTruePrefer, settingFalsePrefer }) {
  const navigate = useNavigate();
  const [showRecent, setShowRecent] = useState();

  useEffect(() => {
    if (Object.keys(recentReco).length === 0) {
      return;
    } else {
      setShowRecent(recentReco);
    }
  }, [recentReco]);

  return (
    <Wrapper>
      <TextContainer>
        <MiddleText>최근 추천 받은 꽃</MiddleText>
        <MovePageBtn onClick={() => navigate("/mypage/recommend_log")}>
          더보기→
        </MovePageBtn>
      </TextContainer>
      <LogContainer>
        {showRecent === undefined
          ? "추천기록이 없습니다."
          : showRecent.map((v, i) => (
              <RecommendLogItem
                key={i}
                info={v}
                settingTruePrefer={settingTruePrefer}
                settingFalsePrefer={settingFalsePrefer}
              />
            ))}
      </LogContainer>
    </Wrapper>
  );
}

export default RecentLog;
