import React from "react";
import CircleChartTile from "../../components/CircleChartTile/CircleChartTile";
import GridPanel from "../../components/GridPanel/GridPanel";
import Sidebar from "../../components/Sidebar/Sidebar";
import CounterTile from "../../components/CounterTile/CounterTile";

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
  const [cpu, setCpu] = React.useState(0);
  const [memory, setMemory] = React.useState(0);
  const [disk, setDisk] = React.useState(0);

  const [todayQueries, setTodayQueries] = React.useState([0, ""]);
  const [totalQueries, setTotalQueries] = React.useState([0, ""]);

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
  }, []);

  return (
    <div className="page">
      <Sidebar loginURL={loginURL} />
      <GridPanel>
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
