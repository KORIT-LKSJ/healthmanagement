/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useRef, useState } from "react";
import { BiSearch, BiUser } from "react-icons/bi";
import GymList from "./GymList";
import { HiHome } from "react-icons/hi";
import { BiShoppingBag } from "react-icons/bi";
import { HiMap } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import Sidebar from "../../SideBar/SideBar";
import { useQuery } from "react-query";
import SearchBar from "../../SearchBar/SearchBar";
import QueryString from "qs";
import axios from "axios";

const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const header = css`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5%;
    background-color: white;
`;

const mainLogo = css`
    height: 100%;
`;

const listIcon = css`
    font-size: 22px;
    margin-left: 270px;
    cursor: pointer;
`;

const searchIcon = css`
    font-size: 22px;
    margin-right: 270px;
    cursor: pointer;
`;

const main = css`
    position: relative;
    top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 90%;
    background-color: white;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const mainImgContainer = css`
    width: 100%;
    height: 50%;
    margin-bottom: 4%;
`;

const mainImg = css`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const mentCss = css`
    width: 100%;
    max-height: 20px;
    font-family: "Courier New", Courier, monospace;
    font-size: 20px;
    font-style: italic;
    color: gray;
    margin-left: 5%;
    margin-bottom: 2%;
`;

const gymListContainer = css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 55%;
`;
const footer = css`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5%;
    bottom: 0;
    background-color: white;
`;

const pageButton = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    width: 40%;
`;

const pageLocation = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    background-color: white;
    color: #dbdbdb;
    cursor: pointer;
`;
const pageLocationIcon = css`
    font-size: 20p;
`;

const pageLocationName = css`
    font-size: 16px;
`;

const Main = () => {
    const [searchParam, setSearchParam] = useState({ page: 1, searchValue: "" });
    const [refresh, setRefresh] = useState(false);
    const [gyms, setGyms] = useState([]);
    const [likeGyms, setLikeGyms] = useState([]);
    const [lastPage, setLastPage] = useState(1);
    const lastGymRef = useRef();
    const [isOpen, setIsOpen] = useState();
    const [isOpen2, setIsOpen2] = useState();

    useEffect(() => {
        const observerService = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setRefresh(true);
                }
            });
        };
        const observer = new IntersectionObserver(observerService, {
            threshold: 1,
        });
        observer.observe(lastGymRef.current);
    }, []);

    const searchGyms = useQuery(
        ["searchGyms"],
        async () => {
            const option = {
                params: searchParam,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                paramsSerializer: (params) => QueryString.stringify(params, { arrayFormat: "repeat" }),
            };
            const response = await axios.get("http://localhost:8080/gyms", option);
            return response;
        },
        {
            onSuccess: (response) => {
                if (refresh) {
                    setRefresh(false);
                }
                console.log(response);
                const totalCount = response.data.totalCount;
                console.log(totalCount);

                setLastPage(totalCount % 20 === 0 ? totalCount / 20 : Math.ceil(totalCount / 20));
                setGyms([...gyms, ...response.data.gymList]);
                setSearchParam({ ...searchParam, page: searchParam.page + 1 });
            },
            enabled: refresh && (searchParam.page < lastPage + 1 || lastPage === 0),
        }
    );

    const sideBarClickHandle = () => {
        if (!isOpen) {
            setIsOpen(true);
        }
    };

    const searchBarClickHandle = () => {
        if (!isOpen2) {
            setIsOpen2(true);
        } else {
            setIsOpen2(false);
        }
    };

    const searchInputHandle = (e) => {
        setSearchParam({ ...searchParam, page: 1, searchValue: e.target.value });
    };

    const searchSubmitHandle = (e) => {
        if (e.keyCode === 13) {
            setSearchParam({ ...searchParam, page: 1 });
            setGyms([]);
            setRefresh(true);
        }
    };

    return (
        <div css={container}>
            <header css={header}>
                <div css={listIcon} onClick={sideBarClickHandle}>
                    {" "}
                    <BiUser />{" "}
                </div>
                <img css={mainLogo} src="image/gymLogo.png" alt="" />
                <div css={searchIcon} onClick={searchBarClickHandle}>
                    <BiSearch />
                </div>
                <SearchBar
                    isOpen2={isOpen2}
                    searchInputHandle={searchInputHandle}
                    searchSubmitHandle={searchSubmitHandle}
                />
            </header>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <main css={main}>
                <div css={mainImgContainer}>
                    <img
                        css={mainImg}
                        src="https://www.da-gym.co.kr/_next/image?url=https%3A%2F%2Fs3.ap-northeast-2.amazonaws.com%2Fstone-i-dagym-centers%2Fimages%2Fevents%2F2305_dagym_mobile.png&w=1920&q=75"
                    />
                </div>
                <div css={mentCss}> 여긴 어때요?</div>
                <div css={gymListContainer}>
                    {gyms.length > 0 ? gyms.map((gym) => <GymList key={gym.gymId} gym={gym}></GymList>) : ""}
                    <div ref={lastGymRef}></div>
                </div>
            </main>
            <footer css={footer}>
                <div css={pageButton}>
                    <div css={pageLocation}>
                        <HiHome css={pageLocationIcon} />
                        <div css={pageLocationName}>홈</div>
                    </div>
                    <div css={pageLocation}>
                        <BiLike />
                        <div css={pageLocationName}>여기어때?</div>
                    </div>
                    <div css={pageLocation}>
                        <HiMap />
                        <div css={pageLocationName}>내 주변 헬스장</div>
                    </div>
                    <div css={pageLocation}>
                        <BiShoppingBag />
                        <div css={pageLocationName}>쇼핑하기</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Main;
