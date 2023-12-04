import React, { useState, useEffect, useRef } from "react";

import config from "../../config.json";

const SystemData = ({ type, title }) => {
  const [progress, setProgress] = useState(0);

  const getSystemData = () => {
    fetch(`${config.api_url}/dashboard${type}`)
      .then((res) => res.json())
      .then((data) => {
        setProgress(data.value);
      })
      .catch((error) => {
        console.error("Error fetching system data:", error);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getSystemData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tile smoothShow">
      <div className="title">{title}</div>
      <div
        className="content--circle-progress"
        id="circle-progress"
        style={{
          background: `conic-gradient(#c39afc ${
            progress * 3.6
          }deg, rgb(41, 41, 41) ${progress * 3.6}deg)`,
        }}
      >
        <div>{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

export default SystemData;
