import React, { useState } from 'react'
import Chart from 'react-apexcharts'


function AChart() {

  const options = {
    chart: {
      id: "area-chart"
    },
    xaxis: {
      categories: [2019, 2020, 2021, 2022, 2023, 2024, 2025]
    }
  };

  const series = [
    {
      name: "stock prices",
      data: [30, 20, 120, 50, 10, 60, 80]
    }
  ];

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="area"
        width="100%"
        height="220%"
      />
    </div>
  )
}

export default AChart