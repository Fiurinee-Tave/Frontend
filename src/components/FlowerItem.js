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
    border:${(props) => (props.selected ? '5px solid rgba(184,70,60)' : '1px solid gray')};
    `;
    //border:${(props) => (props.num === true ? '5px solid rgba(184,70,60,0.5)' : '1px solid gray')};

//border:${(props) => (props.selected ? '5px solid #FFFFFF' : '1px solid gray')};
//5px solid rgba(184,70,60,0.5)

const Image = styled.img`
    height:100%;
    width:80%;
    border:1px solid gray;  
`;

//{isHovering && <FlowerDetail onClick={onClick} />}

function FlowerItem({key, src, selected, height, width, padding,margin}){
   //console.log(num);
   return(<Wrapper height={height} width={width} padding={padding} selected={selected} margin={margin}>
        <Image key={key} src={src}></Image>
    </Wrapper>);
}

export default FlowerItem;