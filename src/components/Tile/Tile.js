import React from "react";

function Tile({ title, value }) {
  return (
    <div className="tile">
      <div className="tile-title">
        <span>{title}</span>
      </div>
      <div className="tile-content">{value}</div>
    </div>
  );
}

export default Tile;
