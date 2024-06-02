import Header from "../components/Header";
import styled from "styled-components";
import RecommendLogItem from "../items/RecommendLogItem";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Title = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const LikeBtn = styled.button`
  width: 150px;
  height: 40px;
  background-color: #fad5d5;
  border: none;
  border-radius: 10px;
  color: #ea8989;

  cursor: pointer;
`;

function RecommendLogPage() {
  return (
    <Wrapper>
      <Header />
      <Title>
        <div>나의 추천 기록</div>
        <LikeBtn>♥ 찜한 목록만 보기</LikeBtn>
      </Title>
      <Container>
        <RecommendLogItem></RecommendLogItem>
        <RecommendLogItem></RecommendLogItem>
        <RecommendLogItem></RecommendLogItem>
        <RecommendLogItem></RecommendLogItem>
        <RecommendLogItem></RecommendLogItem>
        <RecommendLogItem></RecommendLogItem>
        <RecommendLogItem></RecommendLogItem>
        <RecommendLogItem></RecommendLogItem>
      </Container>
    </Wrapper>
  );
}

export default RecommendLogPage;
