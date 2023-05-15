/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { BiExit } from "react-icons/bi";
import React, { useState } from "react";
import { useQuery } from "react-query";
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
const namebox = css`
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

const informationinput = css`
  display: flex;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  width: 400px;
  padding: 10px;
  justify-content: center;
  background-color: whitesmoke;
`;

const PasswordUpdate = () => {
  const navigate = useNavigate();
  // 초깃값
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordConfirm] = useState("");
  //오류메세지 저장
  const [passwordmessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  // 유효성 검사
  const [ispassword, setIsPassword] = useState(false);
  const [ispasswordconfirm, setIsPasswordConfirm] = useState(false);
  const principal = useQuery(["Principal"], async () => {
    const accessToken = localStorage.getItem("accessToken");
    const response = await axios.get(
      "http://localhost:8080/account/principal",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response;
  });

  const userInfo = useQuery(
    ["UserInfo"],
    async () => {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get(
        `http://localhost:8080/account/user/${principal.data.data.userId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response;
    },
    {
      enabled: !!principal.data,
    }
  );

  if (principal.isLoading || userInfo.isLoading) {
    return <div>Loading...</div>;
  }

  const onclickExitHandle = () => {
    navigate("/mypage");
  };
  const roles = principal.data.data.authorities.split(",");

  const onchangeHandle = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };
  const onsuccessClickHandle = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.post(
        "http://localhost:8080/modifypage",
        password,
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
        "숫자+ 영문자 + 특수문자 조합으로 8자리이상 입력해주세요"
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

  return (
    <div css={container}>
      <header css={header}></header>
      <main css={main}>
        <div css={title}>
          <h1 css={titleText}>Passwordchange</h1>
          <div css={box}>
            <div css={button} onClick={onclickExitHandle}>
              <BiExit css={icon} />
              <div css={passwordText}>
                <h2 css={namebox}>passoword</h2>
                <input
                  css={informationinput}
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  onChange={onchangePassword}
                  name="password"
                  value={password}
                ></input>
              </div>
              <div css={passwordCheckText}>
                <h2 css={namebox}>passwordConfirm</h2>
                <input
                  css={informationinput}
                  type="password"
                  placeholder="비밀번호를 확인해주세요"
                  onChange={onchangePasswordConfirm}
                  name="passwordConfirm"
                  value={password}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PasswordUpdate;
