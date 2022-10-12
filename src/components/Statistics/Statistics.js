import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const quizzes = useLoaderData().data;
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    

    return (
        <div>
            <div className='page-header'>
                <h2>Quiz Statistics</h2>
                <p>Number of quizzes per topics</p>
            </div>
            <div className='statisticalChart'>
                <PieChart width={400} height={400}>
                    <Pie dataKey="total" data={quizzes} fill="#8884d8" label>
                    {quizzes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
};

export default Statistics;