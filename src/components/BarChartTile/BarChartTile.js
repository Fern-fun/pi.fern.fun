import React from "react";

function BarChartTile() {
  const [barData, setBarData] = React.useState([]);
  const [barKeys, setBarKeys] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.fern.fun/pi/hardware/ram/week/")
      .then((res) => res.json())
      .then((data) => {
        setBarData(data);
        setBarKeys(Object.keys(data));
      });
  }, []);

  return (
    <div className="bar-chart">
      <div className="bar-chart-title">
        <span>Weekly RAM usage</span>
      </div>
      <div className="bar-chart-item">
        {barKeys.map((key, index) => (
          <div
            className="bar"
            key={key}
            style={{
              height: `${Math.round(barData[key])}%`,
              backgroundColor:
                barData[key] >= 45
                  ? barData[key] >= 80
                    ? "#fc4747"
                    : "#ec9641"
                  : "#62fb67",
            }}
          >
            <div className="bar-element">
              <span>{Math.round(barData[key])}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BarChartTile;
