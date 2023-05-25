/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import ListButton from "./ListButton/ListButton";
import { BiLike, BiLogOut, BiUser } from "react-icons/bi";
import { FaRegistered } from "react-icons/fa";
import { MdOutlineFitnessCenter } from "react-icons/md";

const sidebar = (isSidebarOpen) => css`
  position: absolute;
  display: flex;
  top: ${isSidebarOpen ? `100%` : `-800%`};
  left: 30%;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  width: 250px;
  height: 800%;
  transition: top 1s ease;
  background-color: white;
  z-index: 99;
  ${isSidebarOpen
    ? ""
    : `cursor:pointer;
    `}
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
  background-color: #eea460;
  color: white;
  font-size: 30px;
  font-weight: 600;
`;

const userInfo = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const userName = css`
  display: flex;
  align-items: flex-end;
  padding-left: 3px;
  font-size: 18px;
  font-weight: 600;
`;
const userEmail = css`
  padding-left: 3px;
  font-size: 12px;
`;

const closeButton = css`
  position: absolute;
  display: flex;
  padding-left: 0.3px;
  width: 18px;
  height: 18px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  top: 10px;
  right: 10px;
  font-size: 12px;
  cursor: pointer;
  &:active {
    background-color: #fafafa;
  }
`;

const maincontainer = css`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100%;
  border-bottom: 1px solid #dbdbdb;
`;

const footer = css`
  padding: 10px;
`;

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const sidebarCloseHandle = () => {
    setIsSidebarOpen(false);
  };

  const mypageClickHandle = () => {
    navigate("/mypage");
  };

  const likeListClickHandle = () => {
    navigate("/gym/" + userId + "/like/list");
  };
  const myBusinessAddHandle = () => {
    navigate("/facility");
  };

  const myAddFitnessHandle = () => {
    navigate("/addgymlist/" + userId);
  };

  const logoutClickHandle = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("accessToken");
      queryClient.invalidateQueries("principal");
      window.location.href = "/"; // 새로고침 없이 바로 로그인 화면으로 넘어가는 것
    }
  };


  const facilityRegisterHandle = () => {
    navigate("/facility");
  };

  // principal 변수를 초기화하고 가져온 데이터를 사용하여 로딩상태를 처리 및  사용자 정보에 접근
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

  const isOwner = principal.data.data.authorities === "ROLE_OWNER"; // 역할에 따라 오너인지 여부를 판단
  const userId = principal.data.data.userId;
  const user = principal.data.data;

  return (
    <div css={sidebar(isSidebarOpen)}>
      <header css={header}>
        <div css={userIcon}>{principal.data.data.name.substr(0, 1)}</div>{" "}
        {/* 사용자의 이름또는 이메일의 첫글자 하나만 들고오겠다 */}
        <div css={userInfo}>
          <h1 css={userName}>{user.name}</h1>
          <p css={userEmail}>{user.email}</p>
        </div>
        <div css={closeButton} onClick={sidebarCloseHandle}>
          <GrFormClose />
        </div>
      </header>
      <main css={maincontainer}>
        <ListButton title="마이페이지" onClick={mypageClickHandle}>
          {" "}
          <BiUser />{" "}
        </ListButton>

        {/* 일반 유저와 오너 여부에 따라 아이콘이 다르게 구현  */}
        {isOwner && (
          <ListButton title="우리 업체 등록" onClick={myBusinessAddHandle}>
            {" "}
            <FaRegistered />
          </ListButton>
        )}
        {isOwner && (
          <ListButton title="내가 등록한 헬스장" onClick={myAddFitnessHandle}>
            {" "}
            <MdOutlineFitnessCenter />
          </ListButton>
        )}
        {!isOwner && (
          <ListButton title="관심목록" onClick={likeListClickHandle}>
            {" "}
            <BiLike />
          </ListButton>
        )}

      </main>
      <footer css={footer} onClick={logoutClickHandle}>
        <ListButton title="Logout">
          {" "}
          <BiLogOut />{" "}
        </ListButton>
      </footer>
    </div>
  );
};

export default SideBar;
