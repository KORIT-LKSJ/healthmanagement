/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
import { async } from "q";
import axios from "axios";
import DaumPostcode from "react-daum-postcode";
import { useDaumPostcodePopup } from "react-daum-postcode";
import Post from "./Post";
import Header from "../../../components/Main/Header/Header";
import Footer from "../../../components/Main/Footer/Footer";
import { useMutation } from "react-query";

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
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const mainTitleContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 22px 30px 0px;
    width: 100%;
    height: 55px;
    background-color: white;
`;
const out = css`
    border: none;
    font-weight: 600;
    font-size: 17px;
    background-color: white;
    cursor: pointer;
`;

const title = css`
    right: 13px;
    position: relative;
    margin: 0px auto;
    color: #58595b;
    font-weight: bold;
    font-size: 17px;
    line-height: 24px;
`;

const mainContent = css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1.5%;
    align-items: center;
    width: 100%;
    height: 80%;
    gap: 18px;
`;

const sign = css`
    display: flex;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    padding: 15px;
    width: 100%;
    height: 15%;
    gap: 10px;
    font-size: 15px;
    color: #58595b;
    background-color: #eda058;
`;

const inputBox = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
`;

const inputTitle = css`
    padding-left: 5px;
    width: 100%;
    font-weight: normal;
    font-size: 15px;
    color: #96989c;
`;

const input = css`
    padding: 8px;
    border: 1px solid #e3e4e5;
    outline: none;
    letter-spacing: -0.2px;
    width: 100%;
    font-weight: normal;
    font-size: 15px;
    color: #58595b;
`;

const addressInput = css`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
`;

const addressButton = css`
    border: 1px solid #e3e4e5;
    width: 15%;
    background-color: #eda058;
    cursor: pointer;
`;

const imgInput = css`
    outline: none;
    letter-spacing: -0.2px;
    width: 100%;
    font-weight: normal;
    font-size: 15px;
    color: #58595b;
`;

const gymRegiste = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2% 2%;
    width: 100%;
    height: 100%;
`;

const registeButton = css`
    padding: 10px 0;
    border: 1px solid #dbdbdb;
    width: 100%;
    font-size: 15px;
    font-weight: 600;
    background-color: #eda058;
    cursor: pointer;
`;

const FacilityReq = () => {
    const [registerGym, setRegistserGym] = useState({
        gymName: "",
        gymTel: "",
        businessnNumber: "",
        gymPrice: "",
        registDate: "",
    });
    const [enroll_company, setEnroll_company] = useState({
        gymAddress: "",
    });
    const [popup, setPopup] = useState(false);

    const registerHandleSubmit = useMutation(async () => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json",
            },
        };
        const response = await axios.post(
            "http://localhost:8080/faclilty",
            JSON.stringify({ ...registerGym, ...enroll_company }),
            option
        );

        return response;
    });

    const handleClick = () => {
        window.location.href = "http://localhost:3000/MyPage";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegistserGym({ ...registerGym, [name]: value });
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setEnroll_company({ ...enroll_company, [name]: value });
    };

    const handleComplete = () => {
        setPopup(!popup);
    };
    // const inputs = ["input1", "input2", "input3"];

    // const nextInput = (currentInput) => {
    //     nextInput = inputs[0];
    //     const currentIndex = inputs.indexOf(currentInput);
    //     const nextInput = inputs[currentIndex + 1];
    //     if (nextInput) {
    //         document.getElementsByName(nextInput)[0].focus();
    //     }
    // };

    return (
        <div css={container}>
            <Header search={false} />
            <main css={main}>
                <div css={mainTitleContainer}>
                    <button css={out} onClick={handleClick}>
                        <AiOutlineArrowLeft />
                    </button>
                    <h1 css={title}>시설등록요청</h1>
                </div>
                <div css={mainContent}>
                    <div css={sign}>
                        <h3>파트너가 되고 싶은 사장님이신가요?!</h3>
                        <h3>매출부터 운영까지, 모두의짐이 함께 고민합니다. 지금 모두의짐의 파트너센터가 되어보세요</h3>
                    </div>
                    <div css={inputBox}>
                        <label css={inputTitle}>운동시설 이름</label>
                        <input
                            css={input}
                            type="name"
                            placeholder="운동시설 이름"
                            onChange={handleChange}
                            name="gymName"
                        />
                    </div>
                    <div css={inputBox}>
                        <label css={inputTitle}>주소</label>
                        <div css={addressInput}>
                            <input
                                css={input}
                                type="text"
                                placeholder="주소를 검색해주세요"
                                onChange={handleInput}
                                name="gymAddress"
                                value={enroll_company.gymAddress}
                                disabled
                            />
                            <button css={addressButton} onClick={handleComplete}>
                                주소 찾기
                            </button>
                        </div>
                        {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
                    </div>
                    <div css={inputBox}>
                        <label css={inputTitle}>전화번호</label>
                        <input
                            css={input}
                            type="text"
                            placeholder="-까지 입력해주세요"
                            onChange={handleChange}
                            name="gymTel"
                        />
                    </div>
                    <div css={inputBox}>
                        <label css={inputTitle}>사업자등록번호 </label>
                        <input
                            css={input}
                            type="text"
                            placeholder="-까지 입력해주세요"
                            onChange={handleChange}
                            name="businessNumber"
                        />
                    </div>
                    <div css={inputBox}>
                        <label css={inputTitle}>가격</label>
                        <input css={input} type="text" placeholder="가격입력" onChange={handleChange} name="gymPrice" />
                    </div>
                    <div css={inputBox}>
                        <label css={inputTitle}>등록일</label>
                        <input
                            css={input}
                            type="text"
                            placeholder="오늘 날짜 입력"
                            onChange={handleChange}
                            name="registDate"
                        />
                    </div>
                    <div css={inputBox}>
                        <label css={inputTitle}>이미지</label>
                        <div css={imgInput}>
                            <input type="file" accept="image/*" />
                        </div>
                    </div>
                    <div css={gymRegiste}>
                        <button css={registeButton} onClick={() => registerHandleSubmit.mutate()}>
                            등록하기
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default FacilityReq;
