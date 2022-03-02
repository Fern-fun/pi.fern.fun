import { React, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useThemeSwitcher } from "react-css-theme-switcher";

function Navbar() {
  const { switcher, themes, currentTheme, status } = useThemeSwitcher();

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

  const themeChangeHandler = () => {
    setHam(false);
    const themesList = Object.keys(themes);
    switcher({
      theme:
        themesList[(themesList.indexOf(currentTheme) + 1) % themesList.length],
    });
    localStorage.setItem(
      "theme",
      themesList[(themesList.indexOf(currentTheme) + 1) % themesList.length]
    );
  };
  return (
    <nav className="nav">
      <div style={{ display: "none" }} id="Menu">
        <img alt="logo" src="/images/fern.fun.png" width={"25px"} />
      </div>
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
        {ham ? null : (
          <li className="first">
            <a
              href="https://fern.fun"
              onClick={hideHamHandler}
              className="navText logoNav"
              target={"_blank"}
            >
              <img alt="logo" src="/images/fern.fun.png" width={"25px"} />
            </a>
          </li>
        )}

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
        <li>
          <Link onClick={hideHamHandler} className="navText"></Link>
        </li>

        {/* Theme change bnt */}
        <li>
          <Link onClick={themeChangeHandler} className="navText">
            {currentTheme}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
