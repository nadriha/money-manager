import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register components
Chart.register(ArcElement, Tooltip, Legend);

export const PieChart = ({chartData}) => {
  return (
    <Pie data={chartData}/>
  )
}
