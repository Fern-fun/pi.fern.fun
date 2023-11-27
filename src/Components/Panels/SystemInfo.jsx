import React, { useState, useEffect } from "react";
import config from "../../config.json";

import "./Panels.scss";

const SystemInfo = () => {
  const [systemInfo, setSystemInfo] = useState({});

  useEffect(() => {
    getSystemInfo();
  }, []);

  const getSystemInfo = () => {
    fetch(`${config.api_url}/dashboard/get/system/info`)
      .then((res) => res.json())
      .then((data) => {
        setSystemInfo(data);
      });
  };

  return (
    <div className="panel-main">
      <div className="panel-title">
        {"hostname" in systemInfo ? systemInfo.hostname : "Loading"}
      </div>
      <div className="panel-content">
        <div className="sub-panel">
          <span>OS</span>
          <span>{"os" in systemInfo ? systemInfo.os : "Loading"}</span>
        </div>
        <div className="sub-panel">
          <span>ARCH</span>
          <span>{"arch" in systemInfo ? systemInfo.arch : "Loading"}</span>
        </div>
        <div className="sub-panel">
          <span>Uptime</span>
          <span>
            {"uptime" in systemInfo
              ? `${Math.round(systemInfo.uptime)}h`
              : "Loading"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SystemInfo;
