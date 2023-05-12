/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Map, MapMarker } from "react-kakao-maps-sdk";

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

const KaKaoMap = () => {
    const { kakao } = window;
    const [state, setState] = useState({
        center: { lat: 33.450701, lng: 126.570667 },
        errMsg: null,
        isLoading: true,
    });
    const [myCenter, setMyCenter] = useState("");
    const [nearLatLngs, setNearLatLngs] = useState([]);
    const [stateTest, setStateTest] = useState([]);

    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    const searchAddrFromCoords = (coords, callback) => {
        // 좌표로 행정동 주소 정보를 요청합니다
        geocoder.coord2RegionCode(coords.lng, coords.lat, callback);
    };

    const fetchNearbyGymAddress = useQuery(
        ["searchNearbyAddress"],
        async () => {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken"),
                },
                params: {
                    myAddress: myCenter,
                },
            };
            try {
                const response = await axios.get("http://localhost:8080/search/gym/address", option);

                const nearLatLngsList = [];
                response.data.addresses.forEach((address, index) => {
                    geocoder.addressSearch(address, (result, status) => {
                        // 정상적으로 검색이 완료됐으면
                        if (status === kakao.maps.services.Status.OK) {
                            const { Ma, La } = new kakao.maps.LatLng(result[0].y, result[0].x);
                            // 결과값으로 받은 위치를 상태에 저장합니다
                            nearLatLngsList.push({ lat: Ma, lng: La });
                            setNearLatLngs([...nearLatLngsList]);
                        }
                    });
                });

                return response;
            } catch (error) {
                return error;
            }
        },
        {
            enabled: !state.isLoading && !!myCenter,
            onSuccess: (response) => {
                setState({
                    ...state,
                    isLoading: true,
                });
            },
        }
    );

    useEffect(() => {
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setState((prev) => ({
                        ...prev,
                        center: {
                            lat: position.coords.latitude, // 위도
                            lng: position.coords.longitude, // 경도
                        },
                        isLoading: false,
                    }));
                },
                (err) => {
                    setState((prev) => ({
                        ...prev,
                        errMsg: err.message,
                    }));
                }
            );
        } else {
            // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
            setState((prev) => ({
                ...prev,
                errMsg: "geolocation을 사용할수 없어요..",
                isLoading: false,
            }));
        }
    }, []);

    if (!state.isLoading) {
        // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
        searchAddrFromCoords(state.center, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
                setMyCenter(result[0].address_name);
            }
        });
    }

    if (fetchNearbyGymAddress.isLoading) {
        return <></>;
    }

    console.log(nearLatLngs);
    return (
        <div css={container}>
            <header css={header}></header>
            <main css={main}>
                <Map css={mapStyle} center={state.center} level={3}>
                    {nearLatLngs.map((nearLatLng, index) => (
                        <MapMarker key={index} position={nearLatLng}>
                            <div style={{ padding: "5px", color: "#000" }}>
                                {state.errMsg ? state.errMsg : "여기에 계신가요?!"}
                            </div>
                        </MapMarker>
                    ))}
                </Map>
            </main>
            <footer css={footer}></footer>
        </div>
    );
};

export default KaKaoMap;
