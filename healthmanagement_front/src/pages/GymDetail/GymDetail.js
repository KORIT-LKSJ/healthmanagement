/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
<<<<<<< HEAD
// import Sidebar from "../../Sidebar/Sidebar";

const Container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
=======
import Header from "../../components/Main/Header/Header";
import Footer from "../../components/Main/Footer/Footer";

const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
>>>>>>> main
`;

const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: white;
  position: fixed;
`;

const main = css`
<<<<<<< HEAD
  display: flex;
  flex-direction: column;
  width: 750px;
  height: 100%;
  padding-top: 20px;
  background-color: white;
=======
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 90%;
    background-color: white;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
>>>>>>> main
`;

const gymImg = css`
  width: 750px;
`;
const detailName = css`
  display: flex;
  flex-direction: column;
  height: 60px;
`;
const gymName = css`
  color: gray;
  font-size: 25px;
`;
const gymAddress = css`
  color: gray;
  font-size: 15p;
`;
const likeCount = css`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-color: white;
`;
const likeIcon = css`
  border: 1px solid white;
  background-color: white;
  font-size: 20px;
  cursor: pointer;
`;

const GymDetail = () => {
  const { gymId } = useParams();
  const queryClient = useQueryClient();

<<<<<<< HEAD
  const getGym = useQuery(["getGym"], async () => {
    const option = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };
    const response = await axios.get(
      `http://localhost:8080/gym/${gymId}`,
      option
=======
    const getGym = useQuery(["getGym"], async () => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        };
        const response = await axios.get(`http://localhost:8080/gym/${gymId}`, option);
        return response;
    });

    const getLikeCount = useQuery(["getLikeCount"], async () => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        };

        const response = await axios.get(`http://localhost:8080/gym/${gymId}/like`, option);
        return response;
    });

    const getLikeStatus = useQuery(["getLikeStatus"], async () => {
        const option = {
            params: {
                userId: queryClient.getQueryData("principal").data.userId,
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        };
        const response = await axios.get(`http://localhost:8080/gym/${gymId}/like/status`, option);
        return response;
    });

    const setLike = useMutation(
        async () => {
            const option = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            };
            return await axios.post(
                `http://localhost:8080/gym/${gymId}/like`,
                JSON.stringify({
                    userId: queryClient.getQueryData("principal").data.userId,
                }),
                option
            );
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries("getLikeCount");
                queryClient.invalidateQueries("getLikeStatus");
            },
        }
>>>>>>> main
    );
    return response;
  });

  const getLikeCount = useQuery(["getLikeCount"], async () => {
    const option = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };

    const response = await axios.get(
      `http://localhost:8080/gym/${gymId}/like`,
      option
    );
    return response;
  });

  const getLikeStatus = useQuery(["getLikeStatus"], async () => {
    const option = {
      params: {
        userId: queryClient.getQueryData("principal").data.userId,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };
    const response = await axios.get(
      `http://localhost:8080/gym/${gymId}/like/status`,
      option
    );
    return response;
  });

  const setLike = useMutation(
    async () => {
      const option = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      };
      return await axios.post(
        `http://localhost:8080/gym/${gymId}/like`,
        JSON.stringify({
          userId: queryClient.getQueryData("principal").data.userId,
        }),
        option
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getLikeCount");
        queryClient.invalidateQueries("getLikeStatus");
      },
    }
  );

<<<<<<< HEAD
  const disLike = useMutation(
    async () => {
      const option = {
        params: {
          userId: queryClient.getQueryData("principal").data.userId,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      };
      return await axios.delete(
        `http://localhost:8080/gym/${gymId}/like`,
        option
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getLikeCount");
        queryClient.invalidateQueries("getLikeStatus");
      },
    }
  );

  if (getGym.isLoading) {
    return <div>불러오는 중...</div>;
  }

  if (!getGym.isLoading)
    return (
      <div css={Container}>
        <header css={header}></header>
        <div>
          <img css={gymImg} src={getGym.data.data.gymImgUrl} />
        </div>
        <main css={main}>
          <div css={detailName}>
            <h1 css={gymName}>{getGym.data.data.gymName}</h1>
            <h1 css={gymAddress}>{getGym.data.data.gymAddress}</h1>
            <div css={likeCount}>
              {getLikeStatus.isLoading ? (
                ""
              ) : getLikeStatus.data.data === 0 ? (
                <button
                  css={likeIcon}
                  onClick={() => {
                    setLike.mutate();
                  }}
                >
                  ♡
                </button>
              ) : (
                <button
                  css={likeIcon}
                  onClick={() => {
                    disLike.mutate();
                  }}
                >
                  ♥
                </button>
              )}
              {getLikeCount.isLoading ? "조회중..." : getLikeCount.data.data}
=======
    if (!getGym.isLoading)
        return (
            <div css={container}>
                <Header search={false} />
                <main css={main}>
                    <div>
                        <img css={gymImg} src={getGym.data.data.gymImgUrl} />
                    </div>
                    <div css={detailName}>
                        <h1 css={gymName}>{getGym.data.data.gymName}</h1>
                        <h1 css={gymAddress}>{getGym.data.data.gymAddress}</h1>
                        <div css={likeCount}>
                            {getLikeStatus.isLoading ? (
                                ""
                            ) : getLikeStatus.data.data === 0 ? (
                                <button
                                    css={likeIcon}
                                    onClick={() => {
                                        setLike.mutate();
                                    }}
                                >
                                    ♡
                                </button>
                            ) : (
                                <button
                                    css={likeIcon}
                                    onClick={() => {
                                        disLike.mutate();
                                    }}
                                >
                                    ♥
                                </button>
                            )}
                            {getLikeCount.isLoading ? "조회중..." : getLikeCount.data.data}
                        </div>
                    </div>
                </main>
                <Footer />
>>>>>>> main
            </div>
          </div>
        </main>
        <footer></footer>
      </div>
    );
};

export default GymDetail;
