import React from "react";

type TileProps = {
  title: string;
  value: string;
};

export const Tile: React.FC<TileProps> = ({ title, value }) => {
  return (
    <div className="tile">
      <div className="tile-title">
        <span>{title}</span>
      </div>
      <div className="tile-content">
        <span>{value}</span>
      </div>
    </div>
  );
};
