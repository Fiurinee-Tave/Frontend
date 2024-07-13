import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Timer from "../components/Timer";
//import axios from "axios";
import api from "../axios";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  //iphone SE => width:375px;
  @media (max-width: 575px) {
  }
`;

const PhoneContainer = styled.div`
  width: 550px;
  height: 400px;
  margin-top: 100px;
  padding-top: 50px;

  background-color: white;
  border: 1px solid #d9d9d9;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 60px;

  @media (max-width: 575px) {
    margin-top: 50px;
    width: 350px;
    height: 350px;
    gap: 30px;
  }
`;

const BoldText = styled.div`
  font-size: 25px;
  font-weight: bold;

  @media (max-width: 575px) {
    font-size: 20px;
  }
`;

const Group = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 575px) {
    width: 320px;
  }
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NormalText = styled.div`
  font-size: 15px;

  @media (max-width: 575px) {
    font-size: 13px;
  }
`;

const InputNumber = styled.input`
  width: 230px;
  height: 40px;
  border: 1px solid gray;
  text-align: center;
  outline: none;

  @media (max-width: 575px) {
    width: 150px;
    font-size: 13px;
  }
`;

const Button = styled.button`
  padding: 0;
  outline: none;
  border: none;
  background-color: #fad5d5;
  color: #ea8989;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #ea8989;
  width: 100px;
  height: 30px;

  cursor: pointer;

  @media (max-width: 575px) {
    width: 80px;
    font-size: 10px;
  }
`;

const Count = styled.div`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: start;
  align-items: center;

  @media (max-width: 575px) {
    width: 80px;
    font-size: 13px;
  }
`;

const GuideText = styled.div`
  font-size: 15px;
  color: red;

  @media (max-width: 575px) {
    font-size: 10px;
  }
`;

function Phone({ login }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [certificateNum, setCertificateNum] = useState();
  const [timer, setTimer] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (login) {
      const queryParams = new URLSearchParams(location.search);
      const accessToken = queryParams.get("access_token");
      const refreshToken = queryParams.get("refresh_token");
      const memberId = queryParams.get("member_id");

      if (accessToken) {
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
        localStorage.setItem("member_id", memberId);

        navigate("/phone");
      } else {
        // if (localStorage.getItem("member_id")) {
        //   navigate("/auth");
        // } else {
        //   navigate("/");
        // }
      }
    }
  }, []);

  const sendNumber = async () => {
    try {
      await api.post(`https://emotionfeedback.site/sms/send`, {
        phoneNumber,
      });
    } catch (error) {
      console.error("Failed to send number:", error);
    }
  };

  const checkNumber = async () => {
    try {
      await api.post(
        `https://emotionfeedback.site/sms/prove/${localStorage.getItem(
          "member_id"
        )}`,
        {
          phoneNumber,
          certificateNum,
        }
      );
      navigate("/auth");
    } catch (error) {
      if (error.response.status === 400) {
        setText("*인증번호가 틀렸습니다. 인증번호를 재입력해주세요.");
      }
      console.error("Failed to check number:", error);
    }
  };

  useEffect(() => {
    if (phoneNumber.length === 10) {
      setPhoneNumber(phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (phoneNumber.length === 13) {
      setPhoneNumber(
        phoneNumber
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [phoneNumber]);

  const handlePress = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhoneNumber(e.target.value);
    }
  };

  const handleCount = () => {
    sendNumber();
    setTimer(true);
  };

  return (
    <Wrapper>
      <PhoneContainer>
        <BoldText>휴대폰 번호인증</BoldText>
        <Group>
          <Section>
            <NormalText>전화번호</NormalText>
            <InputNumber
              type="text"
              onChange={handlePress}
              value={phoneNumber}
              placeholder="휴대폰번호를 입력하세요."
            />
            <Button onClick={handleCount}>인증번호받기</Button>
          </Section>
          <Section>
            <NormalText>인증번호</NormalText>
            <InputNumber
              type="text"
              maxLength="4"
              onChange={(e) =>
                setCertificateNum(e.target.value.replace(/[^0-9]/g, ""))
              }
              value={certificateNum}
            />
            {timer ? (
              <Timer setText={setText} setTimer={setTimer} />
            ) : (
              <Count></Count>
            )}
          </Section>
          <Button onClick={checkNumber}>인증완료</Button>
          <GuideText>{text}</GuideText>
        </Group>
      </PhoneContainer>
    </Wrapper>
  );
}

export default Phone;
