import React from "react";
import "./style.css";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const ProfileCompletionGauge = () => {
  const data = {
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ["#7731E4", "#E8DCFA"],
        borderWidth: 0,
        rotation: 270,
        circumference: 360,
        cutout: "75%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ position: "relative", width: "12em", height: "12em" }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: "2em", fontWeight: "bold" }}>75%</span>
      </div>
    </div>
  );
};

export default function UserSettingsRightSecondComp() {
  return (
    <>
      <div className="user-settings-right-second-comp-container">
        <div className="user-settings-right-second-comp-container-title">
          Profile Percentage
        </div>
        <ProfileCompletionGauge />
      </div>
    </>
  );
}
