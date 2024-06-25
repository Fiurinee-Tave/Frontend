import Header from "../components/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FlowerItem from "../components/FlowerItem";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled.div`
  width: 100%;
  background-image:url("/img/Recommend3.png");
  height:100vh;
  background-size:cover;
    @media (max-width: 575px) {
    height:100%;
  }

`;

const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:15px;
`;
//padding: 40px 30px 25px 50px;

const Bigtitle = styled.div`
  font-size:40px;
  font-weight:590;
  padding-top:50px;
  @media (max-width: 575px) {
    font-size: 20.5px;
    padding-top:15px;
  }
`;

const JoinBtn = styled.button`
  background-color: rgba(255,255,255,0.8);
  font-size: 20px;
  cursor: pointer;
  padding: 15px 30px;
  margin:3px 10px 8px 10px;
  border-radius:12px;
  border:none;
    font-family: "Gowun Batang", serif;
  font-weight: 400;
  font-style: normal;
  @media (max-width: 575px) {
    font-size: 14px;
    padding: 12px 25px;
  }
`;

const Line2 = styled.div`
  display: flex;
  flex-direction: column;
  margin:0px 0px 17px 25px;
`;
//margin:0px 0px 17px 25px;

const Width = styled.div`
  display: flex;
  align-items: center;
  gap:20px;
  @media (max-width: 575px) {
    gap:20px;
  }
`;
//padding:10px 10px 5px 10px;

const Height = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 575px) {
    gap:10px;
    padding:10px 0px;
  }
`;

const Text = styled.div`
  font-size: 22px;
  color: #571F1F;
  line-height:1.5;
  @media (max-width: 575px) {
    font-size: 15px;
  }
`;

const FlowerTitle = styled.div`
  font-size:25px;
    @media (max-width: 575px) {
    font-size: 17px;
    font-weight:590;
  }
`;

const JoinText = styled.div`
  font-size:26px;
  @media (max-width: 575px) {
    font-size: 12px;
  }
`;

const Image = styled.img`
    height:120px;
    width:150px;
    border: 1px solid gray;
    @media (max-width: 575px) {
      height:80px;
      width:105px;
      
  }
`;
//margin:7px 20px;

function Recommend2() {
  const isDesktopOrMobile = useMediaQuery({query: '(max-width:575px)'});
  const navigate = useNavigate();
  
  const join = () => {
      navigate("/Login");
  
  };

  return (<Wrapper>
    <Header/>
    {isDesktopOrMobile !== true?
    <Line>
      <Bigtitle>영원한 사랑의 "해바라기"</Bigtitle>
      <Width>
      <FlowerItem height="340px;" width="450px"></FlowerItem>
      <Line>
        <Line2>
        <Text>이름 : 해바라기</Text>
        <Text>개화시기 : 7~9월</Text>
        <Text>꽃말 : 영원한 사랑</Text>
        <Text>추천 멘트 : 당신을 영원히 사랑합니다.</Text>
        </Line2>
        <FlowerTitle>"해바라기"와 어울리는 조합</FlowerTitle>
        <Width>
          <Height>
            <Image/>
            <Text>거베라</Text>
          </Height>
          <Height>
          <Image/>
          <Text>데이지</Text>
          </Height>
        </Width>
      </Line>
      </Width>
      <JoinBtn onClick={join}>회원가입 하러 가기</JoinBtn>
      <JoinText>* 회원가입을 하면 앞으로의 꽃을 저장하고, 기념일을 기억할 수 있습니다 :) </JoinText>
    </Line>
    :
    <Height>
      <Bigtitle>영원한 사랑의 "해바라기"</Bigtitle>
      <FlowerItem height="150px;" width="150px"></FlowerItem>
      <Line2>
        <Text>이름 : 해바라기</Text>
        <Text>개화시기 : 7~9월</Text>
        <Text>꽃말 : 영원한 사랑</Text>
        <Text>추천 멘트 : 당신을 영원히 사랑합니다.</Text>
      </Line2>
      <FlowerTitle>"해바라기"와 어울리는 조합</FlowerTitle>
      <Width>
          <Height>
            <Image/>
            <Text>거베라</Text>
          </Height>
          <Height>
          <Image/>
          <Text>데이지</Text>
          </Height>
        </Width>
        <JoinBtn onClick={join}>회원가입 하러 가기</JoinBtn>
      <JoinText>* 회원가입을 하면 앞으로의 꽃을 저장하고,<br/> 기념일을 기억할 수 있습니다 :) </JoinText>
    </Height>

}
  </Wrapper>);
}

export default Recommend2;
