/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { TbPassword } from "react-icons/tb";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { IoPersonRemoveOutline } from "react-icons/io5";
import axios from "axios";
import Footer from "../../components/Main/Footer/Footer";
import Header from "../../components/Main/Header/Header";
import { useRecoilState } from "recoil";
import { authenticationState } from "../../store/atoms/AuthAtoms";

const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const main = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 90%;
    background-color: white;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const titleText = css`
    display: flex;
    align-items: center;
    padding-left: 3%;
    width: 100%;
    height: 10%;
    font-size: 35px;
    font-weight: 600;
    color: #eea460;
    text-shadow: 2px 2px 2px #eea46050;
`;

const mypagecontainer = css`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const userInfo = css`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 15%;
    background-color: white;
`;

const user = css`
    display: flex;
    align-items: center;
    padding: 0 3% 3%;
    width: 100%;
    gap: 10px;
`;

const imgbox = css`
    display: flex;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background-color: orange;
    overflow: hidden;
    cursor: pointer;
    &:hover {
        box-shadow: 1px 1px 25px #dbdbdb;
    }
`;

const img = css`
    overflow: hidden;
    &:hover {
        opacity: 0.8;
    }
`;

const usernameAndEmail = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const username = css`
    display: flex;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.2px;
    height: 25px;
`;

const email = css`
    display: flex;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.2px;
    height: 25px;
`;

const sideContainer = css`
    display: flex;
    flex-direction: column;
`;

const buttonArea = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3% 3%;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 50px;
    background-color: white;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;

const title = css`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Icon = css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
`;

const Name = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 16px;
    font-weight: 600;
`;

const nowButton = css`
    display: flex;
    font-size: 30px;
`;

const memberWd = css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    width: 100%;
    height: 100px;
    font-weight: 600;
    background-color: white;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
`;

const MyPage = () => {
    const navigate = useNavigate();
    const [authState, setAuthState] = useRecoilState(authenticationState);

    const principal = useQuery(["principal"], async () => {
        const response = await axios.get("http://localhost:8080/account/principal", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
        return response;
    });

    // 회원탈퇴
    const userDeletehandle = useMutation(
        async (userId) => {
            const option = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            };
            const response = await axios.delete(`http://localhost:8080/account/remove/user/${userId}`, option);
            console.log(response);
            return response;
        },
        {
            onSuccess: (response) => {
                console.log(response);
                if (response.status === 200) {
                    alert("회원탈퇴 완료");
                    localStorage.clear();
                    setAuthState(false);
                    navigate("/auth/login");
                }
            },
            onError: (error) => {
                alert("회원탈퇴 실패");
            },
        }
    );

    const modifyClickHandle = () => {
        navigate("/mypage/modifypage");
    };

    const bookMarkClickHandle = () => {
        navigate("/gym/" + principal.data.data.userId + "/like/list");
    };

    const passwordulHandle = () => {
        navigate("/mypage/passwordupdate");
    };

    const deleteClickHandle = () => {
        if (window.confirm("확인을 누르면 회원정보가 삭제됩니다")) {
            userDeletehandle.mutate(principal.data.data.userId);
        } else {
            return;
        }
    };

    if (!principal.isLoading)
        return (
            <div css={container}>
                <Header search={false} />
                <main css={main}>
                    <h1 css={titleText}>MyPage</h1>
                    <div css={mypagecontainer}>
                        <div css={userInfo}>
                            <div css={user}>
                                <div css={imgbox}>
                                    <label htmlFor="profile-image"></label>
                                    <img
                                        css={img}
                                        src="https://schoolshop-lab.jp/wp-content/uploads/2018/11/240ec862387d03003cb4c41cd93cb0be.png"
                                        alt=""
                                    />
                                </div>
                                <div css={usernameAndEmail}>
                                    <div css={username}>{principal.data.data.username}</div>
                                    <div css={email}>{principal.data.data.email}</div>
                                </div>
                            </div>
                        </div>
                        <div css={sideContainer}>
                            <div css={buttonArea} onClick={modifyClickHandle}>
                                <div css={title}>
                                    <BiUserCircle css={Icon} />
                                    <div css={Name}>정보 수정</div>
                                </div>
                                <AiOutlineDoubleRight css={nowButton} />
                            </div>
                            <div css={buttonArea} onClick={passwordulHandle}>
                                <div css={title}>
                                    <TbPassword css={Icon} />
                                    <div css={Name}>비밀번호 변경</div>
                                </div>
                                <AiOutlineDoubleRight css={nowButton} />
                            </div>
                            <div css={buttonArea} onClick={bookMarkClickHandle}>
                                <div css={title}>
                                    <FaRegStar css={Icon} />
                                    <div css={Name}>관심목록</div>
                                </div>
                                <AiOutlineDoubleRight css={nowButton} />
                            </div>
                            <div css={buttonArea} onClick={deleteClickHandle}>
                                <div css={title}>
                                    <IoPersonRemoveOutline css={Icon} />
                                    <div css={Name}>회원 탈퇴</div>
                                </div>
                                <AiOutlineDoubleRight css={nowButton} />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
};

export default MyPage;
