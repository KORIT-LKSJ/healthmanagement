/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const usersidebar = (isUserSidebarOpen) => css`
  position: absolute;
  display: flex;
  top: ${isUserSidebarOpen ? `100%` : `-800%`};
  left: 30%;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  width: 250px;
  height: 800%;
  transition: top 1s ease;
  background-color: white;
  z-index: 99;
  ${isUserSidebarOpen
    ? ""
    : `cursor:pointer;
    
    `}
`;

const UserSidebar = ({ isUserSidebarOpen, setIsUserSidebarOpen }) => {
  return (
    <div css={usersidebar}>
      <header>
        <div>d</div>
      </header>
    </div>
  );
};

export default UserSidebar;
