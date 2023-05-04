/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

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

const logo = css`
    display: flex;
    padding: 5px;
    width: 214px;
    height: 90px;
`;

const titleContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80px;
`;

const title = css`
    font-size: 30px;
    font-weight: 600;
`;

const subtitle = css`
    font-size: 14px;
    height: 40px;
`;

const inputContainer = css`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-weight: 400;
    gap: 10px;
`;

const input = css`
    width: 100%;
    background-color: white;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 12px;
`;

const FindButton = css`
    position: absolute;
    bottom: 60px;
    padding: 15px 0px;
    border: 2px solid #dbdbdb;
    border-radius: 10px;
    width: 706px;
    font-size: 15px;
    font-weight: 600;
    background-color: #eda058;
    cursor: pointer;
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

const FindPassword = () => {
    return (
        <div css={container}>
            <header css={header}></header>
            <main css={main}>
                <div css={logo}>
                    <img src="/images/logo.png" alt="로고" />
                </div>
                <div css={titleContainer}>
                    <h1 css={title}>비밀번호 찾기</h1>
                    <h2 css={subtitle}>비밀번호는 이름, 가입한 아이디, 이메일을 통해 찾으실 수 있습니다.</h2>
                </div>
                <div css={inputContainer}>
                    <input css={input} type="text" placeholder="아이디를 입력해 주세요." />
                    <input css={input} type="text" placeholder="이름을 입력해 주세요." />
                    <input css={input} type="email" placeholder="이메일을 입력해 주세요." />
                </div>
                <button css={FindButton}>찾기</button>
            </main>
            <footer css={footer}></footer>
        </div>
    );
};

export default FindPassword;
