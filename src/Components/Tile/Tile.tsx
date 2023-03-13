import React from "react";

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
      <div className="">
        <div className="">
          <span className="">{title}</span>
          <div className="">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  } else if (tileType === "count") {
  }

  return <div></div>;
};

export default Tile;
