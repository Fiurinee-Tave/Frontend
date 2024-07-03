import Header from "../components/Header";
import styled from "styled-components";
import { useNavigate,useLocation } from "react-router-dom";
import FlowerItem from "../components/FlowerItem";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled.div`
  width: 100%;
  background-image:url("/img/Recommend3.png");
  height:100vh;
  background-size:cover;
`;

const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:15px;
`;

const Bigtitle = styled.div`
  font-size:40px;
  font-weight:590vw;
  padding-top:4vh;
  @media (max-width: 575px) {
    font-size: 20.5px;
    padding-top:1.5vh;
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
    padding: 1.2vh 5vw;
    margin:-7px 10px 5px 10px;
  }
`;

const Line2 = styled.div`
  display: flex;
  flex-direction: column;
  width:520px;
  margin:0px 0px 17px 5vw;
  @media (max-width: 575px) {
    width:70vw;
  }
`;

const Width = styled.div`
  display: flex;
  align-items: center;
  gap:2vw;
  @media (max-width: 575px) {
    gap:6vw;
  }
`;

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
  word-wrap: break-word;
  color: #571F1F;
  line-height:1.5;
  @media (max-width: 575px) {
    font-size: 15px;
  }
`;

const Text2 = styled.div`
  font-size: 22px;
  color: #571F1F;
  line-height:1.5;
  @media (max-width: 575px) {
    font-size: 15px;
  }
`;

const FlowerTitle = styled.div`
  font-size:25px;
  width:25vw;
  text-align:center;
    @media (max-width: 575px) {
    font-size: 17px;
    width:90vw;
  }
`;

const JoinText = styled.div`
  font-size:26px;
  @media (max-width: 575px) {
    font-size: 2vh;
  }
`;

const Image = styled.img`
    height:120px;
    width:150px;
    border: 1px solid gray;
    @media (max-width: 575px) {
      height:11vh;
      width:105px;
      
  }
`;

function Recommend2() {
  const isDesktopOrMobile = useMediaQuery({query: '(max-width:575px)'});
  const navigate = useNavigate();

  const location = useLocation();
  
  const join = () => {
      navigate("/Login");
  
  };

  return (<Wrapper>
    <Header/>
    {isDesktopOrMobile !== true?
    <Line>
      <Bigtitle>{location.state?.flower.flower_language}  "{location.state?.flower.recommendFlower}"</Bigtitle>
      <Width>
      <FlowerItem height="48vh" width="28vw" src={location.state?.flower.image}></FlowerItem>
      <Line>
        <Line2>
        <Text>이름 : {location.state?.flower.recommendFlower}</Text>
        <Text>개화시기 : {location.state?.flower.period}</Text>
        <Text>꽃말 : {location.state?.flower.flower_language}</Text>
        <Text>추천 멘트 : {location.state?.recoflower.recommendMent}</Text>
        </Line2>
        <FlowerTitle>"{location.state?.flower.recommendFlower}"와 어울리는 조합</FlowerTitle>
        <Width>
          <Height>
            <Image src={location.state?.recoflower.harmonyFlowers[0].image}/>
            <Text>{location.state?.recoflower.harmonyFlowers[0].harmonyFlower}</Text>
          </Height>
          <Height>
          <Image src={location.state?.recoflower.harmonyFlowers[1].image} />
          <Text>{location.state?.recoflower.harmonyFlowers[1].harmonyFlower}</Text>
          </Height>
        </Width>
      </Line>
      </Width>
      <JoinBtn onClick={join}>회원가입 하러 가기</JoinBtn>
      <JoinText>* 회원가입을 하면 앞으로의 꽃을 저장하고, 기념일을 기억할 수 있습니다 :) </JoinText>
    </Line>
    :
    <Height>
      <Bigtitle>{location.state?.flower.flower_language}  "{location.state?.flower.recommendFlower}"</Bigtitle>
      <FlowerItem height="150px;" width="150px" src={location.state?.flower.image}></FlowerItem>
      <Line2>
      <Text>이름 : {location.state?.flower.recommendFlower}</Text>
        <Text>개화시기 : {location.state?.flower.period}</Text>
        <Text>꽃말 : {location.state?.flower.flower_language}</Text>
        <Text>추천 멘트 : {location.state?.recoflower.recommendMent}</Text>
      </Line2>
      <FlowerTitle>"{location.state?.flower.recommendFlower}"와 어울리는 조합</FlowerTitle>
      <Width>
          <Height>
          <Image src={location.state?.recoflower.harmonyFlowers[0].image}/>
          <Text>{location.state?.recoflower.harmonyFlowers[0].harmonyFlower}</Text>
          </Height>
          <Height>
          <Image src={location.state?.recoflower.harmonyFlowers[1].image} />
          <Text>{location.state?.recoflower.harmonyFlowers[1].harmonyFlower}</Text>
          </Height>
        </Width>
        <JoinBtn onClick={join}>회원가입 하러 가기</JoinBtn>
      <JoinText>* 회원가입을 하면 앞으로의 꽃을 저장하고,<br/> 기념일을 기억할 수 있습니다 :) </JoinText>
    </Height>

}
  </Wrapper>);
}

export default Recommend2;
