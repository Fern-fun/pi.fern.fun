import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.scss";

/* Icons */
import homeIcon from "../../assets/home.svg";
import todoIcon from "../../assets/list.svg";
import cpvIcon from "../../assets/palette.svg";
import toolsIcon from "../../assets/handyman.svg";

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
        className={
          "hamburger hamburger--spin" + (hamburger ? " is-active" : "")
        }
        type="button"
        onClick={hamburgerHandler}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div className="nav" style={hamburger ? { display: "block" } : {}}>
        <Link to="/">
          <div>
            <img src={homeIcon} alt="home" />
            <span>Dashboard</span>
          </div>
        </Link>

        <Link to="/todo">
          <div>
            <img src={todoIcon} alt="todo" />
            <span>TODO</span>
          </div>
        </Link>

        <Link to="/cpv">
          <div>
            <img src={cpvIcon} alt="cpv" />
            <span>CPV</span>
          </div>
        </Link>

        <a href="https://tools.fern.fun/" target={"_blank"} rel="noreferrer">
          <div>
            <img src={toolsIcon} alt="cpv" />
            <span>Tools</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
