/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { BiSearch } from "react-icons/bi";
const searchBar = (isSearchBarOpen) => css`
    position: absolute;
    display: ${isSearchBarOpen ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    top: 100%;
    left: 55%;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 15%;
    height: 80px;
    box-shadow: -1px 0px 5px #dbdbdb;
    transition: opacity, display 1s ease;
    background-color: white;
    cursor: ${isSearchBarOpen ? "pointer" : ""};
`;

const searchInput = css`
    border: 2px solid #dbdbdb;
    border-radius: 7px;
    margin: 0 5px;
    width: 80%;
    height: 50px;
`;

const searchIcon = css`
    font-size: 30px;
`;

const SearchBar = ({ isSearchBarOpen, searchInputHandle, searchSubmitHandle }) => {
    return (
        <div css={searchBar(isSearchBarOpen)}>
            <input css={searchInput} type="search" onKeyUp={searchSubmitHandle} onChange={searchInputHandle} />{" "}
            <BiSearch css={searchIcon} />
        </div>
    );
};

export default SearchBar;
