/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from 'axios';
import React from 'react';
import { QueryClient, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';


const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;

const table = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid white;
    background-color: white;
    width: 40%;
`;
const thAndTdTitle = css`
    cursor: pointer;
    &:hover {
        text-shadow: 0px 5px 10px #dbdbdb;
        color: #dbdbdb;
    }
    &:active {
        background-color: #fafafa;
    }
`

const thAndTd = css`
    border: 1px solid #dbdbdb;
    padding: 5px 10px;
    text-align: center;
`;

const LikeList = () => {
    const {userId} = useParams();
    console.log(userId)
    const navigate = useNavigate();

    const likeGyms = useQuery(["likeGyms"], async() => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        return await axios.get(`http://localhost:8080/gym/${userId}/like/list`, option);
    });

    if(likeGyms.isLoading){
        return <div>로딩중...</div>
    }

    const titleClickHandle = (e) =>{
        
    }

    return (
        <div css={container}>
        <table css={table}>
            <thead></thead>
            <tbody>
                <tr >
                    <th css={thAndTd}>헬스장 명</th>
                    <th css={thAndTd}>위치</th>
                    <th css={thAndTd}>전화번호</th>
                    <th css={thAndTd}>가격</th>
                </tr>
                {likeGyms.data.data.map(likeGym => {
                    return(<tr key={likeGym.gymId}>
                        <td css={thAndTd}><div css={thAndTdTitle} onClick={()=>{navigate("/gym/"+likeGym.gymId)}}>{likeGym.gymName}</div></td>
                        <td css={thAndTd}>{likeGym.gymAddress}</td>
                        <td css={thAndTd}>{likeGym.gymTel}</td>
                        <td css={thAndTd}>{likeGym.gymPrice}￦</td>
                    </tr>)
                })}
            </tbody>
    </table>
    </div>
    );
};

export default LikeList;