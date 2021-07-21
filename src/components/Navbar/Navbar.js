import { React } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <h1 style={{ display: "none" }} id="Menu">
        Menu
      </h1>
      <input type="checkbox" id="hamburger" style={{ display: "none" }}></input>
      <label htmlFor="hamburger" className="hamburger">
        <div className="line"></div>
      </label>
      <ul id="menu">
        <li>
          <Link className="navText" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navText" to="/appUpdate">
            App update
          </Link>
        </li>
        <li>
          <Link className="navText" to="/currencies">
            Currencies
          </Link>
        </li>
        <li>
          <Link className="navText" to="/stock">
            Stock
          </Link>
        </li>
        <li>
          <Link className="navText" to="/status">
            Status
          </Link>
        </li>
        <li>
          <Link className="navText" to="/games">
            Games
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
