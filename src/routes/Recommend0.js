import Header from "../components/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import Loading from "../loading/Loading";
import refreshAccessToken from "../axios";

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


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

    
  const posetData = async () => {
    setLoading(true);
    try{
      if(login === false){
        const response = await axios.post('http://3.36.169.209:8080/model/ment',
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

        const response = await axios.post(`http://3.36.169.209:8080/model/${memberId}/ment`,
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
      if (error.response.status === 401) {
        refreshAccessToken(memberId);
      }
      console.error("데이터 보내기 실패", error);
    }
  };

  return (
    loading ? 
    <Wrapper> <Header login={login} /> <Loading/> </Wrapper>:(
    <Wrapper>
      <Header login={login} />
      <Line>
        <Bigtitle>전해주고 싶은 멘트를 작성해주세요</Bigtitle>
        <Title>멘트에 어울리는 꽃 조합을 선물해드립니다.</Title>
        <Input value={inputValue}
          onChange={handleInputChange} maxlength='50'></Input>
        <RecommendBtn onClick={posetData} disabled={inputValue === ''}> 꽃 추천받으러 가기 ➡ </RecommendBtn>
      </Line>
    </Wrapper>
    )
  );
}

export default Recommend0;
