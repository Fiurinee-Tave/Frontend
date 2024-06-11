import styled from "styled-components";
import IconBirthday from "../icons/IconBirthday";
import BigIconBirthday from "../icons/BigIconBirthday";
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

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  gap: 15px 30px;
`;

const CategorySet = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const CategoryText = styled.div`
  color: #ffa0a0;
`;

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

const SubmitBtn = styled.button`
  align-self: flex-end;
  margin-right: 15px;

  width: 120px;
  height: 40px;
  font-size: 15px;

  border: none;

  color: white;
  background-color: #ffd0d0;
  box-shadow: 2px 2px 2px #c0b7b7;

  cursor: pointer;
`;

const DeleteBtn = styled.button`
  margin-right: 15px;

  width: 70px;
  height: 40px;
  font-size: 15px;

  border: none;

  color: white;
  background-color: #ce7373;
  box-shadow: 2px 2px 2px #c0b7b7;

  cursor: pointer;
`;

const Buttons = styled.div`
  align-self: flex-end;
`;

function AnniversaryModal({ closeModal, type }) {
  const DeleteAnniversary = () => {
    alert("정말 삭제하시겠습니까?");
    closeModal();
  };

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
            <CategoryIcon>
              <CategorySet>
                <BigIconBirthday />
                <CategoryText>생일</CategoryText>
              </CategorySet>
              <CategorySet>
                <BigIconBirthday />
                <CategoryText>연인</CategoryText>
              </CategorySet>
              <CategorySet>
                <BigIconBirthday />
                <CategoryText>배우자</CategoryText>
              </CategorySet>
              <CategorySet>
                <BigIconBirthday />
                <CategoryText>가족</CategoryText>
              </CategorySet>
              <CategorySet>
                <BigIconBirthday />
                <CategoryText>기타</CategoryText>
              </CategorySet>
            </CategoryIcon>
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

          <SubmitBtn onClick={closeModal}>기념일 추가</SubmitBtn>
        </Container>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Container>
          <Header>
            <Title>기념일 수정하기</Title>
            <CloseBtn onClick={closeModal}>❌</CloseBtn>
          </Header>
          <SelectedContainer>
            <BlueText>카테고리 선택</BlueText>
            <CategoryIcon>
              <BigIconBirthday />
              <BigIconBirthday />
              <BigIconBirthday />
              <BigIconBirthday />
              <BigIconBirthday />
            </CategoryIcon>
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
          <Buttons>
            <SubmitBtn onClick={closeModal}>수정 완료</SubmitBtn>
            <DeleteBtn onClick={DeleteAnniversary}>삭제</DeleteBtn>
          </Buttons>
        </Container>
      </Wrapper>
    );
  }
}

export default AnniversaryModal;
