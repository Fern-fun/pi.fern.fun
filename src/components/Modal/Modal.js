import React from "react";

function Modal(props) {
  const { visable, title, content, setVisable } = props;

  return (
    <div
      className="modal"
      style={visable ? { display: "flex" } : { display: "none" }}
    >
      <div>
        <div style={{ justifyContent: "flex-end" }} id="close">
          <img
            src="/img/close.svg"
            alt="close"
            onClick={(e) => setVisable(false)}
          />
        </div>
        <div className="modal-title">{title}</div>

        <div className="modal-content">{content}</div>
      </div>
    </div>
  );
}

export default Modal;
