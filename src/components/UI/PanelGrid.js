import { React } from "react";
import "./PanelGrid.css";

function PanelGrid(props) {
  return <div className="grid">{props.children}</div>;
}

export default PanelGrid;
