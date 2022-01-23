import { Paper } from "@material-ui/core";
import React from "react";
import { Line } from "react-chartjs-2";

export default function SummaryChart() {
  const data = {
    labels: [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Today",
    ],
    datasets: [
      {
        label: "Summary",
        data: [12, 19, 15, 17, 11, 8, 12, 14, 10, 5, 2, 3, 10, 5],
        fill: true,
        backgroundColor: "rgb(209,230,250)",
        borderColor: "rgb(34,110,255)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <>
      <div className="header">
        <h1 className="title">Summary</h1>
      </div>
      <Paper elevation={4}>
        <Line data={data} options={options} />
      </Paper>
    </>
  );
}
