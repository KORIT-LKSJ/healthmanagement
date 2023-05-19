/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const postmodal = css`
    display: flex;
    border: 1px solid #dbdbdb;
    width: 100%;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const Post = (props) => {
    const complete = (data) => {
        let fullAddress = data.jibunAddress == "" ? data.autoJibunAddress : data.jibunAddress;

        let extraAddress = "";

        // if (data.addressType === 'R') {
        //     if (data.bname !== '') {
        //         extraAddress += data.bname;
        //     }
        //     if (data.buildingName !== '') {
        //         extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
        //     }
        //     fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        // }
        console.log(data);
        console.log(fullAddress);
        console.log(data.zonecode);

        props.setcompany({
            ...props.company,
            gymAddress: fullAddress,
        });
    };

    return (
        <div css={postmodal}>
            <DaumPostcode className="postmodal" autoClose onComplete={complete} />
        </div>
    );
};

export default Post;
