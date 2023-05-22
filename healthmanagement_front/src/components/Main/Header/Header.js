/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
<<<<<<< HEAD
import { BiUser } from "react-icons/bi";
import Sidebar from "../../SideBar/SideBar";
import Search from "../../Search/Search";

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
=======
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
>>>>>>> main
`;

const mainLogo = css`
  height: 100%;
`;

const headerIcon = css`
<<<<<<< HEAD
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
=======
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    cursor: pointer;
>>>>>>> main
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
<<<<<<< HEAD
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
          <img css={mainLogo} src="image/gymLogo.png" alt="" />
          {search ? (
            <Search
              refresh={refresh}
              setRefresh={setRefresh}
              gyms={gyms}
              setGyms={setGyms}
            />
          ) : (
            <div></div>
          )}
        </div>
      </header>
      <Sidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
    </>
  );
=======
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
>>>>>>> main
};

export default Header;
