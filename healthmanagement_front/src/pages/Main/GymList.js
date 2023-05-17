/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useNavigate } from "react-router-dom";
const cardContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1%;
    margin-bottom: 40px;
    border: 1px solid #dbdbdb;
    border-radius: 7px;
    box-shadow: 0px 0px 5px #dbdbdb;
    width: 45%;
    max-height: 75%;
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
    margin: 4%;
    width: 100%;
    height: 5%;
`;

const titleText = css`
    font-weight: 600;
`;
const main = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4%;
    width: 100%;
    height: 55%;
`;

const imgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    box-shadow: 0px 5px 5px #dbdbdb;
    padding: 5px;
    width: 90%;
    height: 100%;
    background-color: #fafafa;
    overflow: hidden;
`;
const img = css`
    width: 300px;
`;

const footer = css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 600;
    font-size: 14px;
    width: 90%;
    height: 20%;
    padding-bottom: 5%;
`;

const like = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 7px;
    padding: 5%;
    height: 30px;
    background-color: white;
    font-weight: 600;
    box-shadow: 0px 5px 5px #dbdbdb;
`;

const likeIcon = css`
    padding-right: 5px;
`;

const GymList = ({ gym }) => {
    const navigate = useNavigate();

    const clickHandle = () => {
        navigate("/gym/" + gym.gymId);
    };

    return (
        <>
            <div css={cardContainer} onClick={clickHandle}>
                <header css={header}>
                    <h1 css={titleText}>{gym.gymName}</h1>
                </header>
                <main css={main}>
                    <div css={imgBox}>
                        <img css={img} src={gym.gymImgUrl} />
                    </div>
                </main>
                <footer css={footer}>
                    <h2>위치: {gym.gymAddress} </h2>
                    <h2>가격: (월) {gym.gymPrice}&#8361;</h2>
                    <div css={like}>
                        <div css={likeIcon}></div>추천: {gym.likeCount}
                    </div>
                </footer>
            </div>
        </>
    );
};

export default GymList;
