import styled from "styled-components";

import { useRef, useReducer, useState, useEffect } from "react";

import Header from "../components/Header";
import Profile from "../components/Profile";
import RecentLog from "../components/RecentLog";
import AnniversaryModal from "../components/AnniversaryModal";
import axios from "axios";

import refreshAccessToken from "../axios";

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

// const EventList = [
//   {
//     id: 0,
//     category: 0,
//     title: "일이삼사오육칠팔",
//     date: "2002.07.27",
//     dday: "D-000",
//   },
//   {
//     id: 1,
//     category: 1,
//     title: "내 생일1",
//     date: "2002.07.27",
//     dday: "D-000",
//   },
//   {
//     id: 2,
//     category: 2,
//     title: "내 생일2",
//     date: "2002.07.27",
//     dday: "D-000",
//   },
//   {
//     id: 3,
//     category: 3,
//     title: "내 생일3",
//     date: "2002.07.27",
//     dday: "D-000",
//   },
//   {
//     id: 4,
//     category: 4,
//     title: "내 생일4",
//     date: "2002.07.27",
//     dday: "D-000",
//   },
//   {
//     id: 5,
//     category: 1,
//     title: "내 생일5",
//     date: "2002.07.27",
//     dday: "D-000",
//   },
//   {
//     id: 6,
//     category: 0,
//     title: "내 생일6",
//     date: "2002.07.27",
//     dday: "D-000",
//   },
//   {
//     id: 7,
//     category: 3,
//     title: "내 생일7",
//     date: "2002.07.27",
//     dday: "D-000",
//   },
// ];

// function reducer(state, action) {
//   switch (action.type) {
//     case "CREATE": {
//       return [...state, action.newItem];
//     }
//     case "UPDATE": {
//       return state;
//     }
//     case "DELETE": {
//       return state.filter((it) => it.id !== action.targetId);
//     }
//     default:
//       return state;
//   }
// }

function Mypage() {
  const [modal, setModal] = useState({ open: false, modalType: null });
  //const [anniversary, dispatch] = useReducer(reducer, EventList);
  const idRef = useRef(8);
  const [userInfo, setUserInfo] = useState({});

  const handleUserInfomation = () => {
    const accessToken = localStorage.getItem("access_token");
    const memberId = localStorage.getItem("member_id");
    fetchData(accessToken, memberId);
  };
  const fetchData = async (accessToken, memberId) => {
    try {
      const response = await axios.get(
        `http://3.36.169.209:8080/member/${memberId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      console.log("Fetched user data:", response.data);

      setUserInfo(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        refreshAccessToken(memberId);
      }
      console.error("Failed to fetch user data:", error);
    }
  };

  const addAnniversary = async (accessToken, memberId, name, date, type) => {
    try {
      const response = await axios.post(
        `http://3.36.169.209:8080/member/${memberId}/anniversary`,
        {
          name,
          date,
          type,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      console.log(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        refreshAccessToken(memberId);
      }
      console.error("Failed to add user anniversary:", error);
    }
  };

  const submitAnniversary = (name, date, type) => {
    const accessToken = localStorage.getItem("access_token");
    const memberId = localStorage.getItem("member_id");
    addAnniversary(accessToken, memberId, name, date, type);

    closeModal();
  };

  const openModal = (type) => {
    document.body.style.overflow = "hidden";
    setModal({ open: true, modalType: type });
  };

  const closeModal = () => {
    document.body.style.overflow = "unset";
    setModal({ open: false, modalType: null });
  };

  // const onCreate = (category, name, date) => {
  //   dispatch({
  //     type: "CREATE",
  //     newItem: {
  //       id: idRef.current,
  //       category,
  //       title: name,
  //       date,
  //       dday: "D-000",
  //     },
  //   });
  //   idRef.current += 1;
  // };

  useEffect(() => {
    handleUserInfomation();
    console.log(userInfo);
  }, []);

  return (
    <Wrapper>
      {modal.open ? (
        <AnniversaryModal
          closeModal={closeModal}
          modal={modal.modalType}
          addAnniversary={submitAnniversary}
          //onCreate={onCreate}
        />
      ) : null}
      <Header login={true} />
      <Content>
        <Profile openModal={openModal} userInfo={userInfo} />
        <RecentLog />
        <DeleteAccount>회원탈퇴</DeleteAccount>
      </Content>
    </Wrapper>
  );
}

export default Mypage;
