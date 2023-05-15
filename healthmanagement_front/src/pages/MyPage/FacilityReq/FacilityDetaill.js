
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';



const input = css`
    border: 1px solid rgb(227, 228, 229);
    border-radius: 10px;
    outline: none;
    line-height: 48px;
    letter-spacing: -0.2px;
    width: 100%;
    font-weight: normal;
    font-size: 15px;
    color: rgb(88, 89, 91);
`;


const FacilityDetaill = ({ type, placeholder, onChange, name }) => {
    return (
        <div>
            <input css={input} 
            type={type} 
            placeholder={placeholder} 
            onChange={onChange}
            name={name}/>
        </div>
    );
};

export default FacilityDetaill;