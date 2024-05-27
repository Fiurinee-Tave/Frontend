import styled from "styled-components";
import IconBirthday from "../Icons/IconBirthday";
import { useState, useEffect } from "react";

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
  background-color: #f4f4f4;
  padding: 15px;
  border: 1px solid black;
`;

const AnniItem = styled.button`
  height: 50px;
  display: flex;
  gap: 10px;
  background-color: #dbe6f4;
  border: none;
  border-radius: 50px;
  padding: 5px;
  padding-right: 10px;
  margin-bottom: 15px;
  align-items: center;
  font-size: 18px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0px;
  }
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

function Anniversary() {
  const [anniContainer, setAnniContainer] = useState();
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const list = data.slice(pageNumber * 3, pageNumber * 3 + 3);

    // setAnniContainer(
    //   list.map((v, i) => (
    //     <Container key={i}>
    //       {v.map((v) => (
    //         <AnniItem key={v.id}>
    //           <IconBirthday />
    //           <AnniText>{v.text} : </AnniText>
    //           <AnniDate>{v.BD}</AnniDate>
    //         </AnniItem>
    //       ))}
    //     </Container>
    //   ))
    // );

    setAnniContainer(
      <Container>
        {list.map((v, i) => (
          <AnniItem key={v.id}>
            <IconBirthday />
            <AnniText>{v.text} : </AnniText>
            <AnniDate>{v.BD}</AnniDate>
          </AnniItem>
        ))}
      </Container>
    );
  }, [pageNumber]);

  return (
    <Wrapper>
      <AnniSetting>
        <div>곧 다가오는 기념일</div>
        <AnniButton>기념일 추가하기</AnniButton>
      </AnniSetting>
      {anniContainer}
      <button onClick={() => setPageNumber(pageNumber - 1)}>-</button>
      <button onClick={() => setPageNumber(pageNumber + 1)}>+</button>
    </Wrapper>
  );
}

export default Anniversary;
