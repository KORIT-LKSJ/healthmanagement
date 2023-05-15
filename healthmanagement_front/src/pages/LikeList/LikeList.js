import axios from 'axios';
import React from 'react';
import { QueryClient, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const LikeList = () => {
    const {userId} = useParams();
    console.log(userId)

    const likeGyms = useQuery(["likeGyms"], async() => {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        return await axios.get(`http://localhost:8080/gym/${userId}/like/list`, option);
    });

    if(likeGyms.isLoading){
        return <div>로딩중...</div>
    }
 
    return (
        <div>
            {likeGyms.data.data.map(likeGym => {
                return (
                    <tr key={likeGym.gymId}>
                            <td>{likeGym.gymName}</td>
                    </tr>
                )
            })}
        </div>
    );
};

export default LikeList;