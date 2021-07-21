import { React } from "react";
import { Line } from "react-chartjs-2";
import "./PanelChart.css";
import ClipLoader from "react-spinners/ClipLoader";

function PanelChart(props) {
  const { label, data, title } = props;

  let loading = false;
  if (data.length === 0 && label.length === 0) {
    loading = true;
  } else {
    loading = false;
  }

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
          labels: label,
          datasets: [
            {
              label: title,
              fill: true,
              borderColor:
                "#" + Math.floor(Math.random() * 16777215).toString(16),
              data: data,
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
