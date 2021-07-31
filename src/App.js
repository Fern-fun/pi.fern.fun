import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Panels/Home/Home";
import AppUpdate from "./pages/Panels/AppUpdate/AppUpdate";
import Currencies from "./pages/Panels/Currencies/Currencies";
import Stock from "./pages/Panels/Stock/Stock";
import Navbar from "./components/Navbar/Navbar";
import Status from "./pages/Panels/Status/Status";
import Games from "./pages/Panels/Games/Games";
import Footer from "./components/Navbar/Footer";

/* <===============> Account <===============> */
import Account from "./pages/Account/Account";

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

            {/* <===============> Account <===============>*/}
            <Route path="/account" exact component={Account} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
