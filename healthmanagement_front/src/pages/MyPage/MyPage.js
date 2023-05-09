/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const header = css`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: white;
`;

const main = css`
  display: flex;
  flex-direction: column;
  padding: 20px 22px 75px 22px;
  width: 750px;
  height: 100%;
  background-color: whitesmoke;
  overflow: hidden;
`;
const titleText = css`
  width: 100%;
  height: 70px;
  margin-top: 20px;
  padding-left: 10px;
  display: flex;
  font-style: italic;
  align-items: center;

  border-radius: 5px;

  font-size: 35px;
  font-weight: 600;
  color: #eea460;
  text-shadow: 2px 2px 2px #eea46050;
`;

const mypagecontainer = css`
  flex-direction: column;
  display: flex;
  border: none;
  padding-top: 20px;
`;

const user = css`
  display: flex;
  align-items: center;
`;
const userInfo = css`
  display: flex;
  border: 1px solid black;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: white;
`;

const username = css`
  display: flex;
  flex-direction: column;
  padding: 7px;
  align-items: center;
  font-size: 24px;
  font-style: italic;
  font-weight: 600;
  height: 30px;
`;

const imgbox = css`
  display: flex;
  right: 270px;
  bottom: 30px;
  border: 1px solid black;
  border: 3px solid gray;
  margin: 8px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
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

const select = css`
  display: flex;
  justify-content: center;
  border-style: double;
  height: 180px;
`;
const rating = css`
  display: flex;
  width: 33.3%;
  justify-content: center;
  border: 1px solid black;
  font-style: italic;
  font-weight: 600;
  font-size: 17px;
  background-color: white;
`;

const coupon = css`
  display: flex;
  width: 33.3%;
  justify-content: center;
  border: 1px solid black;
  font-style: italic;
  font-weight: 600;
  font-size: 17px;
  background-color: white;
`;

const point = css`
  display: flex;
  width: 33.3%;
  justify-content: center;
  border: 1px solid black;
  font-style: italic;
  font-weight: 600;
  font-size: 17px;
  background-color: white;
`;

const sideContainer = css`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  gap: 40px;
`;

const accountSetting = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  width: 100%;
  height: 100px;
  background-color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const accountTitle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const personalName = css`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  font-weight: 600;
`;

const userIcon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 27px;
  width: 150px;
`;

const bookMark = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  width: 100%;
  height: 100px;
  background-color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const bookMarkName = css`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  font-weight: 600;
`;

const bookTitle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const bookMarkIcon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  font-size: 27px;
`;

const qAndA = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  width: 100%;
  height: 100px;
  background-color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const qAndATitle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const qAndAName = css`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  font-weight: 600;
`;

const qAndAIcon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  font-size: 27px;
`;

const nowButton = css`
  display: flex;
  width: 100px;
  justify-content: space-between;
  font-size: 30px;
`;

const footer = css`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: white;
`;

const MyPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const modifyClickHandle = () => {
    navigate("/modify");
  };

  const bookMarkClickHandle = () => {
    navigate("/bookmark");
  };

  const qAndAClickHandle = () => {
    navigate("/qAnda");
  };

  //유저이미지 들고오는 로직 구현중
  const [selectedFile, setSelectedFile] = useState(
    localStorage.getItem("profileimage") || "./images/noimage.jpg"
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedFile(reader.result);
      localStorage.setItem("profileimage", reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  //유저 이름 들고오는 로직 구현중
  const principalData = queryClient.getQueryData("principal").data;
  const roles = principalData.authorities.split(",");

  console.log(principalData);
  const username = useQuery(["getusername"], async () => {
    const option = {
      params: {
        userId: queryClient.getQueryData("principal").data.userId,
      },
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    };
    const response = await axios.get(``, option);
    return response;
  });

  return (
    <div css={container}>
      <header css={header}></header>
      <main css={main}>
        <h1 css={titleText}>MyPage</h1>
        <div css={mypagecontainer}>
          <div css={userInfo}>
            <div css={user}>
              <div css={imgbox}>
                <label htmlFor="profile-image"></label>
                <img
                  css={img}
                  src={selectedFile}
                  alt=""
                  onLoad={() => console.log("image loaded")}
                />
                <label>
                  <input
                    type="file"
                    id="profile-image"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  ></input>
                </label>
              </div>
              <h2 css={username}>
                UserName:{queryClient.getQueryData("principal").data.name}
              </h2>
            </div>
          </div>
          <div css={select}>
            <div css={rating}>Rating</div>
            <div css={coupon}>Coupon</div>
            <div css={point}>Point</div>
          </div>
          <div css={sideContainer}>
            <div css={accountSetting} onClick={modifyClickHandle}>
              <div css={accountTitle}>
                <BiUserCircle css={userIcon} />
                <div css={personalName}>Modify</div>
              </div>
              <AiOutlineDoubleRight css={nowButton} />
            </div>
            <div css={bookMark} onClick={bookMarkClickHandle}>
              <div css={bookTitle}>
                <FaRegStar css={bookMarkIcon} />
                <div css={bookMarkName}>BookMark</div>
              </div>
              <AiOutlineDoubleRight css={nowButton} />
            </div>

            <div css={qAndA} onClick={qAndAClickHandle}>
              <div css={qAndATitle}>
                <AiFillQuestionCircle css={qAndAIcon} />
                <div css={qAndAName}>Q&A</div>
              </div>
              <AiOutlineDoubleRight css={nowButton} />
            </div>
          </div>
        </div>
      </main>
      <footer css={footer}></footer>
    </div>
  );
};

export default MyPage;
