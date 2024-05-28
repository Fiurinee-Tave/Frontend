import styled from "styled-components";
import RecommendLogItem from "../items/RecommendLogItem";

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
const RecentLogText = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MovePageBtn = styled.button``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

function RecentLog() {
  return (
    <Wrapper>
      <RecentLogText>
        <div>최근 추천 받은 꽃</div>
        <MovePageBtn>더보기→</MovePageBtn>
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
