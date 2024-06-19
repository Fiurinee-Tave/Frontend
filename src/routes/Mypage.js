import Header from "../components/Header";
import Profile from "../components/Profile";
import RecentLog from "../components/RecentLog";
import styled from "styled-components";
import AnniversaryModal from "../components/AnniversaryModal";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;

  //태블릿
  @media (max-width: 1199px) {
  }

  //모바일 가로
  @media (max-width: 767px) {
  }

  //모바일 세로
  @media (max-width: 575px) {
  }
`;

const DeleteAccount = styled.div`
  width: 70%;
  display: flex;
  justify-content: end;
  margin-bottom: 30px;

  @media (max-width: 575px) {
    width: 90%;
  }
`;

function Mypage() {
  const [modal, setModal] = useState({ open: false, type: null });

  const openModal = (type) => {
    document.body.style.overflow = "hidden";
    setModal({ open: true, type: type });
  };

  const closeModal = () => {
    document.body.style.overflow = "unset";
    setModal({ open: false, type: null });
  };

  return (
    <Wrapper>
      {modal.open ? (
        <AnniversaryModal closeModal={closeModal} type={modal.type} />
      ) : null}
      <Header />
      <Profile openModal={openModal} />
      <RecentLog />
      <DeleteAccount>회원탈퇴</DeleteAccount>
    </Wrapper>
  );
}

export default Mypage;
