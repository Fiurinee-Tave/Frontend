import styled from "styled-components";

const Wrapper = styled.div`
    background-color:#FFFFFF;
    height:${props => props.height || '39vh'};
    width: ${props => props.width || '280px'}; 
    padding: ${props => props.padding || '0px'}; 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${props => props.margin || '0 20px'};
    border:${(props) => (props.selected ? '5px solid rgba(184,70,60, 0.5)' : 'none')};
    position: relative;
    `;


const Image = styled.img`
    height:100%;
    width:80%;
    border:none;  
`;

function FlowerItem({key, src, selected, height, width, padding,margin, onClick}){
    
   return(<Wrapper height={height} width={width} padding={padding} selected={selected} margin={margin}>
        <Image key={key} src={src} onClick={onClick}></Image>
    </Wrapper>);
}

export default FlowerItem;