import styled from "styled-components";
import IconBirthday from "../icons/IconBirthday";
import { useState, useEffect } from "react";

//다 뜯어고쳐,,,,,, 구려,,,,,,,,,,,
const Wrapper = styled.div`
  width: 100%;
  height: 85%;
`;

const AnniSetting = styled.div`
  width: 100%;
  height: 15%;
  padding: 0 10px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AnniButton = styled.button`
  width: 120px;
  height: 100%;
  background-color: #f8e1e1;
  border: 1px solid #ffb8b8;
  border-radius: 50px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  height: calc(85% - 5px);
  background-color: #ebebeb;
  padding: 15px 0;
  display: flex;
`;

const AnniPage = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

const PageBtn = styled.button`
  width: 5%;
  height: 100%;
  border: none;
  background-color: #ebebeb;
  color: #cccbcb;

  cursor: pointer;
`;

const NullBtn = styled.button`
  width: 5%;
  height: 100%;
  border: none;
  background-color: none;
  color: #cccbcb;
  opacity: 0;
`;

const AnniItem = styled.button`
  height: 50px;
  display: flex;
  gap: 10px;
  background-color: #dbe6f4;
  border: 1px solid #9ebfe5;
  border-radius: 50px;
  padding: 5px;
  padding-right: 10px;

  align-items: center;
  font-size: 18px;
  cursor: pointer;
`;

const AnniText = styled.div``;

const AnniDate = styled.div``;

const AnniDday = styled.div``;

const data = [
  { id: 0, text: "내 생일", BD: "2002.07.27" },
  { id: 1, text: "1", BD: "2002.07.27" },
  { id: 2, text: "2", BD: "2002.07.27" },
  { id: 3, text: "3", BD: "2002.07.27" },
  { id: 4, text: "4", BD: "2002.07.27" },
  { id: 5, text: "5", BD: "2002.07.27" },
  { id: 6, text: "6", BD: "2002.07.27" },
  { id: 7, text: "7", BD: "2002.07.27" },
  { id: 8, text: "8", BD: "2002.07.27" },
  { id: 9, text: "9", BD: "2002.07.27" },
];

function Anniversary({ openModal }) {
  const [anniContainer, setAnniContainer] = useState();
  const [pageNumber, setPageNumber] = useState(0);

  const openCreateModal = () => {
    openModal("create");
  };

  const openModifyModal = () => {
    openModal("modify");
  };

  useEffect(() => {
    const list = data.slice(pageNumber * 3, pageNumber * 3 + 3);

    setAnniContainer(
      list.map((v, i) => (
        <AnniItem key={v.id} onClick={openModifyModal}>
          <IconBirthday />
          <AnniText>{v.text} : </AnniText>
          <AnniDate>{v.BD}</AnniDate>
        </AnniItem>
      ))
    );
  }, [pageNumber]);

  return (
    <Wrapper>
      <AnniSetting>
        <div>곧 다가오는 기념일</div>
        <AnniButton onClick={openCreateModal}>기념일 추가하기</AnniButton>
      </AnniSetting>
      {pageNumber === 0 ? (
        <Container>
          <NullBtn></NullBtn>
          <AnniPage>{anniContainer}</AnniPage>
          <PageBtn onClick={() => setPageNumber(pageNumber + 1)}>▶</PageBtn>
        </Container>
      ) : Math.ceil(data.length / 3 - 1) === pageNumber ? (
        <Container>
          <PageBtn onClick={() => setPageNumber(pageNumber - 1)}>◀</PageBtn>
          <AnniPage>{anniContainer}</AnniPage>
          <NullBtn></NullBtn>
        </Container>
      ) : (
        <Container>
          <PageBtn onClick={() => setPageNumber(pageNumber - 1)}>◀</PageBtn>
          <AnniPage>{anniContainer}</AnniPage>
          <PageBtn onClick={() => setPageNumber(pageNumber + 1)}>▶</PageBtn>
        </Container>
      )}
    </Wrapper>
  );
}

export default Anniversary;
