import styled from "styled-components";

import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 40px - 15px);
  display: flex;
  gap: 10px;
  /* 전체 - UserInfo 높이 - gap */

  @media (max-width: 575px) {
    height: calc(100% - 150px - 80px - 15px);
  }
`;

const ImgContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  border: 2px dashed #f98181;
`;

const ColorContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  border: 2px dashed #8ea6e3;
`;

const Area = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 575px) {
    width: 60px;
    height: 60px;
  }
`;

const Color = styled.button`
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;

  @media (max-width: 575px) {
    width: 60px;
    height: 60px;
  }
`;

const ImgList = [
  "/img/profileImg/f1.png",
  "/img/profileImg/f2.png",
  "/img/profileImg/f3.png",
  "/img/profileImg/f4.png",
];

const ColorList = ["#FFF8EB", "#FFBDBD", "#CEF4B7", "#CAD3F3"];

function ImgChange({ profileImg, setProfileImg }) {
  const handleImgChange = (e) => {
    setProfileImg({ ...profileImg, img: parseInt(e.target.id) + 1 });
  };

  const handleColorChange = (e) => {
    setProfileImg({ ...profileImg, color: parseInt(e.target.id) + 1 });
  };

  return (
    <Wrapper>
      <ImgContainer>
        {ImgList.map((v, i) => (
          <Area key={i}>
            <Img id={i} src={v} onClick={handleImgChange} />
          </Area>
        ))}
      </ImgContainer>
      <ColorContainer>
        {ColorList.map((v, i) => (
          <Area key={i}>
            <Color
              id={i}
              style={{ backgroundColor: v }}
              onClick={handleColorChange}
            />
          </Area>
        ))}
      </ColorContainer>
    </Wrapper>
  );
}

export default ImgChange;
