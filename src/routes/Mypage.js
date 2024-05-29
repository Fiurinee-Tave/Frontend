import Header from "../components/Header";
import Profile from "../components/Profile";
import RecentLog from "../components/RecentLog";
import styled from "styled-components";
import AnniversaryModal from "../components/AnniversaryModal";
import { useState } from "react";

//마케팅 동의 버튼
//프로필 수정 버튼
//프로필 수정 화면 미구현
//기념일 추가,삭제,수정 모달도,,,

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

const DeleteAccount = styled.div`
  width: 70%;
  display: flex;
  justify-content: end;
  margin-bottom: 30px;
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
