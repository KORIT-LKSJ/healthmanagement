/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const header = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: white;
`;

const main = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 750px;
`;

const footer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: white;
`;

const Main = () => {
    return (
        <div>
            <header css={header}>fsda</header>
            <main css={main}>dff</main>
            <footer css={footer}></footer>
        </div>
    );
};

export default Main;
