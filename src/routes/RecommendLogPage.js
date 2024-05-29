import Header from "../components/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

function RecommendLogPage() {
  return (
    <Wrapper>
      <Header />
      <div>추천기록들어올거임</div>
    </Wrapper>
  );
}

export default RecommendLogPage;
