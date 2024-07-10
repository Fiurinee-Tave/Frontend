import Header from "../components/Header";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import RecoFlowerDetail from "../components/RecoFlowerDetail";
import FlowerItem from "../components/FlowerItem";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import axios from 'axios';
import Loading from "../loading/Loading";
import refreshAccessToken from "../axios";

const Wrapper = styled.div`
  width: 100%;
  background-image:url("/img/Recommend3.png");
  height:100vh;
  background-size:cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;  

const Line = styled.div`
  padding: 60px 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 575px) {
    gap: 23px;
    padding: ${props => props.padding || '60px 50px'};
  }
`;

const Bigtitle = styled.div`
  font-size:40px;
  font-weight:590;
  @media (max-width: 575px) {
    font-size: 20.3px;
  }
`;

const Title = styled.div`
  font-size:20px;
  line-height:1.5;
  text-align: center;
  @media (max-width: 575px) {
    font-size: 11px;
  }
`;

const Highlight = styled.span`
  color:#ff6347;
`;

const Line2 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 62vw;
  @media (max-width: 575px) {
    gap: 5vw;
    flex:1;

  }
`;

const MediaLine1 = styled.div`
  display: flex;
  align-items: center;
  flex:1;
  justify-content: center;
  gap:6vw;
  width: 50%;
`;

const ImageBox = styled.div`
  display: flex;
  flex:1;
  justify-content: center;
  position: relative;
  width: 100%;
  padding-bottom:100%;
  position: relative;
  @media (max-width: 575px) {
    height:25vw;
    aspect-ratio: 1;
  }

`;
//  

const RecommendBtn = styled.button`
  background-color: rgba(255,255,255,0.8);
  font-size: 20px;
  cursor: pointer;
  padding: 15px 25px;
  border-radius:12px;
  border:none;
  font-family: "Gowun Batang", serif;
  font-weight: 400;
  font-style: normal;
  @media (max-width: 575px) {
     font-size: 13px;
     padding: 12px 25px;
  }
`;

const ImageLine = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  align-items: center;
  gap:1vh;
  font-size: 25px;
`;
//padding-bottom:100%;


function Recommend1({login}) {
  const isDesktopOrMobile = useMediaQuery({query: '(max-width:575px)'});
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("access_token");
  const memberId = localStorage.getItem("member_id");

  const location = useLocation();
  console.log("추천 1로 넘어왔다"); 
  console.log(location);

  
  const images = [
    location.state?.flower[0].image,
    location.state?.flower[1].image,
    location.state?.flower[2].image, 
  ];

  const handleImageClick = (index) => {
    if (selectedImage !== index) { // 현재 선택된 이미지와 클릭된 이미지가 다른 경우에만 업데이트
      setSelectedImage(index);
    }
  };

  const recommend = () => {
    if(selectedImage !== null){
      navigate("/reco2");
    }else{
      {/* 토글창 같은 거 띄워서 선택하라고 알리기? */}
    }
  };


  const posetData = async () => {
    setLoading(true);
    console.log(location.state?.flower[selectedImage].id);
    try{
      if(login === false){
        const response = await axios.post('https://emotionfeedback.site/model/'+location.state?.flower[selectedImage].id+'/non' ,
        {
          ment: location.state?.inputment
        },
        {
           'Content-Type' : 'application/json'
        }
        );
      setLoading(false);
  
      navigate("/reco2",
        {
          state : {
            flower:location.state?.flower[selectedImage],
            recoflower:response.data
          }
        });
  
  }else{
    const response = await axios.post(`https://emotionfeedback.site/model/${memberId}/`+location.state?.flower[selectedImage].id ,
      {
        ment: location.state?.inputment
      },
      {
        headers : {
          'Content-Type' : 'application/json',
          Authorization: `Bearer ${accessToken}`
           }
      }
      );
      setLoading(false);
      navigate("/reco2/auth",
        {
          state : {
            flower:location.state?.flower[selectedImage],
            recoflower:response.data
          }
        });
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
    <Wrapper> <Header login={login} disableClick={true}/> <Loading/> </Wrapper>:
    (
    <Wrapper>
    <Header login={login} disableClick={true}/>
    <Line>
      <Bigtitle>추천하는 꽃 TOP 3</Bigtitle>
      <Title><Highlight>마음에 드는 꽃을 선택</Highlight>하고 하단의 버튼을 누르면<br/>
      해당 꽃과 <Highlight>어울리는 꽃다발 조합</Highlight>을 추천받을 수 있습니다.</Title>
      {isDesktopOrMobile !== true?
      <Line2>
        {images.map((src, index) => (
          <ImageLine>
        <ImageBox key={index}>
        <FlowerItem
        key={index}
        src={src}
        selected={selectedImage === index}
        onClick={() => handleImageClick(index)}
        margin="0 5px"
        height="100%"
        width="100%"
        />     
        <RecoFlowerDetail
        selected={selectedImage === index}
        onClick={() => handleImageClick(index)}
        name={location.state?.flower[index].recommendFlower}
        period={location.state?.flower[index].period}
        flower_lang={location.state?.flower[index].flower_language}
        />
        
        </ImageBox>  
        {location.state?.flower[index].recommendFlower}
        </ImageLine>
      ))}
      
      </Line2> 
      :
      <Line padding={'5px 5px'}>
        <MediaLine1>
        <ImageBox key={1}>
      <FlowerItem 
      key={1}
      src={images[1]}
      selected={selectedImage === 1}
      onClick={() => handleImageClick(1)}
      height="100%" width="100%"
      media={window.innerWidth <= 575}
      />
      <RecoFlowerDetail
        selected={selectedImage === 1}
        onClick={() => handleImageClick(1)}
        name={location.state?.flower[1].recommendFlower}
        period={location.state?.flower[1].period}
        flower_lang={location.state?.flower[1].flower_language}
        />
      </ImageBox>
      </MediaLine1>
      <MediaLine1>
      {images.map((src, index) => (
        index !== 1 ?
        <ImageBox key={index}>
        <FlowerItem 
        key={index}
        src={src}
        selected={selectedImage === index}
        onClick={() => handleImageClick(index)}
        height="100%" width="100%"
        media={window.innerWidth <= 575}
        />
        <RecoFlowerDetail
        selected={selectedImage === index}
        onClick={() => handleImageClick(index)}
        name={location.state?.flower[index].recommendFlower}
        period={location.state?.flower[index].period}
        flower_lang={location.state?.flower[index].flower_language}
        />
        </ImageBox> 
        : <></>
      ))}
      </MediaLine1>
      </Line>
      }
      <RecommendBtn onClick={posetData} disabled={selectedImage === null}> 어울리는 꽃 조합 찾기 ➡ </RecommendBtn>
    </Line>
  </Wrapper>
  ));
}


export default Recommend1;
