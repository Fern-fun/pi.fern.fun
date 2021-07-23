import { React, useState, useEffect } from "react";
import PanelGrid from "../components/UI/PanelGrid";
import PanelChart from "../components/UI/PanelChart";
import PanelElementText from "../components/UI/PanelElementText";
import PanelLogo from "../components/UI/PanelLogo";

export default function Stock() {
  const [tsla, setTsla] = useState("Loading...");
  const [aapl, setAapl] = useState("Loading...");
  const [msft, setMsft] = useState("Loading...");

  const [chartTslaData, setChartTslaData] = useState([]);
  const [chartTslaLabel, setChartTslaLabel] = useState([]);
  const [chartAaplData, setChartAaplData] = useState([]);
  const [chartAaplLabel, setChartAaplLabel] = useState([]);
  const [chartMsftData, setChartMsftData] = useState([]);
  const [chartMsftLabel, setChartMsftLabel] = useState([]);

  useEffect(() => {
    fetch("https://fern.myftp.org:8000/stock/")
      .then((res) => res.json())
      .then((data) => {
        setTsla(data["tsla"]);
        setAapl(data["aapl"]);
        setMsft(data["msft"]);
      });
  }, []);

  useEffect(() => {
    fetch("https://fern.myftp.org:8000/chart/stock/tsla/")
      .then((res) => res.json())
      .then((data) => {
        setChartTslaData(data["data"]);
        setChartTslaLabel(data["label"]);
      });
  }, []);

  useEffect(() => {
    fetch("https://fern.myftp.org:8000/chart/stock/aapl/")
      .then((res) => res.json())
      .then((data) => {
        setChartAaplData(data["data"]);
        setChartAaplLabel(data["label"]);
      });
  }, []);

  useEffect(() => {
    fetch("https://fern.myftp.org:8000/chart/stock/msft/")
      .then((res) => res.json())
      .then((data) => {
        setChartMsftData(data["data"]);
        setChartMsftLabel(data["label"]);
      });
  }, []);
  return (
    <div>
      <PanelLogo />
      <PanelGrid>
        <PanelElementText title="TSLA" content={tsla}>
          <img
            alt="TSLA"
            src="/images/tsla.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>
        <PanelElementText title="AAPL" content={aapl}>
          <img
            alt="AAPL"
            src="/images/aapl.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>
        <PanelElementText title="MSFT" content={msft}>
          <img
            alt="MSFT"
            src="/images/msft.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>

        <PanelChart
          data={chartTslaData}
          label={chartTslaLabel}
          title="[$] TSLA"
        />
        <PanelChart
          data={chartAaplData}
          label={chartAaplLabel}
          title="[$] AAPL"
        />
        <PanelChart
          data={chartMsftData}
          label={chartMsftLabel}
          title="[$] MSFT"
        />
      </PanelGrid>
    </div>
  );
}
