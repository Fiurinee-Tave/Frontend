import styled from "styled-components";

import IconLike from "../icons/IconLike";

import { useMediaQuery } from "react-responsive";

import { useEffect } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 2px 2px 2px #858585;

  @media (max-width: 575px) {
    height: 430px;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }
`;

const ImgContainer = styled.div`
  width: 250px;
  height: 100%;

  @media (max-width: 575px) {
    width: 180px;
    height: 200px;
  }
`;

const SmallImgContainer = styled.div`
  width: 180px;
  height: 100%;

  @media (max-width: 575px) {
    width: 100px;
    height: 120px;
  }
`;

const RecoContainer = styled.div`
  width: calc(100% - 250px);
  height: 100%;

  padding: 15px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 575px) {
    width: 100%;
    height: calc(100% - 40px - 200px - 30px);
    padding: 0;
    gap: 10px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const RecoTitle = styled.div`
  width: 100%;
  height: 40px;
  padding: 5px;
  border-bottom: 1px solid #989898;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 575px) {
  }
`;

const MiddleText = styled.div`
  font-size: 20px;

  @media (max-width: 575px) {
    font-size: 18px;
  }
`;

const SmallText = styled.div`
  font-size: 15px;
  @media (max-width: 575px) {
    font-size: 13px;
  }
`;

const GrayText = styled.div`
  font-size: 20px;
  color: #959090;

  @media (max-width: 575px) {
    font-size: 15px;
  }
`;

const ToFrom = styled.div`
  font-size: 40px;
  font-family: "Italianno";
  color: #959090;
  font-weight: 500;
  font-style: normal;

  @media (max-width: 575px) {
    font-size: 20px;
  }
`;

const RowText = styled.div`
  height: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  @media (max-width: 575px) {
    justify-content: space-between;
    align-items: end;
  }
`;

const DetailContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 575px) {
    height: 300px;
  }
`;

const MobileImgContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const MentLikeContainer = styled.div`
  width: calc(100% - 360px - 10px);
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 575px) {
    width: calc(100% - 10px - 180px);
    justify-content: space-around;
  }
`;

const MentContainer = styled.div`
  width: 100%;
  height: 33%;
  text-align: center;
`;

const WriterContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const LikeContainer = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  justify-content: end;
  align-items: center;

  gap: 10px;

  @media (max-width: 575px) {
    width: 80px;
  }
`;

function RecommendLogItem({ info, settingTruePrefer, settingFalsePrefer }) {
  const isMobile = useMediaQuery({ query: "(max-width: 575px)" });

  useEffect(() => {
    console.log(info);
  }, []);

  const handleLike = () => {
    if (info.prefer === true) {
      settingFalsePrefer(info.order);
      console.log(info.order, "T => F");
    } else {
      settingTruePrefer(info.order);
      console.log(info.order, "F => T");
    }
  };

  return isMobile ? (
    <Wrapper>
      <RecoTitle>
        <RowText>
          <ToFrom>to.</ToFrom>
          <MiddleText>
            {info.recommendFlower}
            {`(${info.flower_language})`}
          </MiddleText>
        </RowText>
        <GrayText>{info.create_at}</GrayText>
      </RecoTitle>
      <DetailContainer>
        <ImgContainer>
          <Img src={info.image} />
        </ImgContainer>
        <MentLikeContainer>
          <MentContainer>
            <SmallText>{info.inputMessage}</SmallText>
            <WriterContainer>
              <GrayText style={{ fontSize: "11px" }}>writer.user</GrayText>
            </WriterContainer>
          </MentContainer>

          <MentContainer>
            <SmallText>{info.recommendMessage}</SmallText>
            <WriterContainer>
              <GrayText style={{ fontSize: "11px" }}>writer.fiurinee</GrayText>
            </WriterContainer>
          </MentContainer>
        </MentLikeContainer>
      </DetailContainer>

      <RecoContainer>
        <GrayText>어울리는 꽃</GrayText>
        <RowText>
          <MobileImgContainer>
            <SmallImgContainer>
              <Img src={info.other[0].image} />
            </SmallImgContainer>
            <SmallImgContainer>
              <Img src={info.other[1].image} />
            </SmallImgContainer>
          </MobileImgContainer>
          <LikeContainer>
            <ToFrom>from.</ToFrom>
            <IconLike prefer={info.prefer} />
          </LikeContainer>
        </RowText>
      </RecoContainer>
    </Wrapper>
  ) : (
    <Wrapper>
      <ImgContainer>
        <Img src={info.image} />
      </ImgContainer>
      <RecoContainer>
        <RecoTitle>
          <RowText>
            <ToFrom>to.</ToFrom>
            <MiddleText>
              {info.recommendFlower}
              {`(${info.flower_language})`}
            </MiddleText>
          </RowText>

          <GrayText>{info.create_at}</GrayText>
        </RecoTitle>
        <GrayText>어울리는 꽃</GrayText>
        <DetailContainer>
          <SmallImgContainer>
            <Img src={info.other[0].image} />
          </SmallImgContainer>
          <SmallImgContainer>
            <Img src={info.other[1].image} />
          </SmallImgContainer>
          <MentLikeContainer>
            <MentContainer>
              <SmallText>{info.inputMessage}</SmallText>
              <WriterContainer>
                <GrayText style={{ fontSize: "15px" }}>writer.user</GrayText>
              </WriterContainer>
            </MentContainer>

            <MentContainer>
              <SmallText>{info.recommendMessage}</SmallText>
              <WriterContainer>
                <GrayText style={{ fontSize: "15px" }}>
                  writer.fiurinee
                </GrayText>
              </WriterContainer>
            </MentContainer>

            <LikeContainer>
              <ToFrom>from.</ToFrom>
              <IconLike prefer={info.prefer} onClick={handleLike} />
            </LikeContainer>
          </MentLikeContainer>
        </DetailContainer>
      </RecoContainer>
    </Wrapper>
  );
}

export default RecommendLogItem;
