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

const registerInfo = css`
    display: flex;
    flex-direction: column;
    color: #58595b;
`;

const logo = css`
    display: flex;
    padding: 5px;
    width: 214px;
    height: 90px;
`;

const registerDetail = css`
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    font-size: 15px;
    font-weight: 400;
    gap: 5px;
`;

const registerLabel = css`
    padding-left: 2px;
`;

const registerInput = css`
    margin-bottom: 3px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 12px;
    width: 100%;
    background-color: white;
`;

const errorMsg = css`
    margin-left: 5px;
    font-size: 12px;
    color: red;
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
    const navigate = useNavigate();
    const [registerUser, setRegisterUser] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
        phone: "",
        birthdate: "",
        userType: ""
    });

    const [errorMessage, setErrorMessage] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
        phone: "",
    });

    const successRegister = () => {
        setErrorMessage({
            username: "",
            password: "",
            name: "",
            email: "",
            phone: "",
        });
        alert("회원가입 성공!");
        navigate("/login");
    };

    const errorRegister = (error) => {
        setErrorMessage({
            username: "",
            password: "",
            name: "",
            email: "",
            phone: "",
            ...error.response.data.errorData,
        });
    };

    const registerSubmit = useMutation(async () => {
        const option = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            await axios.post("http://localhost:8080/auth/signup", JSON.stringify({ ...registerUser }), option);
            successRegister();
        } catch (error) {
            errorRegister(error);
        }
    });

    const onchangeHandle = (e) => {
        const { name, value } = e.target;
        setRegisterUser({ ...registerUser, [name]: value });
    };

    const userTypeClickHandle = (e) => {
        setRegisterUser({ ...registerUser, [e.target.name]: e.target.value });
    };
    

    if (!registerSubmit.isLoading)
        return (
            <div css={container}>
                <header css={header}></header>
                <main css={main}>
                    <div css={registerInfo}>
                        <div css={logo}>
                            <img src="images/logo.png" alt="로고" />
                        </div>
                        <div css={registerDetail}>
                            <label css={registerLabel}>아이디</label>
                            <input
                                css={registerInput}
                                type="text"
                                placeholder="아이디를 입력해 주세요."
                                name="username"
                                onChange={onchangeHandle}
                            />
                        </div>
                        <div css={errorMsg}>{errorMessage.username}</div>
                        <div css={registerDetail}>
                            <label css={registerLabel}>비밀번호</label>
                            <input
                                css={registerInput}
                                type="password"
                                placeholder="영문, 숫자, 특수문자 포함 8~16자를 입력해 주세요."
                                name="password"
                                onChange={onchangeHandle}
                            />
                        </div>
                        <div css={errorMsg}>{errorMessage.password}</div>
                        <div css={registerDetail}>
                            <label css={registerLabel}>이름</label>
                            <input
                                css={registerInput}
                                type="text"
                                placeholder="이름을 입력해 주세요."
                                name="name"
                                onChange={onchangeHandle}
                            />
                        </div>
                        <div css={errorMsg}>{errorMessage.name}</div>
                        <div css={registerDetail}>
                            <label css={registerLabel}>이메일</label>
                            <input
                                css={registerInput}
                                type="email"
                                placeholder="이메일을 입력해 주세요."
                                name="email"
                                onChange={onchangeHandle}
                            />
                        </div>
                        <div css={errorMsg}>{errorMessage.email}</div>
                        <div css={registerDetail}>
                            <label css={registerLabel}>생년월일</label>
                            <input
                                css={registerInput}
                                type="text"
                                placeholder="ex)1996-02-05"
                                name="birthdate"
                                onChange={onchangeHandle}
                            />
                        </div>
                        <div css={registerDetail}>
                            <label css={registerLabel}>전화번호</label>
                            <input
                                css={registerInput}
                                type="tel"
                                placeholder="ex)010-xxxx-xxxx"
                                name="phone"
                                onChange={onchangeHandle}
                            />
                        </div>
                        <div css={errorMsg}>{errorMessage.phone}</div>
                    </div>
                    <div css={radioCheck}>
                        <div>
                            <input type="radio" id="user" name="userType" value={0} onClick={userTypeClickHandle} />
                            <label htmlFor="user">user</label>
                        </div>
                        <div>
                            <input type="radio" id="owner" name="userType" value={1} onClick={userTypeClickHandle} />
                            <label htmlFor="owner">owner</label>
                        </div>
                    </div>
                    <div css={register}>
                        <button
                            css={registerButton}
                            onClick={() => {
                                registerSubmit.mutate();
                            }}
                        >
                            회원가입
                        </button>
                    </div>
                </main>
                <footer css={footer}></footer>
            </div>
        );
};

export default Register;
