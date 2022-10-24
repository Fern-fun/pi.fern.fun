import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { delCookie, isAuth } from "../Auth/Auth";

function Sidebar({ loginURL }) {
  const [hamburger, setHamburger] = React.useState(false);
  const navigate = useNavigate();

  const hamburgerHandler = () => {
    setHamburger(!hamburger);
  };

  const logoutHandler = () => {
    delCookie("token");
    delCookie("refresh");
    navigate("/login");
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

      <div className="nav" style={hamburger ? { display: "block" } : null}>
        <Link to="/">
          <div>
            <img src="/img/home.svg" alt="home" />
            <span>Dashboard</span>
          </div>
        </Link>

        <Link to="/api">
          <div>
            <img src="/img/api.svg" alt="api" />
            <span>API</span>
          </div>
        </Link>

        <Link to="/todo">
          <div>
            <img src="/img/list.svg" alt="todo" />
            <span>TODO</span>
          </div>
        </Link>

        <Link to="/cpv">
          <div>
            <img src="/img/palette.svg" alt="cpv" />
            <span>CPV</span>
          </div>
        </Link>

        <Link to="/jv">
          <div>
            <img src="/img/visibility.svg" alt="cpv" />
            <span>JV</span>
          </div>
        </Link>

        {isAuth() ? (
          <Link to="/astro">
            <div>
              <img src="/img/magic.svg" alt="astro" />
              <span>Astro</span>
            </div>
          </Link>
        ) : null}

        {isAuth() ? (
          <a onClick={logoutHandler}>
            <div>
              <img src="/img/discord-logo.svg" alt="login" />
              <span>Logout</span>
            </div>
          </a>
        ) : (
          <a href={loginURL}>
            <div>
              <img src="/img/discord-logo.svg" alt="login" />
              <span>Login</span>
            </div>
          </a>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
