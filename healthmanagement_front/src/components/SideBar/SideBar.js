/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import ListButton from "./ListButton/ListButton";
import { BiUser, BiLike, BiLogOut } from "react-icons/bi";
import { FaRegistered } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { QueryClient, useQuery, useQueryClient } from "react-query";
import axios from "axios";

const sidebar = (isSideBarOpen) => css`
  position: absolute;
  display: flex;
  top: ${isSideBarOpen ? `100%` : `-800%`};
  left: 30%;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  width: 250px;
  height: 800%;
  transition: top 1s ease;
  background-color: white;
  z-index: 99;
  ${isSideBarOpen
    ? ""
    : `
        cursor: pointer;
    `};
`;

const header = css`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
`;

const userIcon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 8px;
  width: 45px;
  height: 45px;
  background-color: #713fff;
  color: white;
  font-size: 30px;
  font-weight: 600;
`;

const userInfo = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const userName = css`
  font-size: 18px;
  font-weight: 600;
  padding: 5px;
  padding-top: 0;
`;

const userEmail = css`
  font-size: 12px;
`;

const closeButton = css`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dbdbdb;
  padding-left: 0.3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: 12px;
  cursor: pointer;
  &:active {
    background-color: #fafafa;
  }
`;

const main = css`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100%;
  border-bottom: 1px solid #dbdbdb;
`;

const footer = css`
  padding: 10px;
`;

const Sidebar = ({ isSideBarOpen, setIsSideBarOpen }) => {
  const navigate = useNavigate();

  const sidebarCloseClickHandle = () => {
    setIsSideBarOpen(false);
  };

  const mypageClickHandle = () => {
    navigate("/mypage");
  };

  const likeListClickHandle = () => {
    navigate("/gym/" + userId + "/like/list");
  };

  const principal = useQuery(["principal"], async () => {
    const response = await axios.get(
      "http://localhost:8080/account/principal",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response;
  });

  if (principal.isLoading) {
    return <div>로딩중...</div>;
  }
  console.log(principal);
  const userId = principal.data.data.userId;
  const user = principal.data.data;
  console.log(user);
  return (
    <div css={sidebar(isSideBarOpen)}>
      <header css={header}>
        <div css={userIcon}>d</div>
        <div css={userInfo}>
          <h1 css={userName}>{user.name}</h1>
          <p css={userEmail}>{user.email}</p>
          <p css={userEmail}>{user.phone}</p>
        </div>
        <div css={closeButton} onClick={sidebarCloseClickHandle}>
          <GrFormClose />
        </div>
      </header>
      <main css={main}>
        <ListButton title="내 정보 수정" onClick={mypageClickHandle}>
          {" "}
          <BiUser />{" "}
        </ListButton>
        <ListButton title="관심목록" onClick={likeListClickHandle}>
          {" "}
          <BiLike />
        </ListButton>
        <ListButton title="우리 업체 등록">
          {" "}
          <FaRegistered />
        </ListButton>
        {/* {roles.includes("ROLE_OWNER") ? (<ListButton title="우리 업체 등록"> <FaRegistered/></ListButton>) : ""} */}
      </main>
      <footer css={footer}>
        <ListButton title="Logout">
          {" "}
          <BiLogOut />{" "}
        </ListButton>
      </footer>
    </div>
  );
};

export default Sidebar;
