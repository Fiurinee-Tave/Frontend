import styled from "styled-components";

import { useRef, useReducer, useState, useEffect } from "react";

import Header from "../components/Header";
import Profile from "../components/Profile";
import RecentLog from "../components/RecentLog";
import AnniversaryModal from "../components/AnniversaryModal";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //iphone SE => width:375px;
  @media (max-width: 575px) {
  }
`;

const Content = styled.div`
  width: 70%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  //iphone SE => width:375px;
  @media (max-width: 575px) {
    width: 90%;
    margin-top: 30px;
  }
`;

const DeleteAccount = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-bottom: 30px;

  @media (max-width: 575px) {
    width: 90%;
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

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.newItem];
    }
    case "UPDATE": {
      return state;
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
}

function Mypage({ userInfo }) {
  const [modal, setModal] = useState({ open: false, type: null });
  const [anniversary, dispatch] = useReducer(reducer, EventList);
  const idRef = useRef(8);

  const onCreate = (category, name, date) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        category,
        title: name,
        date,
        dday: "D-000",
      },
    });
    idRef.current += 1;
  };

  const openModal = (type) => {
    document.body.style.overflow = "hidden";
    setModal({ open: true, type: type });
  };

  const closeModal = () => {
    document.body.style.overflow = "unset";
    setModal({ open: false, type: null });
  };

  useEffect(() => {
    //rendering
    //console.log(anniversary);
    console.log(userInfo);
  }, []);

  return (
    <Wrapper>
      {modal.open ? (
        <AnniversaryModal
          closeModal={closeModal}
          type={modal.type}
          onCreate={onCreate}
        />
      ) : null}
      <Header login={true} />
      <Content>
        <Profile openModal={openModal} data={anniversary} userInfo={userInfo} />
        <RecentLog />
        <DeleteAccount>회원탈퇴</DeleteAccount>
      </Content>
    </Wrapper>
  );
}

export default Mypage;
