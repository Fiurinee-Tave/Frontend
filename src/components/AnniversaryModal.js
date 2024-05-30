import styled from "styled-components";
import IconBirthday from "../icons/IconBirthday";
import DateSetting from "./DateSetting";

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

const SelectedContainer = styled.div`
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
  height: 130px;
  border: 1px solid black;
  //flex로 5개 나열
`;

// const DateSpace = styled.div`
//   width: 250px;
//   height: 130px;
//   border: 1px solid black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const DateSpace = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  gap: 10px;
  background-color: #dbe6f4;
  border: 1px solid #9ebfe5;
  border-radius: 50px;
  padding: 5px 10px 5px 5px;

  align-items: center;
  font-size: 18px;
`;

const InputDate = styled.input`
  width: 160px;
  border: none;
  background: none;
  border-bottom: 1px solid black;
  outline: none;
  font-size: 18px;
  font-weight: 500;
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
          <SelectedContainer>
            <BlueText>카테고리 선택</BlueText>
            <CategoryIcon></CategoryIcon>
          </SelectedContainer>
          <SelectedContainer>
            <BlueText>날짜 선택</BlueText>
            <DateSpace>
              <IconBirthday />
              {/* <InputDate type="date" /> */}
              <DateSetting />
              {/* input type=date는 모바일에서 달력 아이콘이 보이지 않음, react 라이브러리로 변경 */}
            </DateSpace>
          </SelectedContainer>
        </Container>
      </Wrapper>
    );
  } else {
    return <div>{type}</div>;
  }
}

export default AnniversaryModal;
