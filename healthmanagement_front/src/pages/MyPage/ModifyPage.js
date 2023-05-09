/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiExit } from "react-icons/bi";
import { GiSaveArrow } from "react-icons/gi";

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
  background-color: whitesmoke;
  overflow: hidden;
`;

const title = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const titleText = css`
  height: 70px;
  margin-top: 20px;
  padding-left: 10px;
  display: flex;
  font-style: italic;
  align-items: center;

  border-radius: 5px;

  font-size: 35px;
  font-weight: 600;
  color: #eea460;
  text-shadow: 2px 2px 2px #eea46050;
`;

const box = css`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const button = css`
  width: 50px;
  height: 50px;
`;

const icon = css`
  width: 50px;
  height: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
const modifycontainer = css`
  flex-direction: column;
  display: flex;
  border: none;
  padding-top: 20px;
  gap: 30px;
`;

const usernameText = css`
  display: flex;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  align-items: center;
  height: 600px;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
`;

const namebox = css`
  display: flex;
  align-items: center;
  width: 200px;
  margin-left: 20px;
  margin-right: 20px;
`;

const idText = css`
  display: flex;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  align-items: center;
  height: 600px;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
`;

const passwordText = css`
  display: flex;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  height: 600px;
  width: 100%;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`;

const informationinput = css`
  display: flex;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  width: 400px;
  padding: 10px;
  justify-content: center;
  background-color: whitesmoke;
`;
const passwordCheckText = css`
  display: flex;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  height: 600px;
  width: 100%;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`;

const telephoneText = css`
  display: flex;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  align-items: center;
  height: 600px;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
`;
const phoneText = css`
  display: flex;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  align-items: center;
  height: 600px;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
`;

const emailText = css`
  display: flex;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  align-items: center;
  height: 600px;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
`;

const addressText = css`
  display: flex;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  align-items: center;
  height: 600px;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
`;

const deliveryaddressText = css`
  display: flex;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  align-items: center;
  height: 600px;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
`;

const ModifyPage = () => {
  const navigate = useNavigate();
  const [changeuser, setChangeUser] = useState({
    password: "",
    passwordCheck: "",
    telephone: "",
    phone: "",
    email: "",
    adress: "",
    deliveryadress: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    password: "",
    passwordCheck: "",
  });

  const onclickExitHandle = () => {
    navigate("/mypage");
  };

  const onsuccessClickHandle = () => {
    navigate("/mypage");
  };

  const onchangeHandle = (e) => {
    const { value } = e.target;
    setChangeUser({ ...changeuser, value });
  };

  const successModify = () => {
    setErrorMessage({
      password: "",
      passwordCheck: "",
      telephone: "",
      phone: "",
      email: "",
      adress: "",
      deliveryadress: "",
    });
    alert("회원정보 수정 완료");
    navigate("/");
  };

  const errorModify = (error) => {
    console.log(error);
    setErrorMessage({
      password: "",
      passwordCheck: "",
      telephone: "",
      phone: "",
      email: "",
      adress: "",
      deliveryadress: "",
      ...error.response.data.errorData,
    });
  };
  return (
    <div css={container}>
      <header css={header}></header>
      <main css={main}>
        <div css={title}>
          <h1 css={titleText}>ModifyPage</h1>
          <div css={box}>
            <div css={button} onClick={onclickExitHandle}>
              <BiExit css={icon} />
            </div>
            <div css={button} onClick={onsuccessClickHandle}>
              <GiSaveArrow css={icon} />
            </div>
          </div>
        </div>
        <div css={modifycontainer}>
          <div css={usernameText}>
            {" "}
            <h2 css={namebox}>username</h2>
          </div>
          <div css={idText}>
            {" "}
            <h2 css={namebox}> ID </h2>
          </div>
          <div css={passwordText}>
            <h2 css={namebox}> Password </h2>
            <input
              css={informationinput}
              type="text"
              placeholder="비밀번호를 입력해주세요"
              onChange={onchangeHandle}
              name="password"
            ></input>
          </div>
          <div css={passwordCheckText}>
            <h2 css={namebox}> PasswordCheck </h2>
            <input
              css={informationinput}
              type="text"
              placeholder="비밀번호를 확인해주세요"
              onChange={onchangeHandle}
              name="passwordCheck"
            ></input>
          </div>
          <div css={telephoneText}>
            <h2 css={namebox}> Telephone </h2>
            <input
              css={informationinput}
              type="text"
              placeholder="전화번호를 기입해주세요"
              onChange={onchangeHandle}
              name="telephone"
            ></input>
          </div>
          <div css={phoneText}>
            <h2 css={namebox}> Phone </h2>
            <input
              css={informationinput}
              type="text"
              placeholder="휴대전화를 기입해주세요"
              onChange={onchangeHandle}
              name="phone"
            ></input>
          </div>
          <div css={emailText}>
            <h2 css={namebox}> Email</h2>
            <input
              css={informationinput}
              type="text"
              placeholder="이메일을 기입해주세요"
              onChange={onchangeHandle}
              name="email"
            ></input>
          </div>
          <div css={addressText}>
            <h2 css={namebox}> Address</h2>
            <input
              css={informationinput}
              type="text"
              placeholder="주소를 입력해주세요"
              onChange={onchangeHandle}
              name="address"
            ></input>
          </div>
          <div css={deliveryaddressText}>
            <h2 css={namebox}> DeliveryAddress</h2>
            <input
              css={informationinput}
              type="text"
              placeholder="배송지를 입력해주세요"
              onChange={onchangeHandle}
              name="deliveryaddress"
            ></input>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModifyPage;
