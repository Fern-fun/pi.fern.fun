import React from "react";

function Modal(props) {
  const { visable, title, content } = props;

  return (
    <div
      className="modal"
      style={visable ? { display: "flex" } : { display: "none" }}
    >
      <div>
        <div className="modal-title">{title}</div>

        <div className="modal-content">{content}</div>
      </div>
    </div>
  );
}

export default Modal;
