import styled from "styled-components";

const Wrapper = styled.div`
    height:${props => props.height || '100%'};
    width: ${props => props.width || '100%'}; 
    padding: ${props => props.padding || '0px'}; 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${props => props.margin || '0 20px'};
    border:${(props) => (props.selected ? '5px solid rgba(184,70,60, 0.6)' : 'none')};
    border-radius: 6%;
    object-fit: cover;
    position: ${props => props.position || 'absolute'}; 
    `;
    //position: absolute;
    //position: relative;

const Image = styled.img`
    height:100%;
    width:100%;
    border:none;
    border-radius: 5%;
`;



//    border-radius: 10%;
function FlowerItem({key, src, selected, height, width, padding,margin, onClick,position}){
    
   return(<Wrapper height={height} width={width} padding={padding} selected={selected} margin={margin}>
        <Image key={key} src={src} onClick={onClick}></Image>
    </Wrapper>);
}

export default FlowerItem;