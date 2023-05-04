/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";

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
  background-color: white;
  overflow: hidden;
`;
const titleText = css`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: linear-gradient(#191654 20%, #000046 80%);
  font-size: 35px;
  font-weight: 600;
  width: 100%;
  height: 70px;
  color: white;
`;

const mypagecontainer = css`
  flex-direction: column;
  display: flex;
  border: none;
`;

const user = css`
  display: flex;
  align-items: center;
`;
const userInfo = css`
  display: flex;
  border: 1px solid black;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: whitesmoke;
`;

const username = css`
  display: flex;
  align-items: center;
  height: 50px;
`;
const usernameAndGrade = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 사용자의 사진을 가져와야함, 밑에 alt잡아주어야함
const imgbox = css`
  display: flex;
  right: 270px;
  bottom: 30px;
  border: 1px solid black;
  margin: 8px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 1px 1px 2px 1px gray;
  overflow: hidden;
  cursor: pointer;
`;
const img = css`
  overflow: hidden;
`;

const select = css`
  display: flex;
  justify-content: center;
  border-style: double;
  height: 180px;
`;
const rating = css`
  width: 33.3%;
  border: 1px solid black;
  cursor: pointer;
`;

const coupon = css`
  width: 33.3%;
  border: 1px solid black;
  cursor: pointer;
`;

const point = css`
  width: 33.3%;
  border: 1px solid black;
  cursor: pointer;
`;

const AccountSetting = css`
  display: flex;
  align-items: center;
  border: 1px solid black;
  width: 100%;
  height: 200px;
  background-color: whitesmoke;
  cursor: pointer;
`;

const personalName = css``;

const userIcon = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
`;

const bookMark = css`
  display: flex;
  align-items: center;
  border: 1px solid black;
  width: 100%;
  height: 200px;
  background-color: whitesmoke;
  cursor: pointer;
`;

const bookMarkicon = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
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

const MyPage = () => {
  return (
    <div css={container}>
      <header css={header}></header>
      <main css={main}>
        <h1 css={titleText}>MyPage</h1>
        <div css={mypagecontainer}>
          <div css={userInfo}>
            <div css={user}>
              <div css={imgbox}>
                <div css={img} src="images/cat.png" alt="/" />
              </div>
              <div css={usernameAndGrade}>
                <h2 css={username}>UserName:</h2>
                <div css={username}>Grade:</div>
              </div>
            </div>
          </div>
          <div css={select}>
            <div css={rating}>Rating</div>
            <div css={coupon}>Coupon</div>
            <div css={point}>Point</div>
          </div>
          <div css={AccountSetting}>
            <div css={personalName}></div>
            <BiUserCircle css={userIcon} />
            <div>AccountInformation</div>
          </div>
          <div css={bookMark}>
            <FaRegStar css={bookMarkicon} />
            BookMark
          </div>
        </div>
      </main>
      <footer css={footer}></footer>
    </div>
  );
};

export default MyPage;
