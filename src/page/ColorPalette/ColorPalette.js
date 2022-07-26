import React from "react";
import { Cpv } from "../../components/CPV/CPV";
import Sidebar from "../../components/Sidebar/Sidebar";

function ColorPalette() {
  return (
    <div className="page">
      <Sidebar />
      <div>
        <Cpv />
      </div>
    </div>
  );
}

export default ColorPalette;
