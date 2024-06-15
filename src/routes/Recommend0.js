import Header from "../components/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  background-image:url("/img/Recommend3.png");
  height:100vh;
  background-size:cover;
`;

const Line = styled.div`
padding: 100px 50px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const Bigtitle = styled.div`
  font-size:45px;
`;

const Title = styled.div`
  font-size:30px;
   padding:30px;
`;

const Input = styled.input`
  type="text";
  height:80px;
  width:60%;
  background-color:#FFFFFF;
  margin:40px;
`;

const RecommendBtn = styled.button`
  background-color: #fff3f3;
  font-size: 20px;
  cursor: pointer;
  padding: 15px 25px;
  border-style: dashed;
  border-color: gray;
`;




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
      <Input></Input>
      <RecommendBtn onClick={recommend}> 꽃 추천받으러 가기 🔜 </RecommendBtn>
      </Line>
    </Wrapper>
  );
}

export default Recommend0;
