import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Count = styled.div`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: start;
  align-items: center;
`;
function Timer({ setText, setTimer }) {
  const initialTime = 300;

  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      } else {
        //타이머 0이야!
        changeTimer();
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  const changeTimer = () => {
    setText("*시간이 초과되었습니다. 인증번호 받기를 눌러 재입력해주세요.");
    setTimer(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return <Count style={{ color: "red" }}>{formatTime(remainingTime)}</Count>;
}

export default Timer;
