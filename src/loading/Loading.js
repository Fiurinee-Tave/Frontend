import styled, { keyframes } from "styled-components";

const move = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -20px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  :nth-child(2) {
    animation-delay: 0.2s;
  }
  :nth-child(3) {
    animation-delay: 0.3s;
  }
  :nth-child(4) {
    animation-delay: 0.4s;
  }
  :nth-child(5) {
    animation-delay: 0.5s;
  }
  :nth-child(6) {
    animation-delay: 0.6s;
  }
  :nth-child(7) {
    animation-delay: 0.7s;
  }
  :nth-child(8) {
    animation-delay: 0.8s;
  }
`;

const AnimationText = styled.div`
  font-size: 35px;
  color: #d88080;

  animation: ${move} 1.5s linear infinite;
`;

const GrayText = styled.div`
  color: #858585;
`;

function Loading() {
  return (
    <Wrapper>
      <Container>
        <AnimationText>F</AnimationText>
        <AnimationText>I</AnimationText>
        <AnimationText>U</AnimationText>
        <AnimationText>R</AnimationText>
        <AnimationText>I</AnimationText>
        <AnimationText>N</AnimationText>
        <AnimationText>E</AnimationText>
        <AnimationText>E</AnimationText>
      </Container>
      <GrayText>최고의 꽃을 찾는 중입니다</GrayText>
    </Wrapper>
  );
}

export default Loading;
