import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],
  datasets: [
    {
      label: "Current Loan Status",
      data: [12, 19, 3, 5, 2, 3, 7, 10, 11, 9, 9, 16],
      backgroundColor: "rgb(45,114,190)",
      stack: "Stack 0",
    },
    {
      label: "Cash In",
      data: [2, 3, 20, 5, 1, 4, 12, 19, 3, 5, 2, 3],
      backgroundColor: "rgb(26,156,68)",
      stack: "Stack 1",
    },
    {
      label: "Cash Outstanding",
      data: [3, 10, 13, 15, 10, 7, 10, 5, 1, 4, 12, 19],
      backgroundColor: "rgb(227,228,33)",
      stack: "Stack 2",
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

export default function CashFlowChart() {
  return (
    <>
      <div className="header">
        <h1 className="title">Cash Flow</h1>
      </div>
      <Bar data={data} options={options} />
    </>
  );
}
