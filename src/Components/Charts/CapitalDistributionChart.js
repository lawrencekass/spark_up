import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Investment Capital", "Collected Capital", "Collected Interest"],
  datasets: [
    {
      label: "",
      data: [300000, 200000, 50000],
      backgroundColor: ["rgb(45,114,190)", "rgb(26,156,68)", "rgb(26,156,68)"],
      stack: "Stack 0",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export default function CapitalDistributionChart() {
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
}
