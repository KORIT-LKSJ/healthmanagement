/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import { useNavigate } from "react-router-dom";
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
    width: 300px;
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


const GymList = ({ gym }) => {
    const navigate = useNavigate();

    const clickHandle = () => {
        navigate("/gym/" + gym.gymId);
      }
      
    return (
        <>
        <div css={cardContainer} onClick={clickHandle}>
        <header css={header}>
            <h1 css={titleText}>{gym.gymName}</h1>
        </header>
        <main css={main}>
            <div css={imgBox}>
                <img css={img} src={gym.gymImgUrl}/>
            </div>
        </main>
        <footer css={footer}>
            <h2>위치: {gym.gymAddress} </h2>
            <h2>가격: (월) {gym.gymPrice}&#8361;</h2>
            <div css={like}><div css={likeIcon}></div>추천: {gym.likeCount}</div>
        </footer>
        </div>
    </>    
    );
};

export default GymList;