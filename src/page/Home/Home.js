import React from "react";
import CircleChartTile from "../../components/CircleChartTile/CircleChartTile";
import GridPanel from "../../components/GridPanel/GridPanel";
import Sidebar from "../../components/Sidebar/Sidebar";

const BarChartTile = React.lazy(() =>
  import("../../components/BarChartTile/BarChartTile")
);

function Home() {
  const [cpu, setCpu] = React.useState(0);
  const [memory, setMemory] = React.useState(0);
  const [disk, setDisk] = React.useState(0);

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

  return (
    <div className="page">
      <Sidebar />
      <GridPanel>
        <CircleChartTile title={"CPU"} value={cpu} />
        <CircleChartTile title={"RAM"} value={memory} />
        <CircleChartTile title={"DISK"} value={disk} />
        <React.Suspense fallback={<div>Loading...</div>}>
          <BarChartTile />
        </React.Suspense>
      </GridPanel>
    </div>
  );
}

export default Home;
