import { React, useEffect, useState } from "react";
import PanelElementText from "../UI/PanelElementText";

function RealTimeHomePanel() {
  const [version, setVersion] = useState("Loading...");
  const [temp, setTemp] = useState("Loading...");
  const [memory, setMemory] = useState("Loading...");
  const [disk, setDisk] = useState("Loading...");
  const [cpuUsage, setCpuUsage] = useState("Loading...");

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://fern.myftp.org:8000/home/")
        .then((res) => res.json())
        .then((data) => {
          setVersion(data["version"]);
          setTemp(data["temp"] + "%");
          setMemory(data["memory"] + "%");
          setDisk(data["disk"]);
          setCpuUsage(data["cpu usage"] + "%");
        });
    }, 1000);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);
  return (
    <>
      <PanelElementText title="Version" content={version} />
      <PanelElementText title="CPU Temperature" content={temp} />
      <PanelElementText title="CPU usage" content={cpuUsage} />
      <PanelElementText title="Memory Usage" content={memory} />
      <PanelElementText title="Disk" content={disk} />
      <PanelElementText title="Coming Soon" content="Loading..." />
    </>
  );
}

export default RealTimeHomePanel;
