/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import Search from "../../Search/Search";
import Sidebar from "../../SideBar/SideBar";

const header = css`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5%;
    background-color: white;
`;

const headerButton = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    width: 40%;
`;

const mainLogo = css`
    height: 100%;
`;

const headerIcon = css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    cursor: pointer;
`;

const Header = ({ gyms, setGyms, refresh, setRefresh, search }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState();

    const sideBarClickHandle = () => {
        if (!isSideBarOpen) {
            setIsSideBarOpen(true);
        }
    };

    return (
        <>
            <header css={header}>
                <div css={headerButton}>
                    <div css={headerIcon} onClick={sideBarClickHandle}>
                        <BiUser />
                    </div>
                    <img css={mainLogo} src="/image/gymLogo.png" alt="" />
                    {search ? (
                        <Search refresh={refresh} setRefresh={setRefresh} gyms={gyms} setGyms={setGyms} />
                    ) : (
                        <div style={{ width: 22 }}></div>
                    )}
                </div>
            </header>
            <Sidebar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
        </>
    );
};

export default Header;
