import React, { useState, useEffect } from "react";
import config from "../../config.json";

import "./Panels.scss";

const SystemInfo = () => {
  const [systemInfo, setSystemInfo] = useState({});
  const [tempValue, setTempValue] = useState({});

  useEffect(() => {
    fetch(`${config.api_url}/dashboard/get/system/info`)
      .then((res) => res.json())
      .then((data) => {
        setSystemInfo(data);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`${config.api_url}/dashboard/get/cpu/temp`)
        .then((res) => res.json())
        .then((data) => {
          setTempValue("value" in data ? data.value : 0);
        });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="tile">
        <div className="title">
          {"hostname" in systemInfo ? systemInfo.hostname : "Loading"}
        </div>
        <div className="content--system-info">
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
        </div>
      </div>

      <div className="tile">
        <div className="title">CPU Temp</div>
        <div className="content--cpu-temp">
          <div style={{ gridArea: "1 / 1 / 2 / 3" }}>
            <span>{Math.round(tempValue)}°C</span>
          </div>
          <div style={{ gridArea: "2 / 1 / 3 / 2" }}>
            <span>{Math.round(tempValue + 273.15)}K</span>
          </div>
          <div style={{ gridArea: "2 / 2 / 3 / 3" }}>
            <span>{Math.round((tempValue * 9) / 5 + 32, 2)}°F</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SystemInfo;
