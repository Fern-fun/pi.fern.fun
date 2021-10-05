import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Panels/Home/Home";
import AppUpdate from "./pages/Panels/AppUpdate/AppUpdate";
import Currencies from "./pages/Panels/Currencies/Currencies";
import Stock from "./pages/Panels/Stock/Stock";
import Navbar from "./components/Navbar/Navbar";
import Games from "./pages/Panels/Games/Games";
import Footer from "./components/Navbar/Footer";

import { ThemeSwitcherProvider } from "react-css-theme-switcher";

function App() {
  const [defaultTheme, setDefaultTheme] = useState("PlumWine");
  useEffect(() => {
    if (localStorage.getItem("theme") != null) {
      setDefaultTheme(localStorage.getItem("theme"));
    }
  });
  const themes = {
    RoseWine: "/themes/RoseWine/RoseWine.css",
    Teaberry: "/themes/Teaberry/Teaberry.css",
    PlumWine: "/themes/PlumWine/PlumWine.css",
    BlackDiamond: "/themes/BlackDiamond/BlackDiamond.css",
    DarkLilac: "/themes/DarkLilac/DarkLilac.css",
  };
  return (
    <ThemeSwitcherProvider defaultTheme={defaultTheme} themeMap={themes}>
      <div>
        <div>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/appUpdate" exact component={AppUpdate} />
              <Route path="/currencies" exact component={Currencies} />
              <Route path="/stock" exact component={Stock} />
              <Route path="/games" exact component={Games} />
            </Switch>
          </Router>
          <Footer />
        </div>
      </div>
    </ThemeSwitcherProvider>
  );
}

export default App;
