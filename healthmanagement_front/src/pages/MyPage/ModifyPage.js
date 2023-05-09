/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiExit } from "react-icons/bi";
import { GiSaveArrow } from "react-icons/gi";
import { useMutation } from "react-query";
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
    address: "",
    deliveryaddress: "",
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
    const { name, value } = e.target;
    setChangeUser({ ...changeuser, [name]: value });

    // 비밀번호와 비밀번호의 확인이 같은지 확인하는 로직 구현중
    if (name === "password" || name === "passwordCheck") {
      if (changeuser.password !== changeuser.passwordCheck) {
        setErrorMessage({
          ...errorMessage,
          passwordCheck: "비밀번호가 일치하지 않습니다",
        });
      } else if (name === "password" || value !== changeuser.passwordCheck) {
        setErrorMessage({
          ...errorMessage,
          passwordCheck: "비밀번호가 일치하지 않습니다",
        });
      } else {
        setErrorMessage({ ...errorMessage, passwordCheck: "" });
      }
    }
  };

  // 유저정보 들고오는 것과 회원정보 수정시 저장되는 것을 구현을 해야함, 마이페이지 디자인 수정 필요(밑에가 잘림)

  const successModify = () => {
    setErrorMessage({
      password: "",
      passwordCheck: "",
      telephone: "",
      phone: "",
      email: "",
      address: "",
      deliveryaddress: "",
    });
    setIsSuccess(true);
    setIsError(false);
  };

  const errorModify = (error) => {
    console.log(error);
    setIsSuccess(true);
    setIsError(false);
    setErrorMessage({
      password: "",
      passwordCheck: "",
      telephone: "",
      phone: "",
      email: "",
      address: "",
      deliveryaddress: "",
      ...error.response.data,
    });
  };

  // 유저정보를 들고오는? 로직구현중
  const modifyUser = async () => {
    const option = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/modifypage",
        JSON.stringify({ ...changeuser }),
        option
      );
      const accessToken =
        response.data.granType + " " + response.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      successModify();
    } catch (error) {
      errorModify(error);
    }
  };

  // 유저 정보를 저장하는 로직 구현중

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const modifySubmit = useMutation(async () => {
    const option = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/modifypage",
        JSON.stringify({ ...changeuser }),
        option
      );
      const accessToken =
        response.data.granType + " " + response.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      successModify();
      setIsSuccess(true); // 제출이 성공하면 isSuccess를 true로 변경
    } catch (error) {
      errorModify(error);
      setIsError(true); //제출이 실패하면 isError를 true로 변경
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    modifySubmit.mutate();
  };

  if (modifySubmit.isLoading) {
    return <div>저장중...</div>;
  }
  if (isSuccess) {
    return <div>저장되었습니다</div>;
  }
  if (isError) {
    return <div>저장 중 오류가 발생하였습니다</div>;
  }

  if (!modifySubmit.isLoading)
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
              {errorMessage.passwordCheck && (
                <div css={errorMessage}>{errorMessage.passwordCheck}</div>
              )}
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
              {errorMessage.passwordCheck && (
                <div css={errorMessage}>{errorMessage.passwordCheck}</div>
              )}
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
                placeholder="주소를 기입해주세요"
                onChange={onchangeHandle}
                name="address"
              ></input>
            </div>
            <div css={deliveryaddressText}>
              <h2 css={namebox}> DeliveryAddress</h2>
              <input
                css={informationinput}
                type="text"
                placeholder="배송지를 기입해주세요"
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
