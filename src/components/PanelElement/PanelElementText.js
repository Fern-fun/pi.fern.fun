import React from "react";
import "./PanelElement.css";
import ClipLoader from "react-spinners/ClipLoader";

function PanelElementText(props) {
  const { title, content, style } = props;
  let loading = false;
  let Styles = false;

  if (typeof style != undefined) {
    Styles = true;
  } else {
    Styles = false;
  }
  if (content === "Loading...") {
    loading = true;
  } else {
    loading = false;
  }
  return (
    <div className="panel">
      <div className="info">
        {props.children ? props.children : null}
        <h1 className="title">{title}</h1>
        <div className="content">
          <p style={{ ...(Styles ? style : null) }}>
            {loading ? null : content}
          </p>
          <ClipLoader
            color="#fff"
            loading={loading}
            className="loading"
            size={80}
          />
        </div>
      </div>
    </div>
  );
}

export default PanelElementText;
