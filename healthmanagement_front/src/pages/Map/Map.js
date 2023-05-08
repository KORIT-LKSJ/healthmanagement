/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useQuery } from "react-query";

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

const Map = (props) => {
    const { ncpClientId } = props;

    const myLocation = useQuery(["myLocation"], async () => {
        const option = {
            headers: {
                "X-NCP-APIGW-API-KEY-ID": "8hqr8yrawm",
                "X-NCP-APIGW-API-KEY": "q2CgjAQ4MJlwx0xJBui4qUeGAdJmuZANtDXjnfHC",
            },
            params: {
                query: "부산광역시 부산진구 중앙대로 668 포라이프 리서치 코리아 부산 픽업센터 4층",
            },
        };
        return await axios.get("https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode", option);
    });

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${ncpClientId}&callback=initMap`;
        script.type = "text/javascript";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        window.initMap = () => {
            if (window.naver) {
                const map = new window.naver.maps.Map("map", {
                    center: new window.naver.maps.LatLng(37.3595704, 127.105399),
                    zoom: 15,
                });
            }
        };

        return () => {
            document.body.removeChild(script);
            delete window.initMap;
        };
    }, [ncpClientId]);

    if (!myLocation.isLoading) {
        console.log(myLocation);
    }

    return (
        <div css={container}>
            <header css={header}></header>
            <main css={main}>
                <div>
                    <div id="map" css={mapStyle}></div>
                </div>
            </main>
            <footer css={footer}></footer>
        </div>
    );
};

export default Map;
