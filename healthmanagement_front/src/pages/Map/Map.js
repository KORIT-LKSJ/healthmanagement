/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";
import { useQuery } from "react-query";
import Geocode from "react-geocode";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: gray;
`;

const header = css`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: white;
`;

const main = css`
  display: flex;
  flex-direction: column;
  padding: 20px 22px 75px 22px;
  width: 750px;
  height: 100%;
  background-color: white;
  overflow: hidden;
`;

const mapStyle = css`
  width: 100%;
  height: 100%;
`;

const footer = css`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: white;
`;

Geocode.setApiKey("AIzaSyBNF8zr18aoubHxQN_0X2jjICBMkL_VGDI");
Geocode.setLocationType("ROOFTOP");

const Map = () => {
  const [nearLatLngs, setNearLatLngs] = useState([]);
  const [addressList, setAddressList] = useState([]);
  const navermaps = useNavermaps();

  //   console.log(navigator.geolocation);

  const myLocation = useQuery(["myLocation"], async () => {
    const response = await Geocode.fromAddress(
      "부산광역시 부산진구 중앙대로 668 포라이프 리서치 코리아 부산 픽업센터 4층"
    );
    const { lat, lng } = response.results[0].geometry.location;
    return { lat, lng };
  });

  const fetchNearbyGymAddress = useQuery(
    ["searchNearbyAddress"],
    async () => {
      const option = {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
        },
        params: {
          myAddress: "부산진구",
        },
      };
      return await axios.get(
        "http://localhost:8080/search/gym/address",
        option
      );
    },
    {
      onSuccess: (response) => {
        const addresses = response.data.addresses;
        setAddressList([...addresses]);
      },
    }
  );

  useEffect(() => {
    setNearLatLngs([]);
    addressList.forEach(async (address) => {
      const response = await Geocode.fromAddress(address);
      console.log(response);
      const { lat, lng } = response.results[0].geometry.location;
      setNearLatLngs([...nearLatLngs, { lat, lng }]);
    });
  }, [addressList]);

  if (myLocation.isLoading || fetchNearbyGymAddress.isLoading) {
    return <></>;
  }

  return (
    <div css={container}>
      <header css={header}></header>
      <main css={main}>
        <MapDiv css={mapStyle}>
          <NaverMap
            defaultCenter={
              new navermaps.LatLng(myLocation.data.lat, myLocation.data.lng)
            }
            defaultZoom={16}
            minZoom={15}
          >
            {nearLatLngs.map((nearLatLng, index) => (
              <Marker
                key={index}
                position={new navermaps.LatLng(nearLatLng.lat, nearLatLng.lng)}
              />
            ))}
          </NaverMap>
        </MapDiv>
      </main>
      <footer css={footer}></footer>
    </div>
  );
};

export default Map;
