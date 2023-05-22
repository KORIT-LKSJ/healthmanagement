/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
<<<<<<< HEAD
import React from "react";
import { BiSearch } from "react-icons/bi";
const searchBar = (isSearchBarOpen) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 160px;
    left: ${isSearchBarOpen ? `1400px` : `750px`};
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 400px;
    height: 100px;
    box-shadow: -1px 0px 5px #dbdbdb;
    transition: left 1s ease;
    background-color: white;

    ${isSearchBarOpen
        ? ""
        : `
        cursor: pointer;
    `}
`;

const searchInput = css`
    border: 2px solid #dbdbdb;
    border-radius: 7px;
    padding: 5px;
    width: 300px;
    height: 50px;
`;

const searchIcon = css`
    font-size: 30px;
`;

const SearchBar = ({ isSearchBarOpen, searchInputHandle, searchSubmitHandle }) => {
=======
import axios from "axios";
import QueryString from "qs";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
<<<<<<<< HEAD:healthmanagement_front/src/components/Search/Search.js
import SearchBar from "../SearchBar/SearchBar";
========
import { useQuery } from "react-query";
>>>>>>>> main:healthmanagement_front/src/components/SearchBar/SearchBar.js

const searchBar = (isSearchBarOpen) => css`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #dbdbdb;
    padding: 0.5% 1%;
    width: 40%;
    height: 100%;
    z-index: 1;
    transition: top 1s ease;
    top: ${isSearchBarOpen ? "100%" : "0%"};
    background-color: white;
    cursor: ${isSearchBarOpen ? "pointer" : ""};
`;

const searchInput = css`
    outline: none;
    border: 1px solid #dbdbdb;
    width: 90%;
    height: 100%;
`;

const searchIcon = css`
    font-size: 25px;
`;

const SearchBar = ({ isSearchBarOpen, gyms, setGyms, refresh, setRefresh }) => {
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

    if (searchGyms.isLoading) {
        return <></>;
    }

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

>>>>>>> main
    return (
        <div css={searchBar(isSearchBarOpen)}>
            <input css={searchInput} type="search" onKeyUp={searchSubmitHandle} onChange={searchInputHandle} />{" "}
            <BiSearch css={searchIcon} />
        </div>
    );
};

export default SearchBar;
