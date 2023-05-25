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
`;

const thAndTd = css`
  border: 1px solid #dbdbdb;
  padding: 5px 10px;
  text-align: center;
`;

const AddGymList = () => {
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

  const userId = principal.data.data.userId;

  console.log(userId);
  const navigate = useNavigate();

  const addGyms = useQuery(["AddGyms"], async () => {
    const option = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };
    return await axios.get(
      `http://localhost:8080/addgymlist/${userId}`,
      option
    );
  });

  if (addGyms.isLoading) {
    return <div>로딩중...</div>;
  }
  console.log(addGyms);

  return (
    <div css={container}>
      <Header search={false} />
      <main css={mainContainer}>
        <div css={addlistcontainer}>
          {addGyms.data.data.map((addGym) => {
            return (
              <tr key={addGym.gymId}>
                <td css={thAndTd}>
                  <div
                    css={thAndTdTitle}
                    onClick={() => {
                      navigate("/gym/" + addGym.gymId);
                    }}
                  >
                    {addGym.gymName}
                  </div>
                </td>
                <td css={thAndTd}>{addGym.gymAddress}</td>
                <td css={thAndTd}>{addGym.gymTel}</td>
                <td css={thAndTd}>{addGym.gymPrice}￦</td>
              </tr>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AddGymList;
