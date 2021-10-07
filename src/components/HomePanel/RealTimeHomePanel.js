import { React, useEffect, useState } from "react";
import PanelElementText from "../PanelElement/PanelElementText";

function RealTimeHomePanel() {
  const [version, setVersion] = useState("Loading...");
  const [temp, setTemp] = useState("Loading...");
  const [memory, setMemory] = useState("Loading...");
  const [disk, setDisk] = useState("Loading...");
  const [cpuUsage, setCpuUsage] = useState("Loading...");

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://api.fern.fun/pi/hardware/data/")
        .then((res) => res.json())
        .then((data) => {
          setVersion(data["version"]);
          setTemp(data["temp"] + "°C");
          setMemory(data["memory"] + "%");
          setDisk(data["disk"]);
          setCpuUsage(data["cpu usage"] + "%");
        });
    }, 1000);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);
  return (
    <>
      <a
        href="https://github.com/Fern-fun/Fern.fun-Server"
        target="_blank"
        rel="noreferrer"
        className="home__panel__a"
      >
        <PanelElementText title="Version" content={version} />
      </a>
      <PanelElementText title="CPU Temperature" content={temp} />
      <PanelElementText title="CPU usage" content={cpuUsage} />
      <PanelElementText title="Memory Usage" content={memory} />
      <PanelElementText title="Disk" content={disk} />
      {/* <PanelElementText title="Coming Soon" content="Loading..." /> */}
    </>
  );
}

export default RealTimeHomePanel;
