/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AiOutlineArrowLeft } from "react-icons/ai"
import FacilityDetaill from "./FacilityDetaill";
import { useState } from "react";
import { async } from "q";
import axios from "axios";

const container = css`
    border: 1px solid #dbdbdb;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 750px;
    height: 100%;
    overflow-y: scroll;
    background-color: white;
`;

const header = css`
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 22px 30px 0px;
    width: 750px;
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
    color: rgb(88, 89, 91);
    font-weight: bold;
    font-size: 17px;
    line-height: 24px;
`;

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

const inputTitle = css`
    margin: 10px 0px 0px;
    width: 100%;
    height: 22px;
    font-weight: normal;
    font-size: 15px;
    color: rgb(150, 152, 156);
`;

const imgInputContainer = css`
    border: 1px solid rgb(227, 228, 229);
    border-radius: 10px;
    display: flex;
    width: 100%;
    height: 100px;
    flex-flow: column;
`;



const footer = css`
    display:  flex;
    justify-content: center;
    align-content: center;
    margin-top:60px;
    width: 100%;
`;
const registButton = css`

`;



const FacilityReq = () => {
    
    const [ registerGym, setRegistserGym ] = useState({gymName : "", gymAddress : "", gymTel : "", businessnNumber : "", gymPrice : "", gymImgUrl : ""})

    const inputs = ["input1", "input2", "input3"]
    const handleClick = () => {
        window.location.href = "http://localhost:3000/MyPage"; 
      };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setRegistserGym({...registerGym, [name]: value});
    }

    const onkeyHandPress = (e) => {
        if(e.keyCode === 13){
            registerHandleSubmit()
        }
    }

    const nextInput = (currentInput) => {
        nextInput = inputs[0]
        const currentIndex = inputs.indexOf(currentInput);
        const nextInput = inputs[currentIndex + 1];
        if(nextInput) {
            document.getElementsByName(nextInput)[0].focus();
        }
    }

    const registerHandleSubmit = async () => {
        const option = {
            headers:{
                "Content-Type" : "application/json"
            }
        }
        const response = await axios.post("http://localhost:8080/faclilty", JSON.stringify({...registerGym}), option);
        
        return response;
    }
    
    console.log(registerGym)
    return (
        <div css={container}>
            <header css={header}>
                <button css={out} onClick={handleClick}><AiOutlineArrowLeft/></button>
                <h1 css={title}>시설등록요청</h1>
            </header>
                <div css={sign}>
                    <div css={sentence}>
                        파트너가 되고 싶은 사장님이신가요?!
                        <br/>
                        <br/>
                        매출부터 운영까지, 다짐이 함께 고민합니다. 지금 다짐의 파트너센터가 되어보세요
                    </div>
                </div>
            <main css={mainContainer}> 
                <label css={inputTitle}>운동시설 이름</label>
                <FacilityDetaill type="name" placeholder="운동시설 이름" onChange={handleChange}  name="gymName" onKeyDown={(e) => { if (e.keyCode===13) nextInput("gymName") }}>
                </FacilityDetaill>

                <label css={inputTitle}>주소</label>
                <FacilityDetaill type="text" placeholder="-동 까지 입력" onChange={handleChange} name="gymAddress" onKeyDown={(e) => { if (e.keyCode===13) nextInput("gymName") }}>
                </FacilityDetaill>

                <label css={inputTitle}>전화번호</label>
                <FacilityDetaill type="text" placeholder="-까지 입력해주세요" onChange={handleChange} name="gymTel" onKeyDown={(e) => { if (e.keyCode===13) nextInput("gymName") }}>
                </FacilityDetaill>

                <label css={inputTitle}>사업자등록번호 </label>
                <FacilityDetaill type="text" placeholder="-까지 입력해주세요" onChange={handleChange} name="businessNumber" onKeyDown={(e) => { if (e.keyCode===13) nextInput("gymName") }}>
                </FacilityDetaill>

                <label css={inputTitle}>가격</label>
                <FacilityDetaill type="text" placeholder="가격입력" onChange={handleChange} name="gymPrice" onKeyDown={(e) => { if (e.keyCode===13) nextInput("gymName") }}>
                </FacilityDetaill>

                <label css={inputTitle}>이미지</label>
                <div css={imgInputContainer}>
                <input type="file" accept="image/*" name="gymImgUrl"  multiple />
                </div>
                <div css={footer}>
                    <button css={registButton} onClick={registerHandleSubmit}>등록하기</button>
                </div>
            </main>
            
        </div>
    );
};

export default FacilityReq;