import Header from "../components/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import Loading from "../loading/Loading";
import api from "../axios";

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
padding: 17vh 10vw;
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
  text-align: center;
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

const Line2 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 25px;
`;

const Text = styled.div`
  font-size:22px;
  font-weight:590;
 
  @media (max-width: 575px) {
    font-size: 12px;
  }
`;
// color: rgb(88,88,88);

const Input = styled.textarea`
  type="text";
  height:80px;
  width:63%;
  background-color: rgba(255,255,255,0.05);
  font-size:25px;
  text-align: center;
  border-radius:5px;
  outline: none;
  border:none;
  border-bottom:2px solid;
  text-align: center;
   font-family: "Gowun Batang", serif;
  font-weight: 400;
  font-style: normal;
  &::placeholder {
    color: rgb(88,88,88);
  }
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


function Recommend0({ login }) {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("access_token");
  const memberId = localStorage.getItem("member_id");

  console.log(memberId);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

    
  const posetData = async () => {
    setLoading(true);
    try{
      if(login === false){
        const response = await axios.post('https://emotionfeedback.site/model/ment',
          {
            ment: inputValue
          },
          {
           'Content-Type' : 'application/json'
           
          }
        );
        setLoading(false);

        navigate("/reco1", {state : {
          flower: response.data,
          inputment : inputValue
        }});

      }else{

        const response = await api.post(`https://emotionfeedback.site/model/${memberId}/ment`,
          {
            ment: inputValue
          },
          {
            headers : {
           'Content-Type' : 'application/json',
           Authorization: `Bearer ${accessToken}`
            }
          }
        );
        setLoading(false);


        navigate("/reco1/auth", {state : {
          flower: response.data,
          inputment : inputValue
        }});
      }
    
    }
    catch (error) {

      console.error("Failed to fetch user data:", error);
    }
  };
    
  //        <Text>ex) 친구가 어제 드디어 취업을 해서 꽃을 선물하려해</Text>

  //defaultValue={`\nex) 친구가 어제 드디어 취업을 해서\n꽃을 선물하려해`} 

  //
  return (
    loading ? 
    <Wrapper> <Header login={login} /> <Loading/> </Wrapper>:(
    <Wrapper>
      <Header login={login} />
      <Line>
        <Bigtitle>꽃을 선물하고 싶은 상황을 작성해 주세요</Bigtitle>
        <Line2>
        <Title>상황에 어울리는 꽃 조합을 선물해 드립니다.</Title>
        <Text>ex) 친구가 어제 드디어 취업을 해서 꽃을 선물하려 해</Text>
        </Line2>
        <Input value={inputValue}
          onChange={handleInputChange} maxlength='50'></Input>
        <RecommendBtn onClick={posetData} disabled={inputValue === ''}> 꽃 추천받으러 가기 ➡ </RecommendBtn>
      </Line>
    </Wrapper>
    )
  );
}

export default Recommend0;
