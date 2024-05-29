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
  width: 500px;
  height: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  background-color: #fff3f3;
  border-radius: 15px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  padding: 5px 0;
  border-bottom: 1px solid #998e8e;
`;

const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
`;

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const BlueText = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dbe6f4;
  border: 1px solid #7489be;
  border-radius: 50px;
`;

const CategoryIcon = styled.div`
  width: 250px;
  height: 100px;
  border: 1px solid black;
`;

function AnniversaryModal({ closeModal, type }) {
  if (type === "create") {
    return (
      <Wrapper>
        <Container>
          <Header>
            <Title>기념일 추가하기</Title>
            <CloseBtn onClick={closeModal}>❌</CloseBtn>
          </Header>
          <CategoryContainer>
            <BlueText>카테고리 선택</BlueText>
            <CategoryIcon></CategoryIcon>
          </CategoryContainer>
        </Container>
      </Wrapper>
    );
  } else {
    return <div>{type}</div>;
  }
}

export default AnniversaryModal;
