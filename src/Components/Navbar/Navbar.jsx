import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

import logo from "../../assets/logo.png";

function Navbar() {
  const [hamburger, setHamburger] = React.useState(false);

  const hamburgerHandler = () => {
    setHamburger(!hamburger);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-container__logo">
        <Link to="/">
          <img src={logo} alt="Fern Logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-container__hamburger">
        <button
          className={
            "hamburger hamburger--spin" + (hamburger ? " is-active" : "")
          }
          type="button"
          name="hamburger"
          onClick={hamburgerHandler}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div
        className="navbar-container__box"
        style={hamburger ? { display: "block" } : null}
      >
        <Link
          to="/"
          onClick={(e) => (hamburger ? setHamburger((a) => !a) : null)}
        >
          <div className="home">
            <span>Home</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
