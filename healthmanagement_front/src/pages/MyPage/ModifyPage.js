/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import Header from "../../components/Main/Header/Header";
import Footer from "../../components/Main/Footer/Footer";
import { MdExitToApp, MdSaveAlt } from "react-icons/md";

const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const main = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 90%;
    background-color: white;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const title = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 10%;
`;

const titleText = css`
    display: flex;
    align-items: center;
    padding-left: 3%;
    width: 100%;
    font-size: 35px;
    font-weight: 600;
    color: #eea460;
    text-shadow: 2px 2px 2px #eea46050;
`;

const box = css`
    display: flex;
    align-items: center;
`;

const button = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
`;

const icon = css`
    width: 30px;
    height: 30px;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
`;

const modifyInfo = css`
    display: flex;
    flex-direction: column;
    color: #58595b;
    padding: 1%;
    width: 100%;
    height: 37%;
    gap: 10px;
`;

const modifyDetail = css`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-weight: 400;
    gap: 3px;
`;

const modifyLabel = css`
    margin-left: 5px;
`;

const modifyInput = css`
    border: 1px solid #dbdbdb;
    width: 100%;
    background-color: white;
    padding: 8px;
`;
const modifycontainer = css`
    display: flex;
    flex-direction: column;
    padding: 2% 3%;
    width: 100%;
    height: 50%;
    gap: 20px;
`;

const usernameTextBox = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px;
    border: 1px solid #dbdbdb;
    width: 100%;
    height: 10%;
    font-size: 18px;
    font-weight: 600;
`;

const namebox = css``;

const getname = css``;

const informationinput = css`
    display: flex;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 300px;
    padding: 10px;
    justify-content: center;
    background-color: whitesmoke;
`;

const inputContainer = css`
    display: flex;
    padding-top: 30px;
    align-items: flex-start;
    flex-direction: column;
`;

const phoneTextBox = css`
    display: flex;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    align-items: center;
    height: 100px;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
`;

const emailTextBox = css`
    display: flex;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    align-items: center;
    height: 100px;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
`;

const birthdateTextBox = css`
    display: flex;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    align-items: center;
    height: 100px;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
`;

const getbirthdate = css`
    display: flex;
    align-items: center;
    width: 200px;
    margin-left: 20px;
    margin-right: 20px;
`;

const errorMsg = css`
    margin-left: 5px;
    font-size: 12px;
    color: red;
`;

const errorMsgPhone = (isPhone) => css`
    margin-left: 5px;
    font-size: 12px;
    color: ${isPhone ? "green" : "red"};
`;

const errorMsgEmail = (isEmail) => css`
    margin-left: 5px;
    font-size: 12px;
    color: ${isEmail ? "green" : "red"};
`;

const ModifyPage = () => {
    const navigate = useNavigate();
    const [changeuser, setChangeUser] = useState({});

    //초깃값

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // 오류메세지 저장

    const [emailMessage, setEmailMessage] = useState("");
    const [phoneMessage, setPhoneMessage] = useState("");

    //유효성 검사

    const [isEmail, setIsEmail] = useState(true);
    const [isPhone, setIsPhone] = useState(true);

    const principal = useQuery(["Principal"], async () => {
        const response = await axios.get("http://localhost:8080/account/principal", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
        return response;
    });

    const userInfo = useQuery(
        ["UserInfo"],
        async () => {
            const response = await axios.get(`http://localhost:8080/account/user/${principal.data.data.userId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            return response;
        },
        {
            enabled: !!principal.data,
            onSuccess: (response) => {
                setPhone(response.data.phone);
                setEmail(response.data.email);
            },
        }
    );
    //회원정보가 저장되는 것 구현중
    const saveinfo = useMutation(
        async () => {
            const option = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            };
            return await axios.put(
                `http://localhost:8080/account/modify`,
                {
                    username: principal.data.data.username,
                    phone,
                    email,
                },
                option
            );
        },
        {
            onSuccess: () => {
                alert("회원정보 변경완료");
            },
        }
    );

    if (principal.isLoading || userInfo.isLoading) {
        return <div>Loading...</div>;
    }

    const onclickExitHandle = () => {
        navigate("/mypage");
    };

    // 회원이 로그인시 회원이름을 가지고 오는 로직구현완료
    //const principalData = data.data;
    // const roles = principalData.authorities.split(",");

    const roles = principal.data.data.authorities.split(",");

    const onchangeHandle = (e) => {
        const { name, value } = e.target;
        setChangeUser({ ...changeuser, [name]: value });
    };

    // 휴대전화 수정
    const onchangePhone = (e) => {
        const currentPhone = e.target.value;
        setPhone(currentPhone);
        const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        if (!phoneRegExp.test(currentPhone)) {
            setPhoneMessage("올바른 형식이 아닙니다");
            setIsPhone(false);
        } else {
            setPhoneMessage("사용가능한 번호입니다");
            setIsPhone(true);
        }
        setChangeUser({ ...changeuser, phone: currentPhone });
    };

    // 이메일 정보수정
    const onchangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
        const emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

        if (!emailRegExp.test(currentEmail)) {
            setEmailMessage("이메일의 형식이 올바르지 않습니다");
            setIsEmail(false);
        } else {
            setEmailMessage("사용가능한 이메일 입니다");
            setIsEmail(true);
        }
        setChangeUser({ ...changeuser, email: currentEmail });
    };

    const onsuccessClickHandle = () => {
        saveinfo.mutate();
    };

    // 회원정보 수정시 저장구현완료
    return (
        <div css={container}>
            <Header search={false} />
            <main css={main}>
                <div css={title}>
                    <h1 css={titleText}>ModifyPage</h1>
                    <div css={box}>
                        <div css={button} onClick={onsuccessClickHandle}>
                            <MdSaveAlt css={icon} />
                        </div>
                        <div css={button} onClick={onclickExitHandle}>
                            <MdExitToApp css={icon} />
                        </div>
                    </div>
                </div>
                <div css={modifyInfo}>
                    <div css={modifyDetail}>
                        <lable css={modifyLabel}>아이디</lable>
                        <input css={modifyInput} value={principal.data.data.username} disabled />
                        <div css={errorMsg}>변경할 수 없습니다.</div>
                    </div>
                    <div css={modifyDetail}>
                        <lable css={modifyLabel}>전화번호</lable>
                        <input
                            css={modifyInput}
                            type="text"
                            placeholder="전화번호를 입력해 주세요. (ex: 010-1234-5678)"
                            onChange={onchangePhone}
                            name="phone"
                            value={phone}
                        />
                        <div css={errorMsgPhone(isPhone)}>{phoneMessage}</div>
                    </div>
                    <div css={modifyDetail}>
                        <lable css={modifyLabel}>이메일</lable>
                        <input
                            css={modifyInput}
                            type="text"
                            placeholder="이메일을 기입해주세요"
                            onChange={onchangeEmail}
                            name="email"
                            value={email}
                        ></input>
                        <div css={errorMsgEmail(isEmail)}>{emailMessage}</div>
                    </div>
                    <div css={modifyDetail}>
                        <lable css={modifyLabel}>생년월일</lable>
                        <input css={modifyInput} value={principal.data.data.birthdate} disabled />
                        <div css={errorMsg}>변경할 수 없습니다.</div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ModifyPage;
