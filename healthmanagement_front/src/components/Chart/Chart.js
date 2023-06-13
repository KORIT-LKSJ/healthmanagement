/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { LabelList, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const tooltip = css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 5px;
    width: 150px;
    height: 60px;
`;

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div css={tooltip}>
                <p>{`Date: ${label}`}</p>
                <p>{`Count: ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};

const Chart = ({ data, color }) => {
    return (
        <LineChart width={1200} height={350} data={data}>
            <XAxis dataKey="date" tick={{ fill: "#000", textAnchor: "middle" }} padding={{ left: 40, right: 40 }} />
            <YAxis domain={[0, "dataMax+1"]} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="linear" dataKey="value" stroke={color}>
                <LabelList dataKey="value" position="top" offset={10} />
            </Line>
        </LineChart>
    );
};

export default Chart;
