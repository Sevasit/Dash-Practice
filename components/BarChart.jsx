import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Sales",
          data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
          borderColor: "rgb(0,0,0)",
          backgroundColor: "rgb(219,39,119)",
        },
      ],
    });

    setChartOptions({
      plugin: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily sales",
        },
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  }, []);

  return (
    <div className="w-full md:col-span-2 relative lg:h-[78vh] h-[58vh] m-auto p-4 border rounded-lg bg-white">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
