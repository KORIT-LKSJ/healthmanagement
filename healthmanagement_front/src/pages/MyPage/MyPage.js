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
  width: 100%;
  height: 70px;
  margin-top: 20px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  // justify-content: center;

  border-radius: 5px;
  //background: linear-gradient(#f55c09 20%, #EEA460 80%);

  font-size: 35px;
  font-weight: 600;
  color: #eea460;
  text-shadow: 2px 2px 2px #eea46050;
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
const usernameAndGrade = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const username = css`
  display: flex;
  flex-direction: column;
  padding: 40px 0px 0px 0px;
  align-items: center;
  height: 30px;
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
  box-shadow: 2px 3px 2px 2px #eea46050;
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
  display: flex;
  width: 33.3%;
  justify-content: center;
  border: 1px solid black;
  cursor: pointer;
`;

const coupon = css`
  display: flex;
  width: 33.3%;
  justify-content: center;
  border: 1px solid black;
  cursor: pointer;
`;

const point = css`
  display: flex;
  width: 33.3%;
  justify-content: center;
  border: 1px solid black;
  cursor: pointer;
`;

const accountSetting = css`
  display: flex;
  align-items: center;
  border: 1px solid black;
  width: 100%;
  height: 200px;
  background-color: whitesmoke;
  cursor: pointer;
`;

const accountTitle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const personalName = css`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
`;

const userIcon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  width: 150px;
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

const bookMarkName = css`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
`;

const bookTitle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const bookMarkicon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
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
                <img css={img} src="images/cat.png" alt="" />
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
          <div css={accountSetting}>
            <div css={accountTitle}>
              <BiUserCircle css={userIcon} />
              <div css={personalName}>정보수정</div>
            </div>
            <div></div>
          </div>
          <div css={bookMark}>
            <div css={bookTitle}>
              <FaRegStar css={bookMarkicon} />
              <div css={bookMarkName}>즐겨찾기</div>
            </div>
          </div>
        </div>
      </main>
      <footer css={footer}></footer>
    </div>
  );
};

export default MyPage;
