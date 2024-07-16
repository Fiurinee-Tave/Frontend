import styled from "styled-components";

const Wrapper = styled.div`
  width: 30%;
  //  height: 450px;
  background-color: white;
  border-radius: 0px 20px 0px 20px;
  box-shadow: 1px 1px 1px #858585;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 575px) {
  width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;

  object-fit: cover;
`;

const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
`;

const NameSection = styled.div`
  width: 90px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
  border-right: 2px dashed gray;
`;

const NameText = styled.div`
  width: 70px;
  height: 30px;

  background-color: #fff3f3;
  border-radius: 50px;
  text-align: center;
  padding: 5px 0;
`;

const InfoSection = styled.div`
  width: 200px;
  padding-left: 10px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 10px;
  color: gray;
`;

const InfoText = styled.div`
  width: 100%;
  height: 30px;

  padding: 5px 0;

  //overflow-y: auto;
`;

const InfoLongText = styled.div`
  width: 100%;
  padding: 5px 0;
  height: 130px;

  overflow: auto;

  //  overflow-y: auto;
`;

function FlowerItem({ info }) {
  return (
    <Wrapper>
      <Image src={info.image} />
      <Container>
        <NameSection>
          <NameText>이름</NameText>
          <NameText>개화시기</NameText>
          <NameText>꽃말</NameText>
          <NameText>설명</NameText>
        </NameSection>
        <InfoSection>
          <InfoText>{info.flower}</InfoText>
          <InfoText>{info.period}월</InfoText>
          <InfoText>{info.flowerLanguage}</InfoText>
          <InfoLongText>{info.explain}</InfoLongText>
        </InfoSection>
      </Container>
    </Wrapper>
  );
}

export default FlowerItem;
