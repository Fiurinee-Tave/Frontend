import styled from 'styled-components';
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect,useState } from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Wrapper = styled.div`
    width:500px;
    height:500px;
    margin-top : 120px;
`;

const Title = styled.div`
font-size:40px;
margin-left:280px;
`;

const KakaoMap = styled.div`
width:400px;
height:500px;
margin-left:250px;
margin-top:20px;
`;

const {kakao} = window;

function FlowerShop(){

    const [position,setPosition] = useState(33.45701,126.5700667);

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setPosition({
                    lat:position.coords.latitude,
                    lng:position.coords.longitude
                });
            },
            (error) => {
                console.error(error);
            },
            {enableHighAccuracy:true}
        );
    },[]);

   useEffect(() => {
    const container = document.getElementById('mymap');
    const options = {
        center:new kakao.maps.LatLng(position.lat,position.lng),
        level:3
    };
    const map = new kakao.maps.Map(container, options);
   },[position])

    return(
        <Wrapper>
            <Title>주변 꽃집</Title>
        <KakaoMap id='mymap'>
        </KakaoMap>
        </Wrapper>
    );
}

export default FlowerShop;