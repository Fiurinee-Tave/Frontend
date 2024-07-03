import styled from 'styled-components';
import { useState } from "react";

const Wrapper = styled.div`
    position:absolute;
    background-color:rgba(128,128,128,0.6);
    height:${props => props.height || '100%'};
    width: ${props => props.width || '75%'}; 
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
    font-size:${props => props.fontsize || '20px'};
    line-height:2;
    @media (max-width: 575px) {
    font-size: 10px;
  }
`;

function FlowerDetail({height, width, fontsize, onClick, name, period, flower_lang }){

    return(<Wrapper height={height} width={width} onClick={onClick}>
        <Text fontsize={fontsize}>{name}
            <br/>{period}
            <br/>{flower_lang}</Text>
    </Wrapper>);

}

export default FlowerDetail;