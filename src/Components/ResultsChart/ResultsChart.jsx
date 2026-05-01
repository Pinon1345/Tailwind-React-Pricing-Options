// import React from 'react';

import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData =
    [
        {
            "id": 1,
            "name": "Student 1",
            "physics": 78,
            "chemistry": 72,
            "biology": 80,
            "math": 85
        },
        {
            "id": 2,
            "name": "Student 2",
            "physics": 88,
            "chemistry": 84,
            "biology": 79,
            "math": 90
        },
        {
            "id": 3,
            "name": "Student 3",
            "physics": 65,
            "chemistry": 70,
            "biology": 68,
            "math": 72
        },
        {
            "id": 4,
            "name": "Student 4",
            "physics": 92,
            "chemistry": 89,
            "biology": 91,
            "math": 95
        },
        {
            "id": 5,
            "name": "Student 5",
            "physics": 74,
            "chemistry": 76,
            "biology": 73,
            "math": 78
        },
        {
            "id": 6,
            "name": "Student 6",
            "physics": 81,
            "chemistry": 79,
            "biology": 85,
            "math": 83
        },
        {
            "id": 7,
            "name": "Student 7",
            "physics": 58,
            "chemistry": 62,
            "biology": 60,
            "math": 65
        },
        {
            "id": 8,
            "name": "Student 8",
            "physics": 86,
            "chemistry": 88,
            "biology": 84,
            "math": 89
        },
        {
            "id": 9,
            "name": "Student 9",
            "physics": 69,
            "chemistry": 71,
            "biology": 75,
            "math": 73
        },
        {
            "id": 10,
            "name": "Student 10",
            "physics": 95,
            "chemistry": 93,
            "biology": 94,
            "math": 97
        }
    ]

const ResultsChart = () => {
    return (
        <div className="pt-8 mb-4">

            <LineChart width={800} height={400} data={resultData}>

                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>

                <Line dataKey={"math"} stroke="red"></Line>
                <Line dataKey={"physics"} stroke="green"></Line>
                <Line dataKey={"chemistry"} stroke="blue"></Line>
                <Line dataKey={"biology"} stroke="purple"></Line>

            </LineChart>

        </div>
    );
};

export default ResultsChart;