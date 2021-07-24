import { React, useState, useEffect } from "react";
import PanelGrid from "../components/UI/PanelGrid";
import PanelElementText from "../components/UI/PanelElementText";
import PanelChart from "../components/UI/PanelChart";
import PanelLogo from "../components/UI/PanelLogo";
import { Helmet } from "react-helmet";

function Currencies() {
  const [usd, setUsd] = useState("Loading...");
  const [eur, setEur] = useState("Loading...");
  const [gbp, setGbp] = useState("Loading...");
  const [btc, setBtc] = useState("Loading...");
  const [eth, setEth] = useState("Loading...");
  const [doge, setDoge] = useState("Loading...");
  const [shib, setShib] = useState("Loading...");

  const [chartBtcData, setChartBtcData] = useState([]);
  const [chartBtcLabel, setChartBtcLabel] = useState([]);
  const [chartEthData, setChartEthData] = useState([]);
  const [chartEthLabel, setChartEthLabel] = useState([]);
  const [chartDogeData, setChartDogeData] = useState([]);
  const [chartDogeLabel, setChartDogeLabel] = useState([]);

  useEffect(() => {
    fetch("https://fern.myftp.org:8000/currency/pln/")
      .then((res) => res.json())
      .then((data) => {
        setUsd(data["usd"] + " zł");
        setEur(data["eur"] + " zł");
        setGbp(data["gbp"] + " zł");
        setBtc(data["btc"] + " zł");
        setEth(data["eth"] + " zł");
        setDoge(data["doge"] + " zł");
        setShib(data["shib"] + " zł");
      });
  }, []);

  useEffect(() => {
    fetch("https://fern.myftp.org:8000/chart/btc/pln/")
      .then((res) => res.json())
      .then((data) => {
        setChartBtcData(data["data"]);
        setChartBtcLabel(data["label"]);
      });
  }, []);

  useEffect(() => {
    fetch("https://fern.myftp.org:8000/chart/eth/pln/")
      .then((res) => res.json())
      .then((data) => {
        setChartEthData(data["data"]);
        setChartEthLabel(data["label"]);
      });
  }, []);

  useEffect(() => {
    fetch("https://fern.myftp.org:8000/chart/doge/pln/")
      .then((res) => res.json())
      .then((data) => {
        setChartDogeData(data["data"]);
        setChartDogeLabel(data["label"]);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>{"Currencies - Panel"}</title>
      </Helmet>
      <PanelLogo />
      <PanelGrid>
        <PanelElementText title="USD to PLN" content={usd}>
          <img
            alt="USD"
            src="/images/usd.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>
        <PanelElementText title="EUR to PLN" content={eur}>
          <img
            alt="EUR"
            src="/images/eur.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>
        <PanelElementText title="GBP to PLN" content={gbp}>
          <img
            alt="GBP"
            src="/images/gbp.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>
        <PanelElementText title="BTC to PLN" content={btc}>
          <img
            alt="BTC"
            src="/images/btc.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>
        <PanelElementText title="ETH to PLN" content={eth}>
          <img
            alt="ETH"
            src="/images/eth.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>
        <PanelElementText title="DOGE to PLN" content={doge}>
          <img
            alt="DOGE"
            src="/images/doge.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>
        <PanelElementText title="Shib to PLN" content={shib}>
          <img
            alt="Shib"
            src="/images/shib.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>

        <PanelChart
          data={chartBtcData}
          label={chartBtcLabel}
          title="[USD] BTC"
        />
        <PanelChart
          data={chartEthData}
          label={chartEthLabel}
          title="[USD] ETH"
        />
        <PanelChart
          data={chartDogeData}
          label={chartDogeLabel}
          title="[USD] DOGE"
        />
      </PanelGrid>
    </div>
  );
}

export default Currencies;
