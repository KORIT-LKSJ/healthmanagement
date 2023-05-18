/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { TbPassword } from "react-icons/tb";
import { AiOutlineDoubleRight } from "react-icons/ai";
import axios from "axios";
import Footer from "../../components/Main/Footer/Footer";
import Header from "../../components/Main/Header/Header";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
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

const passwordul = css`
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

const passwordulTitle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const passwordulName = css`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  font-weight: 600;
`;

const passwordulIcon = css`
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

const MyPage = () => {
  const [selectedFile, setSelectedFile] = useState(
    localStorage.getItem("profileimage") || "./images/noimage.jpg"
  );
  const navigate = useNavigate();

  const principal = useQuery(["principal"], async () => {
    const response = await axios.get(
      "http://localhost:8080/account/principal",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response;
  });

  if (principal.isLoading) {
    return <div></div>;
  }

  const modifyClickHandle = () => {
    navigate("/mypage/modifypage");
  };

  const bookMarkClickHandle = () => {
    navigate("/likepage");
  };

  const passwordulHandle = () => {
    navigate("/mypage/passwordupdate");
  };

  //유저이미지를 파일에서 들고와서 변환하게 하는것 구현

  // const handleImageClick = () => {
  //   const input = document.getElementById("profile-image");
  //   input.click();
  // };
  // const handleFileSelect = (event) => {
  //   const reader = new FileReader();
  //   const file = event.target.files[0];
  //   reader.onloadend = function () {
  //     setSelectedFile(reader.result);
  //     localStorage.setItem("profileimage", reader.result);
  //   };
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  // 유저이미지를 특정이미지로 고정되도록 구현중
  const handleImageClick = () => {
    const imageUrl = "https://example.com/path/to/image.jpg";
    setSelectedFile(imageUrl);
    localStorage.setItem("profileimage", imageUrl);
  };
  const handleFileSelect = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = function () {
      setSelectedFile(reader.result);
      localStorage.setItem("profileimage", reader.result);
    };
    if (file) {
      reader.readeAsDataURL(file);
    }
  };

  //유저 이름 들고옴
  console.log(principal);
  const principalData = principal.data.data;

  const roles = principalData.authorities.split(",");

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
                  src="https://img.freepik.com/free-photo/adorable-domestic-kitty-with-copy-space_23-2149167112.jpg?size=626&ext=jpg"
                  alt=""
                  onClick={handleImageClick}
                  onLoad={() => console.log("image loaded")}
                />
                <label>
                  <input
                    type="file"
                    id="profile-image"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileSelect}
                  ></input>
                </label>
              </div>
              <h2 css={username}>UserName:{principalData.username}</h2>
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
            <div css={passwordul} onClick={passwordulHandle}>
              <div css={passwordulTitle}>
                <TbPassword css={passwordulIcon} />
                <div css={passwordulName}>PasswordFrom</div>
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
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MyPage;
