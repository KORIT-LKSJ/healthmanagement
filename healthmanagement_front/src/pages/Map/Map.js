import React, { useEffect } from "react";

const Map = (props) => {
    const { ncpClientId } = props;

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

    return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
};

export default Map;
