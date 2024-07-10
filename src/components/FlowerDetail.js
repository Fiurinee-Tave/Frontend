import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  background-color: rgba(128, 128, 128, 0.9);
  height: ${(props) => props.height || "100%"};
  width: ${(props) => props.width || "75%"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  &:hover {
    opacity: 1;
    transform: translateY(0rem);
  }
`;

const Text = styled.div`
  font-size: ${(props) => props.fontsize || "20px"};
  line-height: 2;
  color: #ffffff;
  font-weight: 400;
  max-width: 70%;
  @media (max-width: 575px) {
    font-size: 10px;
  }
`;

function FlowerDetail({
  height,
  width,
  fontsize,
  onClick,
  name,
  period,
  flower_lang,
}) {
  return (
    <Wrapper height={height} width={width} onClick={onClick}>
      <Text fontsize={fontsize}>
        이름 : {name}
        <br />
        개화시기 : {period}월
        <br />
        꽃말 : {flower_lang}
      </Text>
    </Wrapper>
  );
}

export default FlowerDetail;
