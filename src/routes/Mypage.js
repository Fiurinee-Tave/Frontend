import styled from "styled-components";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

function Mypage() {
  const [modal, setModal] = useState({
    open: false,
    modalType: null,
    id: null,
  });
  const [userInfo, setUserInfo] = useState({});
  const [anniversaries, setAnniversaries] = useState({});
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token");
  const memberId = localStorage.getItem("member_id");

  useEffect(() => {
    if (localStorage.getItem("member_id") === null) {
      //비회원의 접근일 경우 메인으로 이동시키기
      navigate("/");
    } else {
      //회원의 접근일 경우 회원 정보 받아오기
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://3.36.169.209:8080/member/${memberId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      setUserInfo(response.data);
      setAnniversaries(response.data.anniversaries);
    } catch (error) {
      if (error.response.status === 401) {
        refreshAccessToken(memberId);
      }
      console.error("Failed to fetch user data:", error);
    }
  };

  const addAnniversary = async (name, date, type) => {
    try {
      await axios.post(
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

      fetchData();
      closeModal();
    } catch (error) {
      if (error.response.status === 401) {
        refreshAccessToken(memberId);
      }
      console.error("Failed to add user anniversary:", error);
    }
  };

  const modifyAnniversary = async (name, date, type) => {
    try {
      await axios.put(
        `http://3.36.169.209:8080/member/${memberId}/anniversary/${modal.id}`,
        {
          name,
          date,
          type,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      fetchData();
      closeModal();
    } catch (error) {
      if (error.response.status === 401) {
        refreshAccessToken(memberId);
      }
      console.error("Failed to add user anniversary:", error);
    }
  };

  const deleteAnniversary = async () => {
    alert("정말 삭제하시겠습니까?");
    try {
      await axios.delete(
        `http://3.36.169.209:8080/member/${memberId}/anniversary/${modal.id}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      fetchData();
      closeModal();
    } catch (error) {
      if (error.response.status === 401) {
        refreshAccessToken(memberId);
      }
      console.error("Failed to add user anniversary:", error);
    }
  };

  const openModal = (type, id) => {
    document.body.style.overflow = "hidden";
    setModal({ open: true, modalType: type, id: id });
  };

  const closeModal = () => {
    document.body.style.overflow = "unset";
    setModal({ ...modal, open: false });
  };

  return (
    <Wrapper>
      {modal.open ? (
        <AnniversaryModal
          closeModal={closeModal}
          modal={modal.modalType}
          anniversary={anniversaries.filter((v) => v.id === parseInt(modal.id))}
          addAnniversary={addAnniversary}
          modifyAnniversary={modifyAnniversary}
          deleteAnniversary={deleteAnniversary}
        />
      ) : null}
      <Header login={true} />
      <Content>
        <Profile
          openModal={openModal}
          userInfo={userInfo}
          anniversaries={anniversaries}
        />
        <RecentLog />
        <DeleteAccount>회원탈퇴</DeleteAccount>
      </Content>
    </Wrapper>
  );
}

export default Mypage;
