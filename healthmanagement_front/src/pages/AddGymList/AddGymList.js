/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;

const table = css``;
const thAndTd = css``;

const AddGymList = () => {
  return (
    <div css={container}>
      <table css={table}>
        <thead></thead>
        <tbody>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AddGymList;
