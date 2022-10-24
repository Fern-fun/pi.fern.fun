import React from "react";
import { Cpv } from "../../components/CPV/CPV";
import Sidebar from "../../components/Sidebar/Sidebar";

function ColorPalette({ loginURL }) {
  return (
    <div className="page">
      <Sidebar loginURL={loginURL} />
      <div>
        <Cpv />
      </div>
    </div>
  );
}

export default ColorPalette;
