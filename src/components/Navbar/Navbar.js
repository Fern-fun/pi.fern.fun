import { React, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [ham, setHam] = useState(false);
  const hideHamHandler = () => {
    setHam(false);
  };
  const checkBoxHandler = () => {
    if (ham) {
      setHam(false);
    } else {
      setHam(true);
    }
  };

  return (
    <nav className="nav">
      <h1 style={{ display: "none" }} id="Menu">
        Menu
      </h1>
      <input
        type="checkbox"
        id="hamburger"
        style={{ display: "none" }}
        onChange={checkBoxHandler}
        checked={ham}
      ></input>
      <label htmlFor="hamburger" className="hamburger">
        <div className="line"></div>
      </label>
      <ul id="menu">
        <li>
          <Link onClick={hideHamHandler} className="navText" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={hideHamHandler} className="navText" to="/appUpdate">
            App update
          </Link>
        </li>
        <li>
          <Link onClick={hideHamHandler} className="navText" to="/currencies">
            Currencies
          </Link>
        </li>
        <li>
          <Link onClick={hideHamHandler} className="navText" to="/stock">
            Stock
          </Link>
        </li>
        <li>
          <Link onClick={hideHamHandler} className="navText" to="/games">
            Games
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
