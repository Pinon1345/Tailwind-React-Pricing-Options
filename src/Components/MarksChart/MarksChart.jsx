// import React from 'react';
import { use } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {

    const marksDataRes = use(marksPromise)

    const marksData = marksDataRes.data

    // Data processing for the Chart

    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.physics,
            chemistry: studentData.chemistry,
            math: studentData.math

        }

        const average = (student.physics + student.chemistry + student.math) / 3;
        student.average = average;

        return student;
    })

    console.log(marksChartData);



    return (
        <div>
            <BarChart width={1200} height={500} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>

                <Bar dataKey={"average"} fill='red'></Bar>
                <Bar dataKey={"physics"} fill='blue'></Bar>
                <Bar dataKey={"chemistry"} fill='green'></Bar>
                <Bar dataKey={"math"} fill='yellow'></Bar>
                <Bar dataKey={"biology"} fill='purple'></Bar>

            </BarChart>

        </div>
    );
};

export default MarksChart;