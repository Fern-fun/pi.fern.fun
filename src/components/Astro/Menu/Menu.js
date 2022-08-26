import React from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <>
      <div className="astro-menu" onClick={() => navigate("/astro/neo")}>
        <span style={{ fontSize: "1.5rem", cursor: "pointer" }}>Neo</span>
      </div>
    </>
  );
}

export default Menu;
