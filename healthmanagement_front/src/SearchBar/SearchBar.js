/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
const searchBar = (isOpen2) => css`

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 160px;
    left: ${isOpen2 ? `750px` : `1400px`};
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 400px;
    height: 100px;
    box-shadow: -1px 0px 5px #dbdbdb;
    transition: left 1s ease;
    background-color: white;

    ${isOpen2 ? "" : `
        cursor: pointer;
    `}
`;

const searchInput = css`
    border: 2px solid #dbdbdb;
    border-radius: 7px;
    padding: 5px;
    width: 300px;
    height: 50px;
`

const searchIcon = css`
    font-size: 30px;
`

const SearchBar = ({isOpen2, searchInputHandle, searchSubmitHandle}) => {

    return (
        <div css={searchBar(isOpen2)}>
           <input css={searchInput} type="search" onKeyUp={searchSubmitHandle} onChange={searchInputHandle}/> <BiSearch css={searchIcon}/>
        </div>
    );
};

export default SearchBar;