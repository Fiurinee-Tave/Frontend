import styled from "styled-components";
import IconLike from "../icons/IconLike";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  display: flex;
  box-shadow: 2px 2px 2px #c6c6c6;

  //태블릿
  @media (max-width: 1199px) {
  }

  //모바일 가로
  @media (max-width: 767px) {
  }

  //모바일 세로
  @media (max-width: 575px) {
    height: 500px;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }
`;

const FlowerImage = styled.img`
  width: 25%;
  height: 100%;
  border: 1px solid red;

  @media (max-width: 575px) {
    width: 50%;
    height: 100%;
  }
`;

const MiniFlowerImage = styled.img`
  width: 150px;
  height: 100%;
  border: 1px solid green;
  @media (max-width: 575px) {
    width: 400px;
    height: 100%;
    margin-right: 10px;
  }
`;

const Container = styled.div`
  width: 75%;
  height: calc(100% - 30px);
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 575px) {
    width: 50%;
    height: 100%;
    margin: 0;
    padding: 10px 0;
    justify-content: end;
    gap: 50px;
  }
`;

const Title = styled.div`
  padding: 10px;
  padding-top: 0px;
  width: 100%;
  height: 15%;
  font-size: 23px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  border-bottom: 1px solid #959090;

  @media (max-width: 575px) {
    height: 10%;
  }
`;

const FlowerText = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

const Gray18Text = styled.div`
  font-size: 18px;
  color: #959090;
`;

const LogContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 70%;

  @media (max-width: 575px) {
    height: 50%;
  }
`;

const GrayText = styled.div`
  color: #a49e9e;
`;

const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 450px;
  height: 100%;
  margin-left: 15px;
`;

const UserMessage = styled.div`
  text-align: end;
`;

const RecoMessage = styled.div`
  text-align: end;
`;

const LikeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 10px;
  align-items: flex-end;
`;

const LikeBtn = styled.button`
  width: 60px;
  height: 60px;
  padding: 5px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid #fdb9b9;
  box-shadow: 2px 2px 2px #c6c6c6;
  cursor: pointer;
`;

function RecommendLogItem() {
  const isMobile = useMediaQuery({ query: "(max-width: 575px)" });

  const [like, setLike] = useState(false);

  return isMobile ? (
    <Wrapper>
      <Title>
        <FlowerText>
          <Gray18Text>to.</Gray18Text>
          <div>"flower"</div>
        </FlowerText>
        <Gray18Text>2024.05.28</Gray18Text>
      </Title>
      <LogContainer>
        <FlowerImage />
        <Container>
          <UserMessage>
            <GrayText>"100일 축하해 ㅇㅇ아"</GrayText>
            <GrayText>writer.user</GrayText>
          </UserMessage>
          <RecoMessage>
            <div>"내 마음 어쩌구 축하해"</div>
            <div>writer.fiurinee</div>
          </RecoMessage>
        </Container>
      </LogContainer>
      <GrayText>"flower"와 어울리는 꽃</GrayText>
      <LogContainer>
        <MiniFlowerImage />
        <MiniFlowerImage />

        <LikeContainer>
          <Gray18Text>from.</Gray18Text>
          <LikeBtn onClick={() => setLike(!like)}>
            <IconLike like={like === true ? true : false} />
          </LikeBtn>
        </LikeContainer>
      </LogContainer>
    </Wrapper>
  ) : (
    <Wrapper>
      <FlowerImage />
      <Container>
        <Title>
          <FlowerText>
            <Gray18Text>to.</Gray18Text>
            <div>"flower"</div>
          </FlowerText>
          <Gray18Text>2024.05.28</Gray18Text>
        </Title>
        <GrayText>"flower"와 어울리는 꽃</GrayText>
        <LogContainer>
          <MiniFlowerImage />
          <MiniFlowerImage />
          <RecommendContainer>
            <UserMessage>
              <GrayText>"100일 축하해 ㅇㅇ아"</GrayText>
              <GrayText>writer.user</GrayText>
            </UserMessage>
            <RecoMessage>
              <div>"내 마음 어쩌구 축하해"</div>
              <div>writer.fiurinee</div>
            </RecoMessage>
            <LikeContainer>
              <Gray18Text>from.</Gray18Text>
              <LikeBtn onClick={() => setLike(!like)}>
                <IconLike like={like === true ? true : false} />
              </LikeBtn>
            </LikeContainer>
          </RecommendContainer>
        </LogContainer>
      </Container>
    </Wrapper>
  );
}

export default RecommendLogItem;
