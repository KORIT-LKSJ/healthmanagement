/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
const cardContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    margin-bottom: 60px;
    border: 1px solid #dbdbdb;
    border-radius: 7px;
    box-shadow: 0px 0px 5px #dbdbdb;
    width: 350px;
    max-height: 450px;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 10px #dbdbdb;
    }
    &:active {
        background-color: #fafafa;
    }
`;
const header = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const titleText = css`
    font-weight: 600;
`;
const main = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
const imgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 7px;
    box-shadow: 0px 5px 5px #dbdbdb;
    padding: 5px;
    height: 200px;
    background-color: #fafafa;
    overflow: hidden;
`;
const img = css`
    height: 100%;
`;

const footer = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-weight: 600;
    font-size: 14px;
    padding: 20px;
`;

const like = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 7px;
    padding: 10px;
    height: 30px;
    background-color: white;
    font-weight: 600;
    box-shadow: 0px 5px 5px #dbdbdb;
`;

const likeIcon = css`
    padding-right: 5px;
`


const GymList = () => {
    return (
        <>
        <div css={cardContainer}>
        <header css={header}>
            <h1 css={titleText}>헬스보이짐</h1>
        </header>
        <main css={main}>
            <div css={imgBox}>
                <img css={img} src="https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/17d9d9dd931434a275/4K7y1fTVp4P6W56Znqp1CqNuV1ex3C4413m1gaVtE51h.jpg"/>
            </div>
        </main>
        <footer css={footer}>
            <h2>위치: 서면 </h2>
            <h2>가격: (월) 100000&#8361;</h2>
            <div css={like}><div css={likeIcon}></div>추천: 1</div>
        </footer>
        </div>

        <div css={cardContainer}>
        <header css={header}>
            <h1 css={titleText}>헬스보이짐</h1>
        </header>
        <main css={main}>
            <div css={imgBox}>
                <img css={img} src="https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/17d9d9dd931434a275/4K7y1fTVp4P6W56Znqp1CqNuV1ex3C4413m1gaVtE51h.jpg"/>
            </div>
        </main>
        <footer css={footer}>
            <h2>위치: 서면 </h2>
            <h2>가격: (월) 100000&#8361;</h2>
            <div css={like}><div css={likeIcon}></div>추천: 1</div>
        </footer>
        </div>

        <div css={cardContainer}>
        <header css={header}>
            <h1 css={titleText}>헬스보이짐</h1>
        </header>
        <main css={main}>
            <div css={imgBox}>
                <img css={img} src="https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/17d9d9dd931434a275/4K7y1fTVp4P6W56Znqp1CqNuV1ex3C4413m1gaVtE51h.jpg"/>
            </div>
        </main>
        <footer css={footer}>
            <h2>위치: 서면 </h2>
            <h2>가격: (월) 100000&#8361;</h2>
            <div css={like}><div css={likeIcon}></div>추천: 1</div>
        </footer>
        </div>

        <div css={cardContainer}>
        <header css={header}>
            <h1 css={titleText}>헬스보이짐</h1>
        </header>
        <main css={main}>
            <div css={imgBox}>
                <img css={img} src="https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/17d9d9dd931434a275/4K7y1fTVp4P6W56Znqp1CqNuV1ex3C4413m1gaVtE51h.jpg"/>
            </div>
        </main>
        <footer css={footer}>
            <h2>위치: 서면 </h2>
            <h2>가격: 100000&#8361; (월)</h2>
            <div css={like}><div css={likeIcon}></div>추천: 1</div>
        </footer>
        </div>
    </>    
    );
};

export default GymList;