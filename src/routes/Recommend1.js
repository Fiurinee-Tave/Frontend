import Header from "../components/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FlowerItem from "../components/FlowerItem";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

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
    @media (max-width: 575px) {
    gap: 5px;
  }
`;

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
 //margin-top:30px;


function Recommend1() {
  const isDesktopOrMobile = useMediaQuery({query: '(max-width:575px)'});
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  //const [hoveredImage, setHoveredImage] = useState(null);
  //const [isMobile, setIsMobile] = useState(window.innerWidth <= 575);
  
  const images = [
    "/img/MainImage2.png",
    "/img/MainImage1.png",
    "/img/MainImage2.png",
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


  //        isHovering={hoveredImage === index}
  //onMouseEnter={() => setHoveredImage(index)}
  //onMouseLeave={() => setHoveredImage(null)}
  return (<Wrapper>
    <Header />
    <Line>
      <Bigtitle>추천하는 꽃 TOP 3</Bigtitle>
      <Title><Highlight>마음에 드는 꽃을 선택</Highlight>하고 하단의 버튼을 누르면<br/>
      해당 꽃과 <Highlight>어울리는 꽃다발 조합</Highlight>을 추천받을 수 있습니다.</Title>
      {isDesktopOrMobile !== true?
      <Line2 >
      {images.map((src, index) => (
        <FlowerItem 
        key={index}
        src={src}
        selected={selectedImage === index}
        onClick={() => handleImageClick(index)}
        margin="0 5px"
        />
      ))}
      </Line2>
      :
      <Line padding={'25px 50px'}>
      <FlowerItem 
      key={1}
      src={images[1]}
      selected={selectedImage === 1}
      onClick={() => handleImageClick(1)}
      height="100px" width="100px"
      />
      <Line2>
      {images.map((src, index) => (
        index !== 1 ?
        <FlowerItem 
        key={index}
        src={src}
        selected={selectedImage === index}
        onClick={() => handleImageClick(index)}
        height="100px" width="100px"
        media={window.innerWidth <= 575}
        />
  
        : <></>
      ))}
      </Line2>
      </Line>
      }
      <RecommendBtn onClick={recommend} disabled={selectedImage === null}> 어울리는 꽃 조합 찾기 ➡ </RecommendBtn>
    </Line>
  </Wrapper>);
}

export default Recommend1;
