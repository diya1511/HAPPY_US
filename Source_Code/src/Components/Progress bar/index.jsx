import React from "react";

function ProgressBar({ percent }) {
  const progressStyle = {
    width: `${percent}%`,
    backgroundColor: "#38CB89",
    height: "0.375rem",
    borderRadius: "100px",
  };

  const progressBarStyle = {
    backgroundColor: "#EDEDED",
    height: "0.375rem",
    borderRadius: "100px",
  };

  return (
    <div style={progressBarStyle} className="progress-bar">
      <div style={progressStyle} className="progress"></div>
    </div>
  );
}

export default ProgressBar;