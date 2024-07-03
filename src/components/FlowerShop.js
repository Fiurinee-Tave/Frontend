import styled from 'styled-components';
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect,useState } from 'react';

const Wrapper = styled.div`
    width: 32%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 50px;
    margin: 0 50px;
    @media (max-width: 575px) {
    width: 91%;
        font-size:16px;
       margin: 0 50px;
  }
`;

const Title = styled.div`
    font-size:40px;
        @media (max-width: 575px) {
      font-size:20px;
  }
`;

const KakaoMap = styled.div`
    width: 0%;
    height: 0%;
`;

const PlaceList = styled.div`
    width: 100%;
    height: 400px;
    background-color:white;
    box-shadow: 4px 4px 8px #c6c6c6;
    border-radius:12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:5px;
    text-align:left;
    @media (max-width: 575px) {
      height: 320px;
  }
`;

const ShopName = styled.div`
    cursor: pointer;
    color:#B7394C;
    font-size:25px;
    font-weight:600;
    padding:15px 0px 10px 0px;
        @media (max-width: 575px) {
      font-size:16px;
      padding:12px 0px 9px 0px;
  }
`;

const ShopAdr = styled.div`
    font-size:19px;
    padding:2px 0px;
        @media (max-width: 575px) {
      font-size:13px;
      padding:0px;
  }
`;

const ShopNum = styled.div`
    font-size:16px;
    width:100%;
    border-bottom:${(props) => props.border};
    padding-bottom: 10px;
    text-align:left;
    align-items: center;
            @media (max-width: 575px) {
      font-size:12.5px;
  }
    `;

const {kakao} = window;


function FlowerShop(){

    const [places, setPlaces] = useState([]);
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
    if(window.kakao){
    const container = document.getElementById('mymap');
    const options = {
        center:new kakao.maps.LatLng(position.lat,position.lng),
        level:3
    };
    const map = new kakao.maps.Map(container, options);

    const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
    searchPlaces(map, infowindow);
}

   },[position]);

   const searchPlaces = (map, infowindow) => {
        const ps = new window.kakao.maps.services.Places();
        const options = {
            location: new kakao.maps.LatLng(position.lat,position.lng),
            radius:3000,
        }

    ps.keywordSearch("꽃집",(data, status, pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
          // 검색 결과가 있으면 상위 3개 장소를 상태로 설정
          setPlaces(data.slice(0, 3));
          // 검색된 장소에 마커 표시
        } else {
          alert('검색 결과가 존재하지 않습니다.');
        }
      },options);
    };

    return(
        <Wrapper>
            <Title>주변 꽃집</Title>
            <PlaceList>
            <ul>
            {places.map((place, index) => (
                <li key={index}>
                <ShopName onClick={() => {window.open(place.place_url)}}>{place.place_name}</ShopName>
                {place.road_address_name ? (
                <ShopAdr>{place.road_address_name}</ShopAdr>
                ) : (
                <ShopAdr>{place.address_name}</ShopAdr>
                )}
                <br></br>
                <ShopNum border={ index == 2 ? null:'2px solid #AEA7A7'}>{place.phone}</ShopNum>
                </li>
        ))}
            </ul>
            </PlaceList>
           
            <KakaoMap id='mymap'></KakaoMap>
        </Wrapper>
    );
}

export default FlowerShop;