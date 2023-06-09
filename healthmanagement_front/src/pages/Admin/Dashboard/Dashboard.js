/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
`;

const header = css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 10%;
    background-color: #444444;
`;

const title = css`
    margin-left: 10px;
    width: 100%;
    max-width: 150px;
    object-fit: contain;
`;

const subTitle = css`
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-size: 18px;
    font-weight: 600;
    color: #919493;
`;

const main = css``;

const Dashboard = () => {
    return (
        <div css={container}>
            <header css={header}>
                <img css={title} src="/images/logo.png" alt="로고" />
                <h2 css={subTitle}>Administration</h2>
            </header>
            <main css={main}></main>
            <footer></footer>
        </div>
    );
};

export default Dashboard;
