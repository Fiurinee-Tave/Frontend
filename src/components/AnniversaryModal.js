import styled from "styled-components";

import DateSetting from "./DateSetting";
import CategoryIcon from "../icons/CategoryIcon";

import { useState, useEffect } from "react";

import { format } from "date-fns";

//import axios from "axios";

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

const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  justify-content: center;
  align-items: center;
`;

const SelectTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 18px;
`;

const SelectItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const CategoryText = styled.div`
  color: #ffa0a0;
`;

const NameItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NameInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  background-color: #fff3f3;
  text-align: center;
  font-size: 18px;

  font-family: "Gowun Batang", serif;
  font-weight: 400;
  font-style: normal;
`;

const GuideText = styled.div`
  width: 100%;
  font-size: 15px;
  display: flex;
  justify-content: end;
  align-items: center;

  gap: 10px;

  @media (max-width: 575px) {
    font-size: 11px;
  }
`;

const AddButton = styled.button`
  width: 100px;
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
`;

const guide = [
  "생일은 1년마다 반복됩니다.",
  "연인은 100일, 1년마다 반복됩니다.",
  "배우자는 1년마다 반복됩니다.",
  "가족은 1년마다 반복됩니다.",
  "기타는 1년마다 반복됩니다.",
];

function AnniversaryModal({
  closeModal,
  modal,
  anniversary,
  addAnniversary,
  modifyAnniversary,
  deleteAnniversary,
}) {
  const [category, setCategory] = useState([
    { id: 0, text: "생일", selected: false },
    { id: 1, text: "연인", selected: false },
    { id: 2, text: "배우자", selected: false },
    { id: 3, text: "가족", selected: false },
    { id: 4, text: "기타", selected: false },
  ]);
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (modal === "modify") {
      setName(anniversary[0].name);
      setDate(anniversary[0].anniversaryDate);
      setCategory(
        category.map((v) =>
          v.text === anniversary[0].type
            ? { ...v, selected: true }
            : { ...v, selected: false }
        )
      );
    }
  }, []);

  const selectedCategory = (e) => {
    const id = e.target.id;

    setCategory(
      category.map((v) =>
        v.id === parseInt(id)
          ? { ...v, selected: true }
          : { ...v, selected: false }
      )
    );
  };

  const selectedName = (e) => {
    if (e.target.value.length > 8) {
      setName(e.target.value.substr(0, 8));
    } else {
      setName(e.target.value);
    }
  };

  const submitAnniversary = () => {
    if (category.find((v) => v.selected === true) === undefined) {
      alert("카테고리는 필수입니다.");
      return;
    }

    if (name === "") {
      alert("기념일 이름은 필수입니다.");
      return;
    }

    if (modal === "create") {
      addAnniversary(
        name,
        format(date, "yyyy-MM-dd"),
        category.find((v) => v.selected === true).text
      );
    } else {
      modifyAnniversary(
        name,
        format(date, "yyyy-MM-dd"),
        category.find((v) => v.selected === true).text
      );
    }
  };

  if (modal === "create") {
    return (
      <Wrapper>
        <Container>
          <Header>
            <Title>기념일 추가하기</Title>
            <CloseButton onClick={closeModal}>❌</CloseButton>
          </Header>
          <SelectContainer>
            <SelectTitle>#카테고리</SelectTitle>
            <SelectItem>
              {category.map((v) => (
                <CategoryItem key={v.id}>
                  <CategoryIcon
                    onClick={selectedCategory}
                    type={v.text}
                    border={{
                      border: v.selected
                        ? "2px solid #7489BE"
                        : "1px solid #7489BE",
                    }}
                  />
                  <CategoryText>{v.text}</CategoryText>
                </CategoryItem>
              ))}
            </SelectItem>
            {category.map((v, i) =>
              v.selected ? <GuideText key={i}>{guide[i]}</GuideText> : null
            )}
          </SelectContainer>
          <SelectContainer>
            <SelectTitle>#이름</SelectTitle>
            <SelectItem>
              <NameItem>
                "
                <NameInput type="text" value={name} onChange={selectedName} />"
              </NameItem>
            </SelectItem>
            <GuideText>*이름은 1~8글자입니다.</GuideText>
          </SelectContainer>
          <SelectContainer>
            <SelectTitle>#날짜</SelectTitle>
            <SelectItem>
              <DateSetting selectedDate={date} setSelectedDate={setDate} />
            </SelectItem>
            <GuideText>
              *직접입력을 하거나 클릭하면 날짜를 선택할 수 있습니다.
            </GuideText>
          </SelectContainer>
          <GuideText>
            <AddButton onClick={submitAnniversary}>기념일 추가</AddButton>
          </GuideText>
        </Container>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Container>
          <Header>
            <Title>기념일 수정 & 삭제</Title>
            <CloseButton onClick={closeModal}>❌</CloseButton>
          </Header>
          <SelectContainer>
            <SelectTitle>#카테고리</SelectTitle>
            <SelectItem>
              {category.map((v) => (
                <CategoryItem key={v.id}>
                  <CategoryIcon
                    onClick={selectedCategory}
                    type={v.text}
                    border={{
                      border: v.selected
                        ? "2px solid #7489BE"
                        : "1px solid #7489BE",
                    }}
                  />
                  <CategoryText>{v.text}</CategoryText>
                </CategoryItem>
              ))}
            </SelectItem>
            {category.map((v, i) =>
              v.selected ? <GuideText key={i}>{guide[i]}</GuideText> : null
            )}
          </SelectContainer>
          <SelectContainer>
            <SelectTitle>#이름</SelectTitle>
            <SelectItem>
              <NameItem>
                "
                <NameInput type="text" value={name} onChange={selectedName} />"
              </NameItem>
            </SelectItem>
            <GuideText>*이름은 1~8글자입니다.</GuideText>
          </SelectContainer>
          <SelectContainer>
            <SelectTitle>#날짜</SelectTitle>
            <SelectItem>
              <DateSetting selectedDate={date} setSelectedDate={setDate} />
            </SelectItem>
            <GuideText>
              *직접입력을 하거나 클릭하면 날짜를 선택할 수 있습니다.
            </GuideText>
          </SelectContainer>
          <GuideText>
            <AddButton onClick={submitAnniversary}>기념일 수정</AddButton>
            <DeleteButton onClick={deleteAnniversary}>삭제</DeleteButton>
          </GuideText>
        </Container>
      </Wrapper>
    );
  }
}

export default AnniversaryModal;
