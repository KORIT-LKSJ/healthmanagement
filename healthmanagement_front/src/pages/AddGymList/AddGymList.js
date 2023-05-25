/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Footer from "../../components/Main/Footer/Footer";
import Header from "../../components/Main/Header/Header";

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
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 800px;
  height: 100px;

  & th,
  td {
    width: 150px;
    height: 30px;
    text-align: center;
    vertical-align: middle;

    border: 1px solid #dbdbdb;
  }
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
        <table css={addlistcontainer}>
          <tbody>
            <tr>
              <th> 이름 </th>
              <th> 주소</th>
              <th> 전화번호 </th>
              <th> 가격 </th>
            </tr>
            {addGyms.isLoading
              ? ""
              : addGyms.data.data.map((addGym) => {
                  return (
                    <tr>
                      <td>{addGym.gymName}</td>
                      <td>{addGym.gymAddress}</td>
                      <td>{addGym.gymTel}</td>
                      <td>{addGym.gymPrice}</td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
};

export default AddGymList;
