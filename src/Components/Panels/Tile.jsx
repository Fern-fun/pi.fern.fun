import React from "react";

const Tile = ({ title, content, contentClassName, contentId, style }) => {
  return (
    <div className="tile smoothShow">
      <div className="title">{title}</div>
      <div className={contentClassName} id={contentId} style={style}>
        {content ? content : "Loading"}
      </div>
    </div>
  );
};

export default Tile;
