/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
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

const titleText = css`
  width: 100%;
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

const modifycontainer = css`
  flex-direction: column;
  display: flex;
  border: none;
  padding-top: 20px;
`;
const personalmodify = css`
  border: 1px solid black; // 없앨것
  display: flex;
  gap: 20px;
`;

const username = css``;
const id = css``;
const password = css``;
const passwordCheck = css``;
const telephone = css``;
const phone = css``;
const email = css``;
const adress = css``;
const deliveryadress = css``;

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

const ModifyPage = () => {
  const navigate = useNavigate();
  

  return (
    <div css={container}>
      <header css={header}></header>
      <main css={main}>
        <h1 css={titleText}>ModifyPage</h1>
        <div css={modifycontainer}>
          <div css={personalmodify}>username:</div>
          <div css={username}></div>
          <div css={id}></div>
          <div css={password}></div>
          <div css={passwordCheck}></div>
          <div css={telephone}></div>
          <div css={phone}></div>
          <div css={email}></div>
          <div css={adress}></div>
          <div css={deliveryadress}></div>
        </div>
      </main>
      <footer css={footer}></footer>
    </div>
  );
};

export default ModifyPage;
