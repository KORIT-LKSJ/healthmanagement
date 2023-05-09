/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AiOutlineArrowLeft } from "react-icons/ai"
import FacilityDetaill from "./FacilityDetaill";

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
const footer = css`
    display:  flex;
    justify-content: center;
    align-content: center;
    margin-top:60px;
    width: 100%;
`;
const registButton = css`
    position: relative;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    padding: 15px 0px;
    margin: auto 0px 20px;
    bottom: 0px;
    width: 100%;
    line-height: 22px;
    letter-spacing: -0.2px;
    font-weight: 600;
    font-size: 15px;
    transition: all 0.3s ease 0s;
    color: rgb(255, 255, 255);
    background: rgb(179, 188, 255);
`;



const FacilityReq = () => {

    const handleClick = () => {
        window.location.href = "http://localhost:3000/MyPage"; 
      };
  

    return (
        <div css={container}>
            <header css={header}>
                <button css={out} onClick={handleClick}><AiOutlineArrowLeft/></button>
                <h1 css={title}>시설등록요청</h1>
            </header>
            <main css={mainContainer}> 
                <FacilityDetaill/>
            </main>
            <footer css={footer}>
                <button css={registButton}>등록하기</button>
            </footer>
            
        </div>
    );
};

export default FacilityReq;