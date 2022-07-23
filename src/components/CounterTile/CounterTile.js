import React from "react";
import CountUp from "react-countup";

function CounterTile(props) {
  const { title, value, suffix } = props;

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
