import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const [hamburger, setHamburger] = React.useState(false);
  const [token, setToken] = React.useState();
  const navigate = useNavigate();

  const hamburgerHandler = () => {
    setHamburger(!hamburger);
  };

  React.useEffect(() => {
    if (localStorage.getItem("session") === null) {
      setToken(false);
    } else {
      setToken(true);
    }
  }, []);

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
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

        <a href="https://tools.fern.fun/" target={"_blank"}>
          <div>
            <img src="/img/handyman.svg" alt="cpv" />
            <span>Tools</span>
          </div>
        </a>

        <a href="/account">
          <div>
            <img src="/img/person.svg" alt="cpv" />
            <span>Account</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
