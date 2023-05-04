/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai"

const container = css`
    border: 1px solid #dbdbdb;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 750px;
    height: 100%;
    background-color: white;
    margin: 0 auto;
`;

const header = css`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 22px 30px 0px;
    width: 750px;
    height: 40px;
    font-size: 18px;
    font-weight: 600;
    background-color: white;
`;

 
const FacilityReq = () => {
    return (
        <div css={container}>
            <header css={header}>
                <h1><AiOutlineArrowLeft/></h1>
                <h1>시설등록요청</h1>
            </header>
            

        </div>
    );
};

export default FacilityReq;