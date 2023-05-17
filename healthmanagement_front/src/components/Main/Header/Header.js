/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { BiSearch, BiUser } from "react-icons/bi";
import SearchBar from "../../../SearchBar/SearchBar";
import { useQuery } from "react-query";
import axios from "axios";
import QueryString from "qs";
import Sidebar from "../../../SideBar/SideBar";

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

const Header = ({ gyms, setGyms, refresh, setRefresh }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState();
    const [isSearchBarOpen, setIsSearchBarOpen] = useState();
    const [searchParam, setSearchParam] = useState({ page: 1, searchValue: "" });
    const [lastPage, setLastPage] = useState(1);

    const searchGyms = useQuery(
        ["searchGyms"],
        async () => {
            const option = {
                params: searchParam,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                paramsSerializer: (params) => QueryString.stringify(params, { arrayFormat: "repeat" }),
            };
            const response = await axios.get("http://localhost:8080/gyms", option);
            return response;
        },
        {
            onSuccess: (response) => {
                if (refresh) {
                    setRefresh(false);
                }
                console.log(response);
                const totalCount = response.data.totalCount;
                console.log(totalCount);

                setLastPage(totalCount % 20 === 0 ? totalCount / 20 : Math.ceil(totalCount / 20));
                setGyms([...gyms, ...response.data.gymList]);
                setSearchParam({ ...searchParam, page: searchParam.page + 1 });
            },
            enabled: refresh && (searchParam.page < lastPage + 1 || lastPage === 0),
        }
    );

    const sideBarClickHandle = () => {
        if (!isSideBarOpen) {
            setIsSideBarOpen(true);
        }
    };

    const searchBarClickHandle = () => {
        if (!isSearchBarOpen) {
            setIsSearchBarOpen(true);
        } else {
            setIsSearchBarOpen(false);
        }
    };

    const searchInputHandle = (e) => {
        setSearchParam({ ...searchParam, page: 1, searchValue: e.target.value });
    };

    const searchSubmitHandle = (e) => {
        if (e.keyCode === 13) {
            setSearchParam({ ...searchParam, page: 1 });
            setGyms([]);
            setRefresh(true);
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
                    <div css={headerIcon} onClick={searchBarClickHandle}>
                        <BiSearch />
                    </div>
                </div>
                <SearchBar
                    isSearchBarOpen={isSearchBarOpen}
                    searchInputHandle={searchInputHandle}
                    searchSubmitHandle={searchSubmitHandle}
                />
            </header>
            <Sidebar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
        </>
    );
};

export default Header;
