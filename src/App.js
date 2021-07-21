import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import AppUpdate from "./pages/AppUpdate";
import Currencies from "./pages/Currencies";
import Stock from "./pages/Stock";
import Navbar from "./components/Navbar/Navbar";
import Status from "./pages/Status";
import Games from "./pages/Games";

function App() {
  return (
    <div>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/appUpdate" exact component={AppUpdate} />
            <Route path="/currencies" exact component={Currencies} />
            <Route path="/stock" exact component={Stock} />
            <Route path="/status" exact component={Status} />
            <Route path="/games" exact component={Games} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
