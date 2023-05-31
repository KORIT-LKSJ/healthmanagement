/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import Modal from "react-modal";

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

const errorMsgName = (isName) => css`
  margin-left: 5px;
  font-size: 12px;
  color: ${isName ? "green" : "red"};
`;

const errorMsgEmail = (isEmail) => css`
  margin-left: 5px;
  font-size: 12px;
  color: ${isEmail ? "green" : "red"};
`;

const errorMsgId = (isUserId) => css`
  margin-left: 5px;
  font-size: 12px;
  color: ${isUserId ? "green" : "red"};
`;

const modal = css`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #00000088;
`;
const modalContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #dbdbdb;
  border-radius: 10px;
  width: 300px;
  height: 200px;

  background-color: white;
`;
const modalTitle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  padding: 10px;
  width: 100%;
  height: 30%;
  font-size: 14px;
  font-weight: 700;
`;

const modalMessage = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  font-size: 12px;
`;
const modalCloseButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-top: 1px solid #dbdbdb;
  width: 100%;
  height: 20%;
  background-color: white;
  cursor: pointer;
`;

const FindPassword = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [findpassword, setFindPassword] = useState({});
  const [findPasswordSubmit, setfindPasswordSubmit] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    message: "",
  });

  // 오류메세지 저장
  const [emailMessage, setEmailMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [userIdMessage, setUserIdMessage] = useState("");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(true);
  const [isName, setIsName] = useState(true);
  const [isUserId, setIsUserId] = useState(true);

  const findPasswordHandle = () => {
    setfindPasswordSubmit(true);
  };
  const findPassword = useQuery(
    ["findPassword", findpassword.password],
    async () => {
      const option = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        params: {
          id: findpassword.id,
          name: findpassword.name,
          email: findpassword.email,
        },
      };
      try {
        const response = await axios.get(
          `http://localhost:8080/auth/find/password`,
          option
        );
        setModalData({
          title: "비밀번호를 찾았습니다.",
          message: response.data,
        });
        return response;
      } catch (error) {
        setModalData({
          title: error.response.data.message,
          message: "정보를 다시 확인해주세요.",
        });
        return error.response;
      }
    },
    {
      enabled: findPasswordSubmit,
      onSuccess: () => {
        setfindPasswordSubmit(false);
        setModalIsOpen(true);
      },
    }
  );

  //아이디가 있는지 찾는것
  const onFindUserId = async (e) => {
    const userIdValue = e.target.value;
    await findpassword(userIdValue);

    if (findpassword.userId !== userIdValue) {
      setUserIdMessage("존재하지 않는 아이디입니다");
      setIsUserId(false);
    } else {
      setUserIdMessage("유효한 아이디입니다");
      setIsUserId(true);
    }
    setFindPassword({ ...findpassword, userId: userIdValue });
  };

  //이름 유효성 검사
  const onFindUsername = (e) => {
    const usernameValue = e.target.value;
    const usernameRegExp = /^[가-힣]{2,7}$/;
    if (!usernameRegExp.test(usernameValue)) {
      setNameMessage("이름은 한글이름만 작성가능합니다");
      setIsName(false);
    } else {
      setNameMessage("올바른 입력입니다");
      setIsName(true);
    }
    setFindPassword({ ...findpassword, username: usernameValue });
  };

  //이메일 유효성 검사
  const onFindEmail = (e) => {
    const emailValue = e.target.value;
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if (!emailRegExp.test(emailValue)) {
      setEmailMessage("이메일 형식이 올바르지 않습니다");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 입력입니다");
      setIsEmail(true);
    }
    setFindPassword({ ...findpassword, email: emailValue });
  };

  return (
    <div css={container}>
      <header css={header}>
        <img css={mainLogo} src="/image/gymLogo.png" alt="" />
      </header>
      <main css={main}>
        <div css={titleContainer}>
          <h1 css={title}>비밀번호 찾기</h1>
          <h2 css={subtitle}>
            비밀번호는 이름, 가입한 아이디, 이메일을 통해 찾으실 수 있습니다.
          </h2>
        </div>
        <div css={inputContainer}>
          <input
            css={input}
            type="text"
            placeholder="아이디를 입력해 주세요."
            onChange={onFindUserId}
          />
          <div css={errorMsgId(isUserId)}>{userIdMessage}</div>
          <input
            css={input}
            type="text"
            placeholder="이름을 입력해 주세요."
            onChange={onFindUsername}
          />
          <div css={errorMsgName(isName)}>{nameMessage}</div>
          <input
            css={input}
            type="email"
            placeholder="이메일을 입력해 주세요."
            onChange={onFindEmail}
          />
          <div css={errorMsgEmail(isEmail)}>{emailMessage}</div>
        </div>
      </main>
      <footer css={footer}>
        <div css={find}>
          <button css={findButton} onClick={findPasswordHandle}>
            찾기
          </button>
        </div>
      </footer>
      {modalIsOpen && (
        <div css={modal}>
          <div css={modalContainer}>
            <h2 css={modalTitle}>{modalData.title}</h2>
            <p css={modalMessage}>{modalData.message}</p>
            <button css={modalCloseButton} onClick={() => setModalData(false)}>
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindPassword;
