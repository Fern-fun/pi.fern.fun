import { React, useState, useEffect } from "react";
import PanelGrid from "../../../components/PanelGrid/PanelGrid";
import PanelElementText from "../../../components/PanelElement/PanelElementText";
import PanelLogo from "../../../components/PanelLogo/PanelLogo";
import { Helmet } from "react-helmet";

export default function Stock() {
  const [tsla, setTsla] = useState("Loading...");
  const [aapl, setAapl] = useState("Loading...");
  const [msft, setMsft] = useState("Loading...");
  const [goog, setGoog] = useState("Loading...");

  const [chartTslaData, setChartTslaData] = useState([]);
  const [chartAaplData, setChartAaplData] = useState([]);
  const [chartMsftData, setChartMsftData] = useState([]);

  useEffect(() => {
    fetch("https://api.fern.fun/pi/stock/")
      .then((res) => res.json())
      .then((data) => {
        setTsla(data["tsla"]);
        setAapl(data["aapl"]);
        setMsft(data["msft"]);
        setGoog(data["goog"]);
      });
  }, []);

  useEffect(() => {
    fetch("https://api.fern.fun/pi/stock/chart/tsla/")
      .then((res) => res.json())
      .then((data) => {
        setChartTslaData(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://api.fern.fun/pi/stock/chart/aapl/")
      .then((res) => res.json())
      .then((data) => {
        setChartAaplData(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://api.fern.fun/pi/stock/chart/msft/")
      .then((res) => res.json())
      .then((data) => {
        setChartMsftData(data);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>{"Stock - Panel"}</title>
      </Helmet>
      <PanelLogo />
      <PanelGrid>
        <PanelElementText
          title={
            <>
              Tesla<sub>TSLA</sub>
            </>
          }
          content={"$" + tsla}
        >
          <img
            alt="TSLA"
            src="/images/tsla.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>
        <PanelElementText
          title={
            <>
              Apple<sub>AAPL</sub>
            </>
          }
          content={"$" + aapl}
        >
          <img
            alt="AAPL"
            src="/images/aapl.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>
        <PanelElementText
          title={
            <>
              Microsoft<sub>MSFT</sub>
            </>
          }
          content={"$" + msft}
        >
          <img
            alt="MSFT"
            src="/images/msft.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>

        <PanelElementText
          title={
            <>
              Alphabet<sub>GOOG</sub>
            </>
          }
          content={"$" + goog}
        >
          <img
            alt="GOOG"
            src="/images/goog.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>
      </PanelGrid>
    </div>
  );
}
