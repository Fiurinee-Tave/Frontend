import Header from "../components/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;
function Mypage() {
  return (
    <Wrapper>
      <Header />
      My page
    </Wrapper>
  );
}

export default Mypage;
