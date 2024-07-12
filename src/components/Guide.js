import styled from "styled-components";
import { useState } from "react";

 const MyModal = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

 const MyPageModal = styled.div`
  background-color: #ffebeb;
  width: 52vw;
  height: 55vh;
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding:5vw;
  @media (max-width: 575px) {
    width: 55vw;
    height: 18vh;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.8vw;
  cursor: pointer;
`;

const RightBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 1%;
  background: none;
  border: none;
  font-size: 1.8vw;
  cursor: pointer;

`;
const LeftBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 1%;
  background: none;
  border: none;
  font-size: 1.8vw;
  cursor: pointer;

`;

const Text = styled.div`
font-size: 1.5vw;
line-height:1.5;
  @media (max-width: 575px) {
    font-size: 1.7vw;
  }
`;

const TextFiurinee = styled.div`
font-size: 1.7vw;
  @media (max-width: 575px) {
    font-size: 1.7vw;
  }
`;

const TextTitle = styled.div`
font-size: 1.6vw;
line-height:3.8;
  @media (max-width: 575px) {
    font-size: 1.8vw;
  }
`;

const Highlight = styled.span`
  color:#ff6347;
`;

function Guide({ handleClose }) {
  const [page, setPage] = useState(true);
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const rightClick = () => {
    setPage(false);
  };

  const leftClick = () => {
    setPage(true);
  };

  return (
    <MyModal onClick={handleClose}>
        {page?
      <MyPageModal onClick={handleModalClick}>
        <CloseButton onClick={handleClose}>X</CloseButton>
        
        <Text>
            <TextFiurinee>저희 <Highlight>"피우리니"</Highlight> 에서는</TextFiurinee>
        <TextTitle>💐선물할 꽃 추천 받기</TextTitle>
            1. 입력하신 상황에 <Highlight>선물하기 좋은 꽃을 추천</Highlight>해 드립니다.
            <br/>2. 추천된 꽃과 함께 꽃다발 조합 시 어울리는 꽃을 추천해 드립니다.
            <br/>3. 꽃을 선물할 상황에 적합한 멘트도 추천해 드립니다.
        </Text>
        <RightBtn onClick={rightClick}>⟩</RightBtn>

      </MyPageModal>:
      <MyPageModal onClick={handleModalClick}>
        <CloseButton onClick={handleClose}>X</CloseButton>
        <Text>
            <TextFiurinee>저희 <Highlight>"피우리니"</Highlight> 에서는</TextFiurinee>
        <TextTitle>💁🏻마이페이지</TextTitle>
            1. 회원가입 시 <Highlight>추천받았던 꽃의 기록</Highlight>을 확인할 수 있습니다.
            <br/>2. 찜 기능을 통해 마음에 드는 기록만 따로 보관할 수 있습니다.
            <br/>3. 마이페이지에서 기념일 설정 시 <Highlight>기념일 알림</Highlight>을 문자/이메일로 받을 수 있습니다.
        </Text>
        <LeftBtn onClick={leftClick} >⟨</LeftBtn>
      </MyPageModal>
        }
    </MyModal>
  );
}

export default Guide;