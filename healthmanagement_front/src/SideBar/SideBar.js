/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import ListButton from './ListButton/ListButton';
import { BiUser, BiLike, BiLogOut} from 'react-icons/bi';
import { FaRegistered } from 'react-icons/fa';
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const sidebar = (isOpen) => css`
    position: absolute;
    display: flex;
    margin-top: 60px;
    left: ${isOpen ? `0px` : `-260px`};
    flex-direction: column;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 250px;
    height: 50%;
    box-shadow: -1px 0px 5px #dbdbdb;
    transition: left 1s ease;
    background-color: white;

    ${isOpen ? "" : `
        cursor: pointer;
    `}
`;

const header = css`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 10px;

`;

const userIcon =css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border-radius: 8px;
    width: 45px;
    height: 45px;
    background-color: #713fff;
    color: white;
    font-size: 30px;
    font-weight: 600;
`;

const userInfo = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const userName = css`
    font-size: 18px;
    font-weight: 600;
    padding: 5px ;
    padding-top: 0;
`;

const userEmail = css`
    font-size: 12px;
`;

const closeButton = css`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    padding-left: 0.3px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    font-size: 12px;
    cursor: pointer;
    &:active{
        background-color: #fafafa;
    }
`;

const main = css`
    display: flex;
    flex-direction:column;
    padding: 10px;
    height: 100%;
    border-bottom: 1px solid #dbdbdb;
`;

const footer = css`
    padding: 10px;
`;

const Sidebar = ({isOpen, setIsOpen}) => {

    const sidebarCloseClickHandle = () => {
        setIsOpen(false);
    }


    return (
        <div css={sidebar(isOpen)}>
            <header css={header}>
                <div css={userIcon}>
                    d
                </div>
                <div css={userInfo}>
                    <h1 css={userName}>김동민</h1>
                    <p css={userEmail}>1803kcal</p>
                    <p css={userEmail}>탄:250g 단:150g 지:60g</p>
                </div>
                <div css={closeButton} onClick = {sidebarCloseClickHandle} ><GrFormClose/></div>
            </header>
            <main css={main}>
                <ListButton title="내 정보 수정"> <BiUser/> </ListButton>
                <ListButton title="관심목록"> <BiLike/></ListButton>
                <ListButton title="우리 업체 등록"> <FaRegistered/></ListButton>
                {/* {roles.includes("ROLE_OWNER") ? (<ListButton title="우리 업체 등록"> <FaRegistered/></ListButton>) : ""} */}
            </main>
            <footer css={footer}>
                <ListButton title="Logout"> <BiLogOut/> </ListButton>
            </footer>
        </div>
    );
};

export default Sidebar;