import styled from "styled-components";

import DateSetting from "./DateSetting";
import CategoryIcon from "../icons/CategoryIcon";

import { useState, useEffect } from "react";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`;

const Container = styled.div`
  width: 400px;

  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  background-color: #fff3f3;
  border-radius: 15px;

  @media (max-width: 575px) {
    width: 300px;
    gap: 20px;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 15px;
  border-bottom: 1px solid #998e8e;
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
`;

function Marketing({ closeMarketing }) {
  console.log("마케팅 동의 안함");

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>기념일 추가하기</Title>
          <CloseButton onClick={closeMarketing}>❌</CloseButton>
        </Header>
      </Container>
    </Wrapper>
  );
}

export default Marketing;
