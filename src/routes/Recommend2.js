import Header from "../components/Header";
import styled from "styled-components";
import { useNavigate,useLocation } from "react-router-dom";
import FlowerItem from "../components/FlowerItem";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled.div`
  width: 100%;
  background-image:url("/img/Recommend3.png");
  min-height: 100vh;
  background-size:cover;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 575px) {
    height:100%;
  }
`;

const Line = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:2vw;
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
  @media (max-width: 575px) {
    width:70vw;
  }
`;
//  margin:0px 0px 17px 0vw;

const Width = styled.div`
  display: flex;
  align-items: center;
  gap:3vw;
  padding:0 12vw;
  @media (max-width: 575px) {
    gap:6vw;
  }
`;

const MiniWidth = styled.div`
display: flex;
align-items: center;
gap:4vw;
@media (max-width: 575px) {
  gap:6vw;
}
`;

const FlowerImage = styled.img`
  object-fit: cover;
  position: relative;
  width: 75%;
  aspect-ratio: 1; 
  border-radius: 6%;
  @media (max-width: 575px) {
    width: 22vh;
    height: 22vh;
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
  width:90%;
  word-wrap: break-word;
  color: #571F1F;
  line-height:1.6;
  white-space: pre-wrap;
  text-align: ${props => props.center ? 'center' : 'left'};
  @media (max-width: 575px) {
    font-size: 15px;
  }
`;


const FlowerTitle = styled.div`
  font-size:25px;
  text-align:center;
    @media (max-width: 575px) {
    font-size: 17px;
  }
`;

const JoinText = styled.div`
  font-size:25px;
  @media (max-width: 575px) {
    font-size: 2vh;
  }
`;

const Image = styled.img`
    height:16vh;
    width:11vw;
    border: 1px solid gray;
    @media (max-width: 575px) {
      height:11vh;
      width:105px;
  }
`;
//height:120px;
//width:150px;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;


const RightSection = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:3vh;
  @media (max-width: 575px) {
    width: 100%;
  }
`;
//gap: 15px;

function Recommend2({login}) {
  const isDesktopOrMobile = useMediaQuery({query: '(max-width:575px)'});
  const navigate = useNavigate();
  const location = useLocation();
  
  const join = () => {
    if(login){
      navigate("/mypage");
    }else{
      navigate("/login");
    }
  
  };

  return (<Wrapper>
    <Header login={login}/>
    {isDesktopOrMobile !== true?
    <Line>
      <Bigtitle>{location.state?.flower.flower_language}  "{location.state?.flower.recommendFlower}"</Bigtitle>
      <Width>
        <LeftSection>
          <FlowerImage src={location.state?.flower.image} />
        </LeftSection>
        <RightSection>
          <Line2>
            <Text>이름 : {location.state?.flower.recommendFlower}</Text>
            <Text>개화시기 : {location.state?.flower.period} 월</Text>
            <Text>꽃말 : {location.state?.flower.flower_language}</Text>
            <Text>추천 멘트 : {location.state?.recoflower.recommendMent}</Text>
          </Line2>
          <FlowerTitle>"{location.state?.flower.recommendFlower}"와 어울리는 조합</FlowerTitle>
          <MiniWidth>
            <Height>
              <Image src={location.state?.recoflower.harmonyFlowers[0].image}/>
              <Text center>{location.state?.recoflower.harmonyFlowers[0].harmonyFlower}</Text>
            </Height>
            <Height>
              <Image src={location.state?.recoflower.harmonyFlowers[1].image} />
              <Text center>{location.state?.recoflower.harmonyFlowers[1].harmonyFlower}</Text>
            </Height>
          </MiniWidth>
        </RightSection>
      </Width>
      {login?
      <>
      <JoinBtn onClick={join}>마이페이지로 이동</JoinBtn>
      <JoinText>* 마이페이지로 이동 후, 추천 받은 꽃을 저장할 수 있습니다 :) </JoinText>
      </>
      :
      <>
      <JoinBtn onClick={join}>회원가입 하러 가기</JoinBtn>
      <JoinText>* 회원가입을 하면 앞으로의 꽃을 저장하고, 기념일을 기억할 수 있습니다 :) </JoinText>
      </>
      }
    </Line>
    :
    <Height>
      <Bigtitle>{location.state?.flower.flower_language}  "{location.state?.flower.recommendFlower}"</Bigtitle>
      <FlowerImage src={location.state?.flower.image} />
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
          <Text center>{location.state?.recoflower.harmonyFlowers[0].harmonyFlower}</Text>
          </Height>
          <Height>
          <Image src={location.state?.recoflower.harmonyFlowers[1].image} />
          <Text center>{location.state?.recoflower.harmonyFlowers[1].harmonyFlower}</Text>
          </Height>
      </Width>
      {login?
      <>
      <JoinBtn onClick={join}>마이페이지로 이동</JoinBtn>
      <JoinText>* 마이페이지로 이동 후,<br/> 추천 받은 꽃을 저장할 수 있습니다 :) </JoinText>
      </>
      :
      <>
      <JoinBtn onClick={join}>회원가입 하러 가기</JoinBtn>
      <JoinText>* 회원가입을 하면 앞으로의 꽃을 저장하고,<br/> 기념일을 기억할 수 있습니다 :) </JoinText>
      </>
      }
    </Height>

}
  </Wrapper>);
}

export default Recommend2;
