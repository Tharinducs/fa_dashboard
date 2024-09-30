import React, { useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { get } from 'lodash';
import { Chartwrapper,ChartWrapperInternal,ChartOuter } from './dashboardStyle';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ tasks = [] }) => {

    const calculateDataSet = () => {
        const completedTask = tasks.filter((item) => get(item, "status", 0)).length;
        const total = tasks.length;
        const remainingTask = total - completedTask;
        const completedPrecentage = (completedTask / total) * 100;
        const remainingTaskPrecentage = (remainingTask / total) * 100
        return [completedPrecentage, remainingTaskPrecentage]
    }

    const getPrecentages = useMemo(
        () => calculateDataSet(),
        [tasks]
    );

    const data = {
        labels: ['Completed Tasks', 'Remaining Tasks'],
        datasets: [
            {
                data: getPrecentages,
                backgroundColor: ['#5285EC', '#E8ECEC'],
                borderWidth: 3,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: { enabled: false },
        },
    };

    return (
        <Chartwrapper>
            <ChartWrapperInternal>
                <ChartOuter>
                    <Pie data={data} options={options} />
                </ChartOuter>
            </ChartWrapperInternal>
        </Chartwrapper>
    );
}

export default Chart;