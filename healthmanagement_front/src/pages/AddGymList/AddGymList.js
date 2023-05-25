/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Header from "../../components/Main/Header/Header";
import Footer from "../../components/Main/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;

const mainContainer = css`
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

const addlistcontainer = css`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background-color: white;
  width: 100px;
  height: 100px;
`;

const titlebox = css`
  display: flex;
  flex-direction: column;
  border-style: double;
  border: 1px solid black;
`;

const companyName = css`
  display: flex;
  width: 33.3%;
  justify-content: center;
  border: black;
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
`;

const thAndTd = css`
  border: 1px solid #dbdbdb;
  padding: 5px 10px;
  text-align: center;
`;

const AddGymList = () => {
  const navigate = useNavigate();

  const principal = useQuery(["principal"], async () => {
    const option = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };
    const response = await axios.get(
      "http://localhost:8080/account/principal",
      option
    );
    return response;
  });

  const addGyms = useQuery(
    ["addGyms"],
    async () => {
      const option = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      };

      return await axios.get(
        `http://localhost:8080/addgymlist/${principal.data.data.userId}`,
        option
      );
    },
    {
      enabled: !!principal.data,
    }
  );

  if (principal.isLoading) {
    return <div>로딩중...</div>;
  }

  console.log(addGyms);

  return (
    <div css={container}>
      <Header search={false} />
      <main css={mainContainer}>
        <tobody css={addlistcontainer}>
          {addGyms.isLoading
            ? ""
            : addGyms.data.data.map((addGym) => {
                return (
                  <tr key={addGym.gymId}>
                   
                      <h2 css={companyName}> 이름 </h2>
                      <h2> 주소</h2>
                      <h2> 전화번호 </h2>
                      <h2> 가격 </h2>
                    
                    <div css={thAndTd}>
                      <div
                        css={thAndTdTitle}
                        onClick={() => {
                          navigate("/gym/" + addGym.gymId);
                        }}
                      >
                        {addGym.gymName}
                      </div>
                    </div>

                    <h2 css={thAndTd}>{addGym.gymAddress}</h2>
                    <h2 css={thAndTd}>{addGym.gymTel}</h2>
                    <h2 css={thAndTd}>{addGym.gymPrice}￦</h2>
                  </tr>
                );
              })}
        </tobody>
      </main>
      <Footer />
    </div>
  );
};

export default AddGymList;
