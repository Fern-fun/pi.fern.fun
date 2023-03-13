import React from "react";
import Tile from "../Tile/Tile";

import "./TileManager.scss";

function TileManager() {
  const [cpuPercent, setCpuPercent] = React.useState(0);
  const [ramPercent, setRamPercent] = React.useState(0);
  const [diskPercent, setDiskPercent] = React.useState(0);
  const [cpuTemp, setCpuTemp] = React.useState(0);

  const [uptime, setUptime] = React.useState(0);
  const [todayQueries, setTodayQueries] = React.useState(0);

  // Fetch data every 2.5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://api.fern.fun/pi/hardware/cpu/")
        .then((response) => response.json())
        .then((data) => {
          setCpuPercent(data.value);
        });

      fetch("https://api.fern.fun/pi/hardware/ram/")
        .then((response) => response.json())
        .then((data) => {
          setRamPercent(data.value);
        });

      fetch("https://api.fern.fun/pi/hardware/cpu/temp/")
        .then((response) => response.json())
        .then((data) => {
          setCpuTemp(data.value);
        });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Fetch data on page load
  React.useEffect(() => {
    fetch("https://api.fern.fun/pi/hardware/disk/")
      .then((response) => response.json())
      .then((data) => {
        setDiskPercent(data.value);
      });
    fetch("https://api.fern.fun/pi/hardware/uptime/")
      .then((response) => response.json())
      .then((data) => {
        setUptime(data.value);
      });
    fetch("https://api.fern.fun/query/get/today")
      .then((response) => response.json())
      .then((data) => {
        setTodayQueries(data);
      });
  }, []);

  return (
    <div className="container-tile">
      <Tile type="temp" title="CPU Temp" value={`${cpuTemp}`} />
      <Tile type="text" title="CPU Usage" value={`${cpuPercent}%`} />
      <Tile type="text" title="RAM Usage" value={`${ramPercent}%`} />
      <Tile type="text" title="Disk Usage" value={`${diskPercent}%`} />
      <Tile type="text" title="Uptime" value={`${uptime}h`} />
      <Tile type="count" title="Today's Queries" value={`${todayQueries}`} />
    </div>
  );
}

export default TileManager;
