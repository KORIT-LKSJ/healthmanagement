/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { BiListUl } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';
import GymList from "./GymList";
import { HiHome } from 'react-icons/hi';
import { BiShoppingBag } from 'react-icons/bi';
import { HiMap } from 'react-icons/hi';
import { BiLike } from 'react-icons/bi';


const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const header = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: white;
    position: fixed;
`;

const mainLogo = css`
    height: 60px;
`

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
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 750px;
`;

const mainImgContainer = css`
    margin-bottom: 30px;
`

const mainImg = css`
    display: flex;
    justify-content: center;
    width: 750px;
    height: 450px;
`;

const mentCss = css`
    width: 750px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    font-style: italic;
    color: gray;
    margin-bottom: 15px;
`;

const gymListContainer = css`
    display: flex;
    flex-wrap: wrap;
    width: 750px;
`
const footer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    bottom: 0;
    background-color: white;
    position: fixed;
`
const homeIcon = css`
    background-color: white;
    color: #dbdbdb;
    font-size: 20px;
    margin-left:330px;
    cursor: pointer;
`;

const userIcon = css`
    background-color: white;
    color: #dbdbdb;
    font-size: 20px;
    margin-right:330px;
    cursor: pointer;
`
const likeIcon = css`
    background-color: white;
    color: #dbdbdb;
    font-size: 20px;
    cursor: pointer;
`
const mapIcon = css`
    background-color: white;
    color: #dbdbdb;
    font-size: 20px;
    cursor: pointer;
`

const footerName = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 650px;
    height: 20px;
    bottom: 0;
    background-color: white;
    position: fixed;
    font-size: 10px;
`

const homeLabel = css`
    margin-left: 27px;
    margin-right: 33px;
`;
const thisLabel = css`
    margin-right: 8px;
`;
const aroundLabel = css`
    
`;
const shoppingLabel = css`
    margin-left: 5px;
    margin-right: 10px;
`;
const Main = () => {
    return (
        <div css={container}>
            <header css={header}>
                <div css={listIcon}> <BiListUl/> </div>
                <img css={mainLogo} src="image/gymLogo.png" alt=""/>     
                <div css={searchIcon}><BiSearch /></div>
            </header>
            <main css={main}>
                <div css={mainImgContainer}>
                    <img css={mainImg} src="https://www.da-gym.co.kr/_next/image?url=https%3A%2F%2Fs3.ap-northeast-2.amazonaws.com%2Fstone-i-dagym-centers%2Fimages%2Fevents%2F2305_dagym_mobile.png&w=1920&q=75"/>
                </div>
            </main>
            <div css={mentCss}> 여긴 어때요?</div>
            <div css= {gymListContainer}>
                <GymList/>
            </div>
            <footer css={footer}>
                <div css={homeIcon}><HiHome/></div>
                <div css={likeIcon}><BiLike/></div>
                <div css={mapIcon}><HiMap/></div>
                <div css={userIcon}><BiShoppingBag/></div>
            </footer>
            <div css={footerName}>
                <div css={homeLabel}>홈</div>
                <div css={thisLabel}>여기어때?</div>
                <div css={aroundLabel}>내 주변 헬스장</div>
                <div css={shoppingLabel}>쇼핑하기</div>
            </div>
        </div>
    );
};

export default Main;
