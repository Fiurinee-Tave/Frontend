import styled from 'styled-components';
import { useState } from "react";

const Wrapper = styled.div`
    position:absolute;
    background-color:rgba(128,128,128,0.5);
    height:100%;
    width:80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

//    height:${props => props.height || '100%'};
//width: ${props => props.width || '100%'}; 
const Text = styled.div`
    font-size:${props => props.fontsize || '20px'};
    line-height:2;
`;

function FlowerDetail({height, width,fontsize, onClick, num}){
    const [numb, setNumb] = useState(false);
    const handleClick = () => {
        if (onClick) {
           setNumb(true);
        }else{
            setNumb(false);
        }
    };

    //console.log("FlowerDetail");
    return(<Wrapper height={height} width={width} onClick={handleClick} num={numb}>
        <Text fontsize={fontsize}>찔레꽃
            <br/>8월
            <br/>예쁜 꽃입니다.</Text>
    </Wrapper>);

}

export default FlowerDetail;