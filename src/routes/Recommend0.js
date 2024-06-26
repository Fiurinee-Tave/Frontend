import Header from "../components/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  background-image:url("/img/Recommend3.png");
  height:100vh;
  background-size:cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled.div`
padding: 20vh 10vw;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 50px;
`;

const Bigtitle = styled.div`
  font-size:45px;
  font-weight:590;
  @media (max-width: 575px) {
    font-size: 20.3px;
  }
`;

const Title = styled.div`
  font-size:30px;
  @media (max-width: 575px) {
    font-size: 13.3px;
  }
`;
//padding:30px;

const Input = styled.textarea`
  type="text";
  height:80px;
  width:63%;
  background-color: rgba(255,255,255,0.8);
  font-size:25px;
  text-align: center;
  border-radius:5px;
  border:none;
  @media (max-width: 575px) {
    height:55px;
    font-size:15px;
  }
`;
//margin:40px;

const RecommendBtn = styled.button`
  background-color: rgba(255,255,255,0.8);
  font-size: 20px;
  cursor: pointer;
  padding: 18px 33px;
  border-radius:12px;
  border:none;
    font-family: "Gowun Batang", serif;
  font-weight: 400;
  font-style: normal;
  @media (max-width: 575px) {
    height:50px;
    width:70%;
    padding: 15px 5%;
    font-size: 15px;
  }

`;
//



function Recommend0() {
  const navigate = useNavigate();
  const recommend = () => {
    navigate("/reco1");
  };

  return (
    <Wrapper>
      <Header />
      <Line>
        <Bigtitle>전해주고 싶은 멘트를 작성해주세요</Bigtitle>
        <Title>멘트에 어울리는 꽃 조합을 선물해드립니다.</Title>
        <Input maxlength='50'></Input>
        <RecommendBtn onClick={recommend}> 꽃 추천받으러 가기 ➡ </RecommendBtn>
      </Line>
    </Wrapper>
  );
}

export default Recommend0;
