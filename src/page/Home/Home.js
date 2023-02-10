import React from "react";
import CircleChartTile from "../../components/CircleChartTile/CircleChartTile";
import GridPanel from "../../components/GridPanel/GridPanel";
import Sidebar from "../../components/Sidebar/Sidebar";
import CounterTile from "../../components/CounterTile/CounterTile";
import Tile from "../../components/Tile/Tile";

const BarChartTile = React.lazy(() =>
  import("../../components/BarChartTile/BarChartTile")
);

const nFormater = (value) => {
  let newValue = value;
  if (value < 1000000 && value > 1000) {
    newValue = [Math.round(value / 1000), "k"];
  } else if (value >= 1000000) {
    newValue = [Math.round(value / 1000000), "M"];
  } else if (value >= 1000000000) {
    newValue = [Math.round(value / 1000000000), "B"];
  } else if (value >= 1000000000000) {
    newValue = [Math.round(value / 1000000000000), "T"];
  } else if (value >= 1000000000000000) {
    newValue = [Math.round(value / 1000000000000000), "Q"];
  } else {
    newValue = [value, ""];
  }
  return newValue;
};

function Home({ loginURL }) {
  const [uptime, setUptime] = React.useState(0);
  const [cpu, setCpu] = React.useState(0);
  const [memory, setMemory] = React.useState(0);
  const [disk, setDisk] = React.useState(0);
  const [temp, setTemp] = React.useState(0);

  const [todayQueries, setTodayQueries] = React.useState([0, ""]);
  const [totalQueries, setTotalQueries] = React.useState([0, ""]);

  //! Request ever 2.5 seconds
  React.useEffect(() => {
    setInterval(() => {
      fetch("https://api.fern.fun/pi/hardware/cpu/")
        .then((res) => res.json())
        .then((data) => {
          setCpu(data.value);
        });
      fetch("https://api.fern.fun/pi/hardware/ram/")
        .then((res) => res.json())
        .then((data) => {
          setMemory(data.value);
        });
      fetch("https://api.fern.fun/pi/hardware/disk/")
        .then((res) => res.json())
        .then((data) => {
          setDisk(data.value);
        });
    }, 2500);
  }, []);

  //! Request once
  React.useEffect(() => {
    fetch("https://api.fern.fun/query/get/today")
      .then((res) => res.json())
      .then((data) => {
        setTodayQueries(nFormater(data));
      });

    fetch("https://api.fern.fun/query/get")
      .then((res) => res.json())
      .then((data) => {
        setTotalQueries(nFormater(data));
      });

    fetch("https://api.fern.fun/fern/dashboard/get/uptime")
      .then((res) => res.json())
      .then((data) => {
        setUptime(data.uptime);
      });

    fetch("https://api.fern.fun/pi/hardware/cpu/temp/")
      .then((res) => res.json())
      .then((data) => {
        setTemp(data.value);
      });
  }, []);

  return (
    <div className="page">
      <Sidebar loginURL={loginURL} />
      <GridPanel>
        <Tile
          title={"CPU Temperature"}
          value={
            <>
              <div>
                <span>{parseInt(temp)}°C</span>
              </div>
              <div>
                <span>{parseInt((parseFloat(temp) * 9) / 5 + 32)}°F</span>
                <span>
                  {Math.round((parseFloat(temp) + 273.15) * 100) / 100}K
                </span>
              </div>
            </>
          }
        />
        <Tile title={"Uptime"} value={uptime + "h"} />
        <CircleChartTile title={"CPU"} value={cpu} />
        <CircleChartTile title={"RAM"} value={memory} />
        <CircleChartTile title={"DISK"} value={disk} />
        <CounterTile
          title={"Total API queries"}
          value={totalQueries[0]}
          suffix={totalQueries[1]}
        />
        <CounterTile
          title={"Today API queries"}
          value={todayQueries[0]}
          suffix={todayQueries[1]}
        />
        <React.Suspense
          fallback={
            <div className="loading">
              <img src="/img/loading.svg" />
            </div>
          }
        >
          <BarChartTile />
        </React.Suspense>
      </GridPanel>
    </div>
  );
}

export default Home;
