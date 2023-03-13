import React from "react";
import CountUp from "react-countup";

import "./Tile.scss";

type TileProps = {
  type: string;
  title: string;
  value: string;
};

const Tile: React.FC<TileProps> = ({ type, title, value }) => {
  const tileType = {
    text: "text",
    temp: "temp",
    count: "count",
  }[type];

  if (tileType === "text") {
    return (
      <div className="tile">
        <div className="tile__title">{title}</div>
        <div className="tile__value">{value}</div>
      </div>
    );
  } else if (tileType === "temp") {
    return (
      <div className="tile">
        <span className="tile__title">{title}</span>
        <div className="tile__temp">
          <div className="tile__value">{parseInt(value)}°C</div>
          <div>
            <div>{(parseInt(value) * 9) / 5 + 32}°F</div>
            <div>{Math.round((parseFloat(value) + 273.15) * 100) / 100}K</div>
          </div>
        </div>
      </div>
    );
  } else if (tileType === "count") {
    return (
      <div className="tile">
        <div className="tile__title">{title}</div>
        <div className="tile__value">
          <CountUp
            start={0}
            end={parseFloat(value)}
            duration={2.75}
            separator=" "
          />
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default Tile;
