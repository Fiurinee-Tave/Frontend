import styled from "styled-components";
import IconLike from "../icons/IconLike";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  display: flex;
  box-shadow: 2px 2px 2px #c6c6c6;
`;

const FlowerImage = styled.img`
  width: 25%;
  height: 100%;
  border: 1px solid red;
`;

const MiniFlowerImage = styled.img`
  width: 150px;
  height: 100%;
  border: 1px solid green;
`;

const Container = styled.div`
  width: 75%;
  height: calc(100% - 30px);
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  padding: 10px;
  padding-top: 0px;
  width: 100%;
  height: 15%;
  font-size: 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #959090;
`;

const FlowerText = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

const ToText = styled.div`
  font-size: 18px;
  color: #959090;
`;

const LogContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 70%;
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
  const [like, setLike] = useState(false);

  return (
    <Wrapper>
      <FlowerImage />
      <Container>
        <Title>
          <FlowerText>
            <ToText>to.</ToText>
            <div>"flower"</div>
          </FlowerText>
          <div>2024.05.28</div>
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
              <ToText>from.</ToText>
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
