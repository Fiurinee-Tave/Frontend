import styled from "styled-components";
import RecommendLogItem from "../items/RecommendLogItem";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  //태블릿
  @media (max-width: 1199px) {
  }

  //모바일 가로
  @media (max-width: 767px) {
  }

  //모바일 세로
  @media (max-width: 575px) {
    width: 90%;
  }
`;
const RecentLogText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const MovePageBtn = styled.button`
  border: none;
  background: none;
  font-size: 15px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

function RecentLog() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <RecentLogText>
        <div>최근 추천 받은 꽃</div>
        <MovePageBtn onClick={() => navigate("/mypage/recommend_log")}>
          더보기→
        </MovePageBtn>
      </RecentLogText>
      <Container>
        <RecommendLogItem></RecommendLogItem>
        <RecommendLogItem></RecommendLogItem>
        <RecommendLogItem></RecommendLogItem>
      </Container>
    </Wrapper>
  );
}

export default RecentLog;
