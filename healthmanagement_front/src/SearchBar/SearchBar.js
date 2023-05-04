/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
const searchBar = (isOpen) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 35px;
    left: ${isOpen ? `750px` : `750px`};
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 400px;
    height: 100px;
    box-shadow: -1px 0px 5px #dbdbdb;
    transition: left 1s ease;
    background-color: white;

    ${isOpen ? "" : `
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

const SearchBar = ({isOpen, setIsOpen}) => {
    return (
        <div css={searchBar}>
           <input css={searchInput} type="search"/> <BiSearch css={searchIcon}/>
        </div>
    );
};

export default SearchBar;