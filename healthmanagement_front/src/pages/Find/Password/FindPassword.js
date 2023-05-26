/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

const header = css`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 5%;
    background-color: white;
`;

const mainLogo = css`
    height: 100%;
`;

const main = css`
    position: relative;
    top: 5%;
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 85%;
    background-color: white;
`;

const titleContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
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
    color: #58595b;
    padding: 1%;
    height: 20%;
    min-height: 150px;
    gap: 10px;
`;

const input = css`
    width: 100%;
    background-color: white;
    border: 1px solid #dbdbdb;
    padding: 8px;
`;

const footer = css`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 10%;
    bottom: 0;
    background-color: white;
`;

const find = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2%;
    width: 100%;
    height: 100%;
`;

const findButton = css`
    padding: 10px 0;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 100%;
    font-size: 15px;
    font-weight: 600;
    background-color: #eda058;
    cursor: pointer;
`;

const FindPassword = () => {
    return (
        <div css={container}>
            <header css={header}>
                <img css={mainLogo} src="/image/gymLogo.png" alt="" />
            </header>
            <main css={main}>
                <div css={titleContainer}>
                    <h1 css={title}>비밀번호 찾기</h1>
                    <h2 css={subtitle}>
                        비밀번호는 이름, 가입한 아이디, 이메일을 통해 찾으실 수
                        있습니다.
                    </h2>
                </div>
                <div css={inputContainer}>
                    <input
                        css={input}
                        type="text"
                        placeholder="아이디를 입력해 주세요."
                    />
                    <input
                        css={input}
                        type="text"
                        placeholder="이름을 입력해 주세요."
                    />
                    <input
                        css={input}
                        type="email"
                        placeholder="이메일을 입력해 주세요."
                    />
                </div>
            </main>
            <footer css={footer}>
                <div css={find}>
                    <button css={findButton}>찾기</button>
                </div>
            </footer>
        </div>
    );
};

export default FindPassword;
