import React from "react";

function CircleChartTile(props) {
  const { title, value } = props;

  return (
    <div className="tile">
      <div className="title">{title}</div>
      <div
        className="circle-progress"
        id="circle-progress"
        style={{
          background: `conic-gradient(#62fb67 ${value * 3.6}deg, #62fb676c ${
            value * 3.6
          }deg)`,
        }}
      >
        <div className="value-container">{Math.round(value)}%</div>
      </div>
    </div>
  );
}

export default CircleChartTile;
