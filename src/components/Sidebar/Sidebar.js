import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://fern.fun/img/fern.fun.png" alt="logo" />
      </div>
      <div className="nav">
        <div>
          <img src="/img/home.svg" alt="home" />
          <span>Dashboard</span>
        </div>
        {/* <div>
          <img src="/img/home.svg" />
          <span>Dashboard</span>
        </div>
        <div>
          <img src="/img/home.svg" />
          <span>Dashboard</span>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
