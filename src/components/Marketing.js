import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`;

const Container = styled.div`
  width: 400px;

  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  background-color: #fff3f3;
  border-radius: 15px;

  @media (max-width: 575px) {
    width: 300px;
    gap: 20px;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 15px;
  border-bottom: 1px solid #998e8e;
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Section = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 40px;
`;

const Text = styled.div`
  text-align: center;
  line-height: 30px;

  @media (max-width: 575px) {
    line-height: 20px;
    font-size: 15px;
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
`;

const AgreeButton = styled.button`
  width: 140px;
  height: 30px;
  border: none;
  font-size: 17px;
  background-color: #ffd0d0;
  color: white;
  box-shadow: 1px 1px 1px #bebebe;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Gowun Batang", serif;
  font-weight: 400;
  font-style: normal;

  cursor: pointer;
  @media (max-width: 575px) {
    font-size: 14px;
  }
`;

const DeleteButton = styled.button`
  width: 60px;
  height: 30px;
  border: none;
  font-size: 17px;
  background-color: #ce7373;
  color: white;
  box-shadow: 1px 1px 1px #bebebe;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Gowun Batang", serif;
  font-weight: 400;
  font-style: normal;

  cursor: pointer;
  @media (max-width: 575px) {
    font-size: 14px;
  }
`;

const GuideText = styled.div`
  font-size: 15px;

  @media (max-width: 575px) {
    font-size: 12px;
  }
`;

function Marketing({ closeMarketing, changeMarketing, marketing }) {
  const agree = () => {
    changeMarketing(true);
    closeMarketing();
  };

  const disagree = () => {
    changeMarketing(false);
    closeMarketing();
  };
  return marketing.type === true ? (
    <Wrapper>
      <Container>
        <Header>
          <Title>마케팅 수신 동의 철회</Title>
          <CloseButton onClick={closeMarketing}>❌</CloseButton>
        </Header>
        <Section>
          <Text>
            마케팅 수신 동의를 철회하시겠습니까? 더이상 Fiurinee의{" "}
            <span style={{ color: "#ce7373" }}>기념일 알림</span>을 받아보실 수
            없습니다.
          </Text>
          <GuideText>
            *설정한 기념일의 3일 전과 기념일 당일 전송됩니다.
          </GuideText>
          <Buttons>
            <AgreeButton onClick={disagree}>마케팅 수신 철회</AgreeButton>
            <DeleteButton onClick={closeMarketing}>닫기</DeleteButton>
          </Buttons>
        </Section>
      </Container>
    </Wrapper>
  ) : (
    <Wrapper>
      <Container>
        <Header>
          <Title>마케팅 수신 동의</Title>
          <CloseButton onClick={closeMarketing}>❌</CloseButton>
        </Header>
        <Section>
          <Text>
            마이페이지 하단의 마케팅 동의 수신을 클릭하시면 Fiurinee의{" "}
            <span style={{ color: "#ce7373" }}>기념일 알림</span>을 받아보실 수
            있습니다.
          </Text>
          <GuideText>
            *설정한 기념일의 3일 전과 기념일 당일 전송됩니다.
          </GuideText>
          <Buttons>
            <AgreeButton onClick={agree}>마케팅 수신 동의</AgreeButton>
            <DeleteButton onClick={closeMarketing}>닫기</DeleteButton>
          </Buttons>
        </Section>
      </Container>
    </Wrapper>
  );
}

export default Marketing;
