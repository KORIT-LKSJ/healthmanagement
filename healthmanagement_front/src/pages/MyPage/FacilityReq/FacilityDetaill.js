/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';




const mainContainer = css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 18px;
    padding: 20px 10px 0px;
`;

const sign = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    margin: 30px 0px 0px;
    padding: 20px;
    width: 100%;
    height: auto;
    max-height: 86px;
    color:  rgb(88, 89, 91);
    background-color: rgb(250, 251, 252);
`;

const sentence = css`
    font-size: 15px;
    color: rgb(88, 89, 91);

`;
const main = css`
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    gap: 13px;
`;

const inputContainer = css`
    width: 100%;
    height: 48px;
    display: flex;
    flex-flow: column;
`;

const inputTitle = css`
    margin: 10px 0px 0px;
    width: 100%;
    height: 22px;
    font-weight: normal;
    font-size: 15px;
    color: rgb(150, 152, 156);
`;
const input = css`
    border: 1px solid rgb(227, 228, 229);
    border-radius: 10px;
    outline: none;
    line-height: 48px;
    letter-spacing: -0.2px;
    font-weight: normal;
    font-size: 15px;
    color: rgb(88, 89, 91);
`;


const imgInputContainer = css`
    border: 1px solid rgb(227, 228, 229);
    border-radius: 10px;
    display: flex;
    width: 100%;
    height: 100px;
    flex-flow: column;
`;

const FacilityDetaill = () => {
    return (
        <div>
            <div css={sign}>
                <div css={sentence}>
                    파트너가 되고 싶은 사장님이신가요?!
                    <br/>
                    <br/>
                    매출부터 운영까지, 다짐이 함께 고민합니다. 지금 다짐의 파트너센터가 되어보세요
                </div>
            </div>
            <div css={main}>
                <label css={inputTitle}>운동시설 이름</label>
                <div css={inputContainer}>
                        <input css={input} type="text" placeholder="시설명을 입력해 주세요"/>
                </div>
                <label css={inputTitle}>사업자등록번호</label>
                <div  css={inputContainer}>
                        <input css={input} type="text" placeholder="-없이 숫자만 입력해 주세요"/>
                </div>
                <label css={inputTitle}>사업자등록증상 대표자 이름</label>
                <div  css={inputContainer}>
                        <input css={input} type="text" placeholder="대표자 이름을 입력해 주세요"/>
                </div>
                <label css={inputTitle}>주소</label>
                <div  css={inputContainer}>
                        <input css={input} type="text" placeholder="-동까지 입력해 주세요"/>
                </div>
                <label css={inputTitle}>가격</label>
                <div  css={inputContainer}>
                        <input css={input} type="text" placeholder=""/>
                </div>
                <label css={inputTitle}>휴대폰번호</label>
                <div  css={inputContainer}>
                        <input css={input} type="text" placeholder="-포함해서 입력해 주세요"/>
                </div>
                <label css={inputTitle}>이미지</label>
                <div css={imgInputContainer}>
                <input type="file" accept="image/*"  multiple />
                </div>
            </div>
            
        </div>
    );
};

export default FacilityDetaill;