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

const registerInfo = css`
    display: flex;
    flex-direction: column;
    color: #58595b;
    gap: 24px;
`;

const registerDetail = css`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-weight: 400;
    gap: 5px;
`;

const registerLabel = css`
    padding-left: 2px;
`;

const registerInput = css`
    width: 100%;
    background-color: white;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 12px;
`;

const register = css`
    display: flex;
    flex-direction: column;
`;

const registerButton = css`
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

const radioCheck = css`
    display: flex;
    justify-content: space-between;
    width: 130px;
    margin-top: 10px;
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

const Register = () => {
    return (
        <div css={container}>
            <header css={header}></header>
            <main css={main}>
                <div css={registerInfo}>
                    <div>
                        <img src="images/logo.png" alt="로고" />
                    </div>
                    <div css={registerDetail}>
                        <label css={registerLabel}>아이디</label>
                        <input css={registerInput} type="text" placeholder="아이디를 입력해 주세요." />
                    </div>
                    <div css={registerDetail}>
                        <label css={registerLabel}>비밀번호</label>
                        <input
                            css={registerInput}
                            type="password"
                            placeholder="영문, 숫자, 특수문자 포함 8~16자를 입력해 주세요."
                        />
                    </div>
                    <div css={registerDetail}>
                        <label css={registerLabel}>이름</label>
                        <input css={registerInput} type="text" placeholder="이름을 입력해 주세요." />
                    </div>
                    <div css={registerDetail}>
                        <label css={registerLabel}>이메일</label>
                        <input css={registerInput} type="email" placeholder="이메일을 입력해 주세요." />
                    </div>
                    <div css={registerDetail}>
                        <label css={registerLabel}>생년월일</label>
                        <input css={registerInput} type="number" placeholder="생년월일을 입력해 주세요." />
                    </div>
                    <div css={registerDetail}>
                        <label css={registerLabel}>전화번호</label>
                        <input css={registerInput} type="tel" placeholder="전화번호을 입력해 주세요." />
                    </div>
                    <div css={registerDetail}>
                        <label css={registerLabel}>키</label>
                        <input css={registerInput} type="number" placeholder="키를 입력해 주세요." />
                    </div>
                    <div css={registerDetail}>
                        <label css={registerLabel}>몸무게</label>
                        <input css={registerInput} type="number" placeholder="몸무게를 입력해 주세요." />
                    </div>
                </div>
                <div css={radioCheck}>
                    <div>
                        <input type="radio" id="user" name="userType" />
                        <label for="user">user</label>
                    </div>
                    <div>
                        <input type="radio" id="owner" name="userType" />
                        <label for="owner">owner</label>
                    </div>
                </div>
                <div css={register}>
                    <button css={registerButton}>회원가입</button>
                </div>
            </main>
            <footer css={footer}></footer>
        </div>
    );
};

export default Register;
