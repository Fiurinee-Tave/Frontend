import styled from "styled-components";

import Category from "../icons/CategoryIcon";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const EventContainer = styled.div`
  width: 100%;
  height: calc(100% - 40px - 15px);
  /* 전체 - UserInfo 높이 - gap */

  @media (max-width: 575px) {
    height: calc(100% - 150px - 80px - 15px);
  }
`;

const EventTitle = styled.div`
  width: 100%;
  height: 40px;
  padding: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MiddleText = styled.div`
  font-size: 20px;

  @media (max-width: 575px) {
    font-size: 15px;
  }
`;

const SmallText = styled.div`
  @media (max-width: 575px) {
    font-size: 12px;
  }
`;

const AddEventBtn = styled.button`
  width: 130px;
  height: 30px;
  border: none;
  //  border: 1px solid #ffb8b8;
  background-color: #f8e1e1;
  border-radius: 50px;
  font-family: "Gowun Batang", serif;
  font-weight: 400;
  font-style: normal;

  box-shadow: 1px 1px 1px #ebabab;

  @media (max-width: 575px) {
    width: 100px;
    font-size: 12px;
  }
`;

const EventContent = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  background-color: #f4f4f4;
  border-radius: 10px;

  display: flex;

  @media (max-width: 575px) {
    height: calc(100% - 40px);
  }
`;

const EventPage = styled.div`
  width: calc(100% - 60px);
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: calc((100% - 165px) / 2);

  @media (max-width: 575px) {
    width: calc(100% - 30px);
    gap: calc((100% - 125px) / 2);
  }
`;

const PageButton = styled.button`
  width: 30px;
  height: 100%;
  border: none;
  border-radius: 10px;
  background-color: #f4f4f4;
  color: #cccbcb;

  cursor: pointer;

  @media (max-width: 575px) {
    width: 15px;
    padding: 0;
  }
`;

const NullButton = styled.div`
  width: 30px;
  height: 100%;

  @media (max-width: 575px) {
    width: 15px;
    padding: 0;
  }
`;

const EventItem = styled.button`
  width: 100%;
  height: 55px;
  background-color: #d8e8fb;
  border: none;
  border-radius: 50px;
  padding: 5px;
  padding-right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-family: "Gowun Batang", serif;
  font-weight: 400;
  font-style: normal;

  cursor: pointer;

  box-shadow: 2px 2px 2px #b6cfec;

  @media (max-width: 575px) {
    height: 40px;
    padding: 3px;
    gap: 5px;
    padding-right: 10px;
  }
`;

const EventInfo = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 575px) {
    gap: 5px;
  }
`;

const EventList = [
  {
    id: 0,
    category: 0,
    title: "일이삼사오육칠팔",
    date: "2002.07.27",
    dday: "D-000",
  },
  {
    id: 1,
    category: 1,
    title: "내 생일1",
    date: "2002.07.27",
    dday: "D-000",
  },
  {
    id: 2,
    category: 2,
    title: "내 생일2",
    date: "2002.07.27",
    dday: "D-000",
  },
  {
    id: 3,
    category: 3,
    title: "내 생일3",
    date: "2002.07.27",
    dday: "D-000",
  },
  {
    id: 4,
    category: 4,
    title: "내 생일4",
    date: "2002.07.27",
    dday: "D-000",
  },
  {
    id: 5,
    category: 1,
    title: "내 생일5",
    date: "2002.07.27",
    dday: "D-000",
  },
  {
    id: 6,
    category: 0,
    title: "내 생일6",
    date: "2002.07.27",
    dday: "D-000",
  },
  {
    id: 7,
    category: 3,
    title: "내 생일7",
    date: "2002.07.27",
    dday: "D-000",
  },
];

function Anniversary({ openModal }) {
  const isMobile = useMediaQuery({ query: "(max-width: 575px)" });
  const [pageNumber, setPageNumber] = useState(0);
  const [showEvent, setShowEvent] = useState();

  const openCreateModal = () => {
    openModal("create");
  };

  const openModifyModal = () => {
    openModal("modify");
  };

  useEffect(() => {
    const list = EventList.slice(pageNumber * 3, pageNumber * 3 + 3);

    setShowEvent(
      list.map((v, i) => (
        <EventItem key={v.id} onClick={openModifyModal}>
          <EventInfo>
            <Category number={v.category} isMobile={isMobile} />
            {isMobile ? (
              <SmallText>{v.title} : </SmallText>
            ) : (
              <MiddleText>{v.title} : </MiddleText>
            )}
            {isMobile ? (
              <SmallText>{v.date}</SmallText>
            ) : (
              <MiddleText>{v.date}</MiddleText>
            )}
          </EventInfo>
          {isMobile ? (
            <SmallText>{v.dday}</SmallText>
          ) : (
            <MiddleText>{v.dday}</MiddleText>
          )}
        </EventItem>
      ))
    );
  }, [pageNumber, isMobile]);

  useEffect(() => {}, [showEvent]);

  return (
    <EventContainer>
      <EventTitle>
        <MiddleText>다가오는 기념일</MiddleText>
        <AddEventBtn onClick={openCreateModal}>+기념일 추가하기</AddEventBtn>
      </EventTitle>
      <EventContent>
        {pageNumber === 0 ? (
          <NullButton />
        ) : (
          <PageButton onClick={() => setPageNumber(pageNumber - 1)}>
            ◀
          </PageButton>
        )}

        <EventPage>{showEvent}</EventPage>
        {Math.ceil(EventList.length / 3 - 1) === pageNumber ? (
          <NullButton />
        ) : (
          <PageButton onClick={() => setPageNumber(pageNumber + 1)}>
            ▶
          </PageButton>
        )}
      </EventContent>
    </EventContainer>
  );
}

export default Anniversary;
