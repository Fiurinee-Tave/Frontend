import Header from "../components/Header";
import Profile from "../components/Profile";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

function Mypage() {
  return (
    <Wrapper>
      <Header />
      <Profile />
    </Wrapper>
  );
}

export default Mypage;
