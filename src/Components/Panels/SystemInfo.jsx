import React, { useState, useEffect } from "react";
import config from "../../config.json";

import "./Panels.scss";
import Tile from "./Tile";

const SystemInfo = () => {
  const [systemInfo, setSystemInfo] = useState({});
  const [systemData, setSystemData] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`${config.api_url}/dashboard/get/all/data`)
        .then((res) => res.json())
        .then((data) => {
          setSystemData(data);
          setSystemInfo("system_info" in data ? data.system_info : {});
        });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Tile
        title="Hostname"
        content={
          <>
            <div>
              <span>OS</span>
              <span>{"os" in systemInfo ? systemInfo.os : "Loading"}</span>
            </div>
            <div>
              <span>ARCH</span>
              <span>{"arch" in systemInfo ? systemInfo.arch : "Loading"}</span>
            </div>
            <div>
              <span>Uptime</span>
              <span>
                {"uptime" in systemInfo
                  ? `${Math.round(systemInfo.uptime)}h`
                  : "Loading"}
              </span>
            </div>
          </>
        }
        contentClassName={"content--system-info"}
      />

      <Tile
        title="CPU"
        content={
          <>
            <div style={{ gridArea: "1 / 1 / 2 / 3" }}>
              <span>
                {"cpu_temp" in systemData
                  ? `${Math.round(systemData.cpu_temp)}°C`
                  : "Loading..."}
              </span>
            </div>
            <div style={{ gridArea: "2 / 1 / 3 / 2" }}>
              <span>
                {"cpu_temp" in systemData
                  ? `${Math.round(systemData.cpu_temp + 273.15)}K`
                  : "Loading..."}
              </span>
            </div>
            <div style={{ gridArea: "2 / 2 / 3 / 3" }}>
              <span>
                {"cpu_temp" in systemData
                  ? `${Math.round((systemData.cpu_temp * 9) / 5 + 32, 2)}°F`
                  : "Loading..."}
              </span>
            </div>
          </>
        }
        contentClassName={"content--cpu-temp"}
      />

      <Tile
        title={"CPU Usage"}
        content={
          <>
            <div>
              {Math.round("cpu_usage" in systemData ? systemData.cpu_usage : 0)}
              %
            </div>
          </>
        }
        contentClassName={"content--circle-progress"}
        contentId={"cpu_usage"}
        style={{
          background: `conic-gradient(#c39afc ${
            "cpu_usage" in systemData ? systemData.cpu_usage * 3.6 : 0
          }deg, rgb(41, 41, 41) ${
            "cpu_usage" in systemData ? systemData.cpu_usage * 3.6 : 0
          }deg)`,
        }}
      />

      <Tile
        title={"RAM Usage"}
        content={
          <>
            <div>
              {"ram_usage" in systemData ? systemData.ram_usage.toFixed(1) : 0}%
            </div>
          </>
        }
        contentClassName={"content--circle-progress"}
        contentId={"ram_usage"}
        style={{
          background: `conic-gradient(#c39afc ${
            "ram_usage" in systemData ? systemData.ram_usage * 3.6 : 0
          }deg, rgb(41, 41, 41) ${
            "ram_usage" in systemData ? systemData.ram_usage * 3.6 : 0
          }deg)`,
        }}
      />
    </>
  );
};

export default SystemInfo;
