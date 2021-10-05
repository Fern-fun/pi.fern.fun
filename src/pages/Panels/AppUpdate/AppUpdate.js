import { React, useEffect, useState } from "react";
import PanelGrid from "../../../components/PanelGrid/PanelGrid";
import PanelElementText from "../../../components/PanelElement/PanelElementText";
import PanelLogo from "../../../components/PanelLogo/PanelLogo";
import { Helmet } from "react-helmet";

function AppUpdate() {
  const [macOS, setmacOS] = useState("Loading...");
  const [iOS, setiOS] = useState("Loading...");
  const [factorio, setFactorio] = useState("Loading...");
  const [lol, setLol] = useState("Loading...");
  useEffect(() => {
    fetch("https://api.fern.fun/pi/appupdate/")
      .then((res) => res.json())
      .then((data) => {
        setmacOS(data["macOS"]);
        setiOS(data["iOS"]);
        setFactorio(data["factorio"]);
        setLol(data["lol"]);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>{"App update - Panel"}</title>
      </Helmet>
      <PanelLogo />
      <PanelGrid>
        <PanelElementText title="macOS" content={macOS} />
        <PanelElementText title="iOS" content={iOS} />
        <PanelElementText title="Factorio" content={factorio} />
        <PanelElementText title="League of Legends" content={lol} />
      </PanelGrid>
    </div>
  );
}

export default AppUpdate;
