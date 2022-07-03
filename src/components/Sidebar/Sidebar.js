import React from "react";

function Sidebar() {
  const [hamburger, setHamburger] = React.useState(false);

  const hamburgerHandler = () => {
    setHamburger(!hamburger);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://fern.fun/img/fern.fun.png" alt="logo" />
      </div>
      <button
        class={"hamburger hamburger--spin" + (hamburger ? " is-active" : "")}
        type="button"
        onClick={hamburgerHandler}
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>

      <div className="nav" style={hamburger ? { display: "block" } : null}>
        <div>
          <img src="/img/home.svg" alt="home" />
          <span>Dashboard</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
