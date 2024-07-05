import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  position: relative;

  &::after {
    content: "";
    background-image: url("/img/NullRecoImg.png");
    opacity: 0.4;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 50px;

  position: relative;
  z-index: 100;
  background-color: #fff3f3;
  font-size: 20px;
  cursor: pointer;

  border: none;
  border-radius: 10px;

  background-color: #f8e1e1;

  box-shadow: 1px 1px 1px #ebabab;

  font-family: "Gowun Batang", serif;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 575px) {
  }
`;

function NullReco() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Button onClick={() => navigate("/reco0/auth")}>추천받으러가기</Button>
      {/* <div>
        정말 안타깝게도 Fiurinee 메인 기능인 추천받은 꽃이 없습니다. . .
      </div> */}
    </Wrapper>
  );
}

export default NullReco;
