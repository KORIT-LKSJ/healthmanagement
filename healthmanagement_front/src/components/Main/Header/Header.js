/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { BiUser, BiSearch } from "react-icons/bi";
import Sidebar from "../../SideBar/SideBar";
import SearchBar from "../../SearchBar/SearchBar";

const header = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5%;
    background-color: white;
`;

const headerButton = css`
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    width: 40%;
    background-color: white;
`;

const mainLogo = css`
    height: 100%;
`;

const headerIcon = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    cursor: pointer;
`;

const headerOptionContainer = (isSideBarOpen, isSearchBarOpen) => css`
    position: absolute;
    transform: translateX(-50%);
    top: 5%;
    left: 50%;
    width: 40%;
    height: 40%;
    overflow: hidden;
`;

const Header = ({ gyms, setGyms, refresh, setRefresh, search }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState();
    const [isSearchBarOpen, setIsSearchBarOpen] = useState();

    const sideBarClickHandle = () => {
        setIsSideBarOpen(!isSideBarOpen);
    };

    const searchBarClickHandle = () => {
        setIsSearchBarOpen(!isSearchBarOpen);
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
                        <div css={headerIcon} onClick={searchBarClickHandle}>
                            <BiSearch />
                        </div>
                    ) : (
                        <div style={{ width: 22 }}></div>
                    )}
                </div>
                <Sidebar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
                {search ? (
                    <SearchBar
                        isSearchBarOpen={isSearchBarOpen}
                        gyms={gyms}
                        setGyms={setGyms}
                        refresh={refresh}
                        setRefresh={setRefresh}
                    />
                ) : (
                    <></>
                )}
            </header>
        </>
    );
};

export default Header;
