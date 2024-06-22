import styled from "styled-components";

import { useState } from "react";

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
      <Header login={true} />
      <Content>
        <Profile openModal={openModal} />
        <RecentLog />
        <DeleteAccount>회원탈퇴</DeleteAccount>
      </Content>
    </Wrapper>
  );
}

export default Mypage;
