import { React, useEffect, useState } from "react";
import PanelGrid from "../../../components/UI/PanelGrid";
import PanelChart from "../../../components/UI/PanelChart";
import PanelLogo from "../../../components/UI/PanelLogo";
import RealTimeHomePanel from "../../../components/Home/RealTimeHomePanel";
import { Helmet } from "react-helmet";

function Home() {
  const [ramData, setRamData] = useState([]);

  const [cpuTempData, setCpuTempData] = useState([]);

  const [cpuUsageData, setCpuUsageData] = useState([]);

  useEffect(() => {
    fetch("https://api.fern.fun/pi/hardware/chart/ramUsage/")
      .then((res) => res.json())
      .then((data) => {
        setRamData(data);
      });
    fetch("https://api.fern.fun/pi/hardware/chart/cpuTemp/")
      .then((res) => res.json())
      .then((data) => {
        setCpuTempData(data);
      });
    fetch("https://api.fern.fun/pi/hardware/chart/cpuUsage/")
      .then((res) => res.json())
      .then((data) => {
        setCpuUsageData(data);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>{"Home - Panel"}</title>
      </Helmet>
      <PanelLogo />
      <PanelGrid>
        <RealTimeHomePanel />
        <PanelChart data={ramData} title="RAM usage" />
        <PanelChart data={cpuTempData} title="CPU temperature" />
        <PanelChart data={cpuUsageData} title="CPU usage" />
      </PanelGrid>
    </div>
  );
}

export default Home;
