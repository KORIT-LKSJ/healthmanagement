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
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: white;
`;
const headerLine = css`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0px 13px;
    width: 100%;
    max-width: 768px;
    `;

const headerIcon = css`
    vertical-align: baseline;   
    margin-top: 20px;
    height: 60px;
    font-size: 40px;
    color: #58595B;
    cursor: pointer;
`;


const main = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 750px;
    height: 100%;
    background-color: white;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const mainImgContainer = css`
    margin-bottom: 30px;
`;

const mainImg = css`
    display: flex;
    justify-content: center;
    width: 750px;
    height: 450px;
`;

const mentCss = css`
    width: 750px;
    font-family: "Courier New", Courier, monospace;
    font-size: 20px;
    font-style: italic;
    margin-bottom: 15px;
`;

const gymListContainer = css`
    display: flex;
    flex-wrap: wrap;
    width: 750px;
`;
const footer = css`
    position: fixed;
    display: flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    height: 60px;
    bottom: 0;
    background-color: white;
`;
const footerContainer = css`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    width: 750px;
`;

const iconsContainer = css`
    text-align: center;
    vertical-align: middle;
    padding: 10px;
    width: 192px;
    height: 63.8px;

`

const icons = css`
    margin-bottom: 10px;
    width: 172px;
    height: 20px;
    background-color: white;
    color: #58595B;
    font-size: 25px;
    cursor: pointer;
`;

const text = css`
    font-size: 12;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #58595B;
`;


const Main = () => {
    const [ searchParam, setSearchParam ] =useState({page: 1, searchValue: ""})
    const [ refresh, setRefresh ] = useState(false);
    const [ gyms, setGyms ] = useState([]);
    const [ likeGyms, setLikeGyms ] = useState([]);
    const [ lastPage, setLastPage ] = useState(1);
    const lastGymRef = useRef();
    const [isOpen, setIsOpen] = useState();
    const [isOpen2, setIsOpen2] = useState();

    useEffect(()=> {
        const observerService = (entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    setRefresh(true);
                }
            });
        }
        const observer = new IntersectionObserver(observerService, {threshold:1});
        observer.observe(lastGymRef.current);
    }, []);

    const option = {
        params: searchParam,
        headers: {
            Authorization: localStorage.getItem("accessToken")
        },
        paramsSerializer: params=> QueryString.stringify(params, {arrayFormat:'repeat'})
    }

    const searchGyms = useQuery(["searchGyms"], async () => {
        const response = await axios.get("http://localhost:8080/gyms", option);
        return response;
        console.log(response)
    }, {
        onSuccess: (response) => {
            if(refresh) {
                setRefresh(false);
            }
            console.log(response)
            const totalCount = response.data.totalCount;
            console.log(totalCount)
            
            setLastPage(totalCount % 20 === 0 ? totalCount / 20 : Math.ceil(totalCount / 20));
            setGyms([...gyms, ...response.data.gymList]);
            setSearchParam({...searchParam, page: searchParam.page + 1});
        },
        enabled: refresh && (searchParam.page < lastPage + 1 || lastPage === 0)
    });

    const sideBarClickHandle = () => {
        if (!isOpen) {
            setIsOpen(true);
        }
    };

    const searchBarClickHandle = () => {
        if (!isOpen2) {
            setIsOpen2(true);
        }
        else{
            setIsOpen2(false);
        }
    }

    const searchInputHandle = (e) => {
        setSearchParam({...searchParam, page:1, searchValue: e.target.value});
    }
    
    const searchSubmitHandle = (e) => {
        if(e.keyCode === 13) {
            setSearchParam({...searchParam, page:1});
            setGyms([]);
            setRefresh(true);
        }
    }

    return (
        <div css={container}>
            <header css={header}>
                <div css={headerLine} >
                    <div css={headerIcon} onClick={sideBarClickHandle}><BiUser /></div>
                    <img src="image/gymLogo.png" alt="" />
                    <div css={headerIcon} onClick={searchBarClickHandle}><BiSearch /></div>
                        <SearchBar isOpen2={isOpen2} searchInputHandle={searchInputHandle} searchSubmitHandle={searchSubmitHandle}/>
                </div>
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
                    {gyms.length > 0 ? gyms.map(gym=> (<GymList key={gym.gymId} gym={gym}></GymList>)) : ""}
                    <div ref={lastGymRef}></div>
                </div>
            </main>
            <footer css={footer}>
                <div css={footerContainer} >
                    <div css={iconsContainer}>
                        <div css={icons}><HiHome /></div>
                        <div css={text} >홈</div>
                    </div>
                    <div css={iconsContainer}>
                        <div css={icons}><BiLike /></div>
                        <div css={text} >여기어때?</div>
                    </div>
                    <div css={iconsContainer}>
                        <div css={icons}><HiMap /></div>
                        <div css={text} >내 주변 헬스장</div>
                    </div>
                    <div css={iconsContainer}>
                        <div css={icons}><BiShoppingBag /></div>
                        <div css={text} >쇼핑하기</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Main;