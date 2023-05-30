/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

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
  border-radius: 10px;
  padding: 12px;
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

const errorMsg = css`
  font-size: 12px;
  color: red;
`;

const FindId = () => {
  const navigate = useNavigate();
  const [finduser, setFindUser] = useState({});
  const [findUsernameSubmit, setFindUsernameSubmit] = useState(false);
  // 오류메세지 저장
  const [emailMessage, setEmailMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(true);
  const [isName, setIsName] = useState(true);

  const findIdClickHandle = () => {
    setFindUsernameSubmit(true);
  };

  const findUsername = useQuery(
    ["findUsername", finduser.username],
    async () => {
      const option = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        params: {
          name: finduser.name,
          email: finduser.email,
        },
      };
      const response = await axios.get(
        `http://localhost:8080/auth/find/username`,
        option
      );
      return response;
    },
    {
      enabled: findUsernameSubmit,
      onSuccess: () => {
        setFindUsernameSubmit(false);
      },
    }
  );

  //이메일 유효성 검사
  const onFindEmail = (e) => {
    const emailValue = e.target.value;
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if (!emailRegExp.test(emailValue)) {
      setEmailMessage("이메일 형식이 올바르지 않습니다");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
    setFindUser({ ...finduser, email: emailValue });
  };

  // 이름 유효성검사
  const onFindUsername = (e) => {
    const nameValue = e.target.value;
    const nameRegExp = /^[A-Za-z0-9_]+$/;
    if (!nameRegExp.test(nameValue)) {
      setNameMessage("이름 형식이 올바르지 않습니다");
      setIsName(false);
    } else {
      setNameMessage("");
      setIsName(true);
    }
    setFindUser({ ...finduser, name: nameValue });
  };

  return (
    <div css={container}>
      <header css={header}>
        <img css={mainLogo} src="/image/gymLogo.png" alt="" />
      </header>
      <main css={main}>
        <div css={titleContainer}>
          <h1 css={title}>아이디 찾기</h1>
          <h2 css={subtitle}>
            아이디는 가입시 입력하신 이름, 이메일을 통해 찾을 수 있습니다.
          </h2>
        </div>
        <div css={inputContainer}>
          <input
            css={input}
            type="text"
            placeholder="이름을 입력해 주세요."
            onChange={onFindUsername}
          />
          <div css={errorMsg}>{nameMessage}</div>
          <input
            css={input}
            type="email"
            placeholder="이메일을 입력해 주세요."
            onChange={onFindEmail}
          />
          <div css={errorMsg}>{emailMessage}</div>
        </div>
      </main>
      <footer css={footer}>
        <div css={find}>
          <button css={findButton} onClick={findIdClickHandle}>
            찾기
          </button>
        </div>
      </footer>
    </div>
  );
};

export default FindId;
