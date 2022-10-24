import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import GridPanel from "../../components/GridPanel/GridPanel";
import CounterTile from "../../components/CounterTile/CounterTile";

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

function Api({ loginURL }) {
  const [todayQueries, setTodayQueries] = React.useState([0, ""]);
  const [totalQueries, setTotalQueries] = React.useState([0, ""]);

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
        <CounterTile
          title={"Total queries"}
          value={totalQueries[0]}
          suffix={totalQueries[1]}
        />
        <CounterTile
          title={"Today queries"}
          value={todayQueries[0]}
          suffix={todayQueries[1]}
        />
      </GridPanel>
    </div>
  );
}

export default Api;
