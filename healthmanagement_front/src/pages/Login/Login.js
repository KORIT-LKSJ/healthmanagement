/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

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

const loginInfo = css`
    display: flex;
    flex-direction: column;
    color: #58595b;
    gap: 24px;
`;

const loginDetail = css`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-weight: 400;
    gap: 5px;
`;

const loginLabel = css`
    padding-left: 2px;
`;

const loginInput = css`
    width: 100%;
    background-color: white;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 12px;
`;

const errorMsg = css`
    margin-left: 5px;
    font-size: 12px;
    color: red;
`;

const logo = css`
    display: flex;
    padding: 5px;
    width: 214px;
    height: 90px;
`;

const find = css`
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
    font-size: 14px;
    gap: 15px;
`;

const findUsernamePassword = css`
    color: #96989c;
    cursor: pointer;
`;

const moreLogin = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 5px;
`;

const loginImg = css`
    height: 60px;
    cursor: pointer;
`;

const signUpContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const signUp = css`
    font-size: 14px;
    height: 20px;
    cursor: pointer;
`;

const login = css`
    display: flex;
    flex-direction: column;
    margin-top: 250px;
`;

const loginButton = css`
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

const Login = () => {
    const navigate = useNavigate();
    const [loginUser, setLoginUser] = useState({
        username: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState({
        username: "",
        password: "",
    });

    const findIdClickHandle = () => {
        navigate("/find/id");
    };

    const findPasswordClickHandle = () => {
        navigate("/find/password");
    };

    const signUpClickHandle = () => {
        navigate("/register");
    };

    const successLogin = () => {
        setErrorMessage({
            username: "",
            password: "",
        });
        alert("로그인 성공!");
        navigate("/");
    };

    const errorLogin = (error) => {
        console.log(error);
        setErrorMessage({
            username: "",
            password: "",
            ...error.response.data.errorData,
        });
    };

    const loginSubmit = useMutation(async () => {
        const option = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const response = await axios.post(
                "http://localhost:8080/auth/login",
                JSON.stringify({ ...loginUser }),
                option
            );
            const accessToken = response.data.granType + " " + response.data.accessToken;
            localStorage.setItem("accessToken", accessToken);
            successLogin();
        } catch (error) {
            errorLogin(error);
        }
    });

    const onchangeHandle = (e) => {
        const { name, value } = e.target;
        setLoginUser({ ...loginUser, [name]: value });
    };
    if (!loginSubmit.isLoading)
        return (
            <div css={container}>
                <header css={header}></header>
                <main css={main}>
                    <div css={loginInfo}>
                        <div css={logo}>
                            <img src="images/logo.png" alt="로고" />
                        </div>
                        <div css={loginDetail}>
                            <label css={loginLabel}>아이디</label>
                            <input
                                css={loginInput}
                                type="text"
                                placeholder="아이디를 입력해 주세요."
                                onChange={onchangeHandle}
                                name="username"
                            />
                            <div css={errorMsg}>{errorMessage.username}</div>
                        </div>
                        <div css={loginDetail}>
                            <label css={loginLabel}>비밀번호</label>
                            <input
                                css={loginInput}
                                type="password"
                                placeholder="영문, 숫자, 특수문자 포함 8~16자를 입력해 주세요."
                                onChange={onchangeHandle}
                                name="password"
                            />
                            <div css={errorMsg}>{errorMessage.password}</div>
                        </div>
                    </div>
                    <div css={find}>
                        <div css={findUsernamePassword} onClick={findIdClickHandle}>
                            아이디찾기
                        </div>
                        <div css={findUsernamePassword} onClick={findPasswordClickHandle}>
                            비밀번호찾기
                        </div>
                    </div>

                    <div css={moreLogin}>
                        <img css={loginImg} src="images/naverLogin.png" alt="naver" />
                        <img css={loginImg} src="images/kakaoLogin.png" alt="kakao" />
                        <img css={loginImg} src="images/googleLogin.png" alt="google" />
                    </div>
                    <div css={signUpContainer}>
                        <div css={signUp} onClick={signUpClickHandle}>
                            회원가입
                        </div>
                    </div>
                    <div css={login}>
                        <button
                            css={loginButton}
                            onClick={() => {
                                loginSubmit.mutate();
                            }}
                        >
                            로그인
                        </button>
                    </div>
                </main>
                <footer css={footer}></footer>
            </div>
        );
};

export default Login;
