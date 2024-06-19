import { SyncLoader } from "react-spinners";
import styled from "styled-components";

//react-spinners 라이브러리 사용했지만 그냥 css 애니메이션으로 수정하는 게 나을 듯
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Loading() {
  return (
    <Wrapper>
      <SyncLoader size="10" speedMultiplier="0.5" color="#eb5360" />
      <div>Fiurinee</div>
    </Wrapper>
  );
}

export default Loading;
