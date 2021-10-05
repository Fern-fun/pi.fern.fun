import { React, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./PanelChart.css";
import ClipLoader from "react-spinners/ClipLoader";

function PanelChart(props) {
  const { label, data, title } = props;

  const [dataChart, setDataChart] = useState([]);
  const [labels, setLabels] = useState([]);

  let loading = false;
  useEffect(() => {
    if (data != null || data != undefined) {
      loading = false;
      data.map((item) => {
        setDataChart((dataChart) => [...dataChart, item.value]);
        setLabels((labels) => [
          ...labels,
          item.date_created.toString().split("T")[1].split(".")[0],
        ]);
      });
    } else {
      loading = true;
    }
  }, [data]);

  return (
    <div
      className="panel chart"
      style={{ gridColumnEnd: "span 2", gridRowEnd: "span 2" }}
    >
      <div className="loading chart">
        <ClipLoader color="#fff" loading={loading} size={80} />
      </div>

      <Line
        className="chart"
        width="100"
        height="100"
        data={{
          labels: labels,
          datasets: [
            {
              label: title,
              fill: true,
              borderColor:
                "#" + Math.floor(Math.random() * 16777215).toString(16),
              data: dataChart,
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: title,
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}

export default PanelChart;
