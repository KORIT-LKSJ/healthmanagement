/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

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
const userInfo = css`
  border: 1px solid black;
  display: flex;
  align-items: center;
  width: 100%;
  height: 200px;
`;
// 사용자의 사진을 가져와야함, 밑에 alt잡아주어야함
const imgbox = css``;
const img = css``;
const userImgUrl = css``;

const AccountSetting = css`
  display: flex;
  border: 1px solid black;
  width: 200px;

  cursor: pointer;
`;

const like = css`
  display: flex;
  border: 1px solid black;
  cursor: pointer;
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
        <div css={titleText}>MyPage</div>
      
        <div css={userInfo}>
          userInfo
          <div css={imgbox}>
            <img css={img} src={userImgUrl} alt="/" />
          </div>
          <div css={AccountSetting}>계정 정보</div>
          <div css={like}>즐겨찾기</div>
        </div>
        
      </main>
      <footer css={footer}></footer>
    </div>
  );
};

export default MyPage;
