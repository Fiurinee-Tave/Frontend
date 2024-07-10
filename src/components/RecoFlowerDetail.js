import styled from 'styled-components';

const Wrapper = styled.div`
    position:absolute;
    background-color:rgba(128,128,128,0.9);
    height:${props => props.height || '100%'};
    width: ${props => props.width || '100%'}; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    border-radius: 5%;
    &:hover {
    opacity: 1;
    transform: translateY(0rem);
  }
`;

const Text = styled.div`
    font-size:${props => props.fontsize || '20px'};
    line-height:2;
    color: #FFFFFF;
    font-weight: 400; 
    max-width:70%;
    @media (max-width: 575px) {
      font-size: 10px;
  }
`;

function RecoFlowerDetail({height, width, fontsize, onClick, name, period, flower_lang }){

    return(<Wrapper height={height} width={width} onClick={onClick}>
        <Text fontsize={fontsize}>
            개화시기 : {period}월
            <br/>꽃말 : {flower_lang}</Text>
    </Wrapper>);

}

export default RecoFlowerDetail;