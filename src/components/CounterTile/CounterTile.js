import React from "react";
import CountUp from "react-countup";

function CounterTile({ title, value, suffix }) {
  return (
    <div className="tile">
      <div className="tile-title">
        <span>{title}</span>
      </div>
      <div className="tile-content">
        <CountUp end={value} suffix={suffix} />
      </div>
    </div>
  );
}

export default CounterTile;
