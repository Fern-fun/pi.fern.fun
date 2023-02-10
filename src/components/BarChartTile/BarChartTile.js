import React from "react";

function BarChartTile({ data, keys, suffix, title }) {
  return (
    <div className="bar-chart">
      <div className="bar-chart-title">
        {keys.length > 0 ? <span>{title}</span> : <span>API Issue</span>}
      </div>
      <div className="bar-chart-item">
        {keys.map((key, index) => (
          <div
            className="bar"
            key={key}
            style={{
              height: `${Math.round(data[key])}%`,
              backgroundColor:
                data[key] >= 45
                  ? data[key] >= 80
                    ? "#fc4747"
                    : "#ec9641"
                  : "#62fb67",
            }}
          >
            <div className="bar-element">
              <span>
                {Math.round(data[key])}
                {suffix}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BarChartTile;
