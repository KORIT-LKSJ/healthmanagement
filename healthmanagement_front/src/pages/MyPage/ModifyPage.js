/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiExit } from "react-icons/bi";
import { GiSaveArrow } from "react-icons/gi";
import { useMutation, useQuery } from "react-query";
import axios from "axios";

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
  gap: 20px;
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

const getname = css`
  display: flex;
  align-items: center;
  width: 200px;
  margin-left: 20px;
  margin-right: 20px;
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
  const [changeuser, setChangeUser] = useState({});
  const [password, setPassword] = useState("");

  //초깃값
  const [passwordconfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelePhone] = useState("");
  const [phone, setPhone] = useState("");

  // 오류메세지 저장
  const [passwordmessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [emailmessage, setEmailMessage] = useState("");
  const [telephoneMessage, setTelePhoneMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  //유효성 검사
  const [ispassword, setIsPassword] = useState(false);
  const [ispasswordconfirm, setIsPasswordConfirm] = useState(false);
  const [isemail, setIsEmail] = useState(false);
  const [istelephone, setIsTelePhone] = useState(false);
  const [isphone, setIsPhone] = useState(false);

  const { isLoading, data } = useQuery(["principal"], async () => {
    const accessToken = localStorage.getItem("accessToken");
    const response = await axios.get("http://localhost:8080/auth/principal", {
      params: { accessToken },
    });
    return response.data;
  });

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  const onclickExitHandle = () => {
    navigate("/mypage");
  };

  // 회원이 로그인시 회원이름을 가지고 오는 로직구현완료
  //const principalData = data.data;
  // const roles = principalData.authorities.split(",");

  const principalData = data.data;
  const roles = principalData.authorities.split(",");

  const onchangeHandle = (e) => {
    const { name, value } = e.target;
    setChangeUser({ ...changeuser, [name]: value });
  };
  const onsuccessClickHandle = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.post(
        "http://localhost:8080/register",
        changeuser,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data); //수정된 회원정보 확인
      navigate("/mypage");
    } catch (error) {
      console.error(error);
    }
  };

  // 비밀번호와 비밀번호 확인하는 정규식 구현중

  const onchangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자+ 영문자 +특수문자 조합으로 8자리이상 입력해주세요"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호입니다");
      setIsPassword(true);
    }
  };

  const onchangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("비밀번호가 같지않습니다");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("비밀번호를 올바르게 입력하였습니다");
      setIsPasswordConfirm(true);
    }
  };

  //전화번호 수정

  const onchangeTelePhone = (e) => {
    const currentTelePhone = e.target.value;
    setTelePhone(currentTelePhone);
    const telephoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (!telephoneRegExp.test(currentTelePhone)) {
      setTelePhoneMessage("올바른 형식이 아닙니다");
      setIsTelePhone(false);
    } else {
      setTelePhoneMessage("사용가능한 번호입니다");
      setIsTelePhone(true);
    }
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
  };

  // 이메일 정보수정
  const onchangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다");
      setIsEmail(false);
    } else {
      setEmailMessage("사용가능한 이메일 입니다");
      setIsEmail(true);
    }
  };

  // 회원정보 수정시 저장되는 것을 구현을 해야함, 마이페이지 디자인 수정 필요(밑에가 잘림)
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
            <h2 css={namebox}>username</h2>
            <div css={getname}>{principalData.username}</div>
          </div>
          <div css={passwordText}>
            <h2 css={namebox}> Password </h2>
            <input
              css={informationinput}
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={onchangePassword}
              name="password"
            ></input>
          </div>
          <div css={passwordCheckText}>
            <h2 css={namebox}> PasswordConfirm </h2>
            <input
              css={informationinput}
              type="password"
              placeholder="비밀번호를 확인해주세요"
              onChange={onchangePasswordConfirm}
              name="passwordConfirm"
            ></input>
          </div>
          <div css={telephoneText}>
            <h2 css={namebox}> Telephone </h2>
            <input
              css={informationinput}
              type="text"
              placeholder="ex.055-xxx-xxxx"
              onChange={onchangeTelePhone}
              name="telephone"
            ></input>
          </div>
          <div css={phoneText}>
            <h2 css={namebox}> Phone </h2>
            <input
              css={informationinput}
              type="text"
              placeholder="ex.010-xxxx-xxxx"
              onChange={onchangePhone}
              name="phone"
            ></input>
          </div>
          <div css={emailText}>
            <h2 css={namebox}> Email</h2>
            <input
              css={informationinput}
              type="text"
              placeholder="이메일을 기입해주세요"
              onChange={onchangeEmail}
              name="email"
            ></input>
          </div>
          <div css={addressText}>
            <h2 css={namebox}> Address</h2>
            <input
              css={informationinput}
              type="text"
              placeholder="도로지번으로 입력하여주세요"
              onChange={onchangeHandle}
              name="address"
            ></input>
          </div>
          <div css={deliveryaddressText}>
            <h2 css={namebox}> DeliveryAddress</h2>
            <input
              css={informationinput}
              type="text"
              placeholder="도로지번으로 입력하여주세요"
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
