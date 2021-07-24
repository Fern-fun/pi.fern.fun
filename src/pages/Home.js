import { React, useEffect, useState } from "react";
import PanelGrid from "../components/UI/PanelGrid";
import PanelChart from "../components/UI/PanelChart";
import PanelLogo from "../components/UI/PanelLogo";
import RealTimeHomePanel from "../components/Home/RealTimeHomePanel";
import { Helmet } from "react-helmet";

function Home() {
  const [ramData, setRamData] = useState([]);
  const [ramLabel, setRamLabel] = useState([]);

  const [cpuTempData, setCpuTempData] = useState([]);
  const [cpuTempLabel, setCpuTempLabel] = useState([]);

  const [cpuUsageData, setCpuUsageData] = useState([]);
  const [cpuUsageLabel, setCpuUsageLabel] = useState([]);

  useEffect(() => {
    fetch("https://fern.myftp.org:8000/chart/ram/")
      .then((res) => res.json())
      .then((data) => {
        setRamData(data["data"]);
        setRamLabel(data["label"]);
      });
    fetch("https://fern.myftp.org:8000/chart/cpu/temp/")
      .then((res) => res.json())
      .then((data) => {
        setCpuTempData(data["data"]);
        setCpuTempLabel(data["label"]);
      });
    fetch("https://fern.myftp.org:8000/chart/cpu/usage/")
      .then((res) => res.json())
      .then((data) => {
        setCpuUsageData(data["data"]);
        setCpuUsageLabel(data["label"]);
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

        <PanelChart data={ramData} label={ramLabel} title="RAM usage" />

        <PanelChart
          data={cpuTempData}
          label={cpuTempLabel}
          title="CPU temperature"
        />
        <PanelChart
          data={cpuUsageData}
          label={cpuUsageLabel}
          title="CPU usage"
        />
      </PanelGrid>
    </div>
  );
}

export default Home;
