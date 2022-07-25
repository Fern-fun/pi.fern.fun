import React from "react";

function Modal(props) {
  const { visable, title, content } = props;

  return (
    <div
      className="popup"
      style={visable ? { display: "flex" } : { display: "none" }}
    >
      <div>
        <div className="popup-title">{title}</div>

        <div className="popup-content">{content}</div>
      </div>
    </div>
  );
}

export default Modal;
