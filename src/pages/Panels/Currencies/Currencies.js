import { React, useState, useEffect } from "react";
import PanelGrid from "../../../components/UI/PanelGrid";
import PanelElementText from "../../../components/UI/PanelElementText";
import PanelChart from "../../../components/UI/PanelChart";
import PanelLogo from "../../../components/UI/PanelLogo";
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
    fetch("https://api.fern.fun/pi/currencies/crypto/")
      .then((res) => res.json())
      .then((data) => {
        setUsd(data["usd"]);
        setEur(data["eur"]);
        setGbp(data["gbp"]);
        setBtc(data["btc"]);
        setEth(data["eth"]);
        setDoge(data["doge"]);
        setShib(data["shib"]);
      });
  }, []);

  useEffect(() => {
    fetch("https://api.fern.fun/pi/currencies/chart/btc/")
      .then((res) => res.json())
      .then((data) => {
        setChartBtcData(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://api.fern.fun/pi/currencies/chart/eth/")
      .then((res) => res.json())
      .then((data) => {
        setChartEthData(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://api.fern.fun/pi/currencies/chart/doge/")
      .then((res) => res.json())
      .then((data) => {
        setChartDogeData(data);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>{"Currencies - Panel"}</title>
      </Helmet>
      <PanelLogo />
      <PanelGrid>
        <PanelElementText title="USD to PLN" content={`${usd}zł`}>
          <img
            alt="USD"
            src="/images/usd.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>
        <PanelElementText title="EUR to PLN" content={`${eur}zł`}>
          <img
            alt="EUR"
            src="/images/eur.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>
        <PanelElementText title="GBP to PLN" content={`${gbp}zł`}>
          <img
            alt="GBP"
            src="/images/gbp.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>
        <PanelElementText title="BTC to PLN" content={`$${btc}`}>
          <img
            alt="BTC"
            src="/images/btc.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>
        <PanelElementText title="ETH to PLN" content={`$${eth}`}>
          <img
            alt="ETH"
            src="/images/eth.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>
        <PanelElementText title="DOGE to PLN" content={`$${doge}`}>
          <img
            alt="DOGE"
            src="/images/doge.webp"
            style={{ width: "32px", height: "32px" }}
          />
        </PanelElementText>

        <PanelChart data={chartBtcData} title="[USD] BTC" />
        <PanelChart data={chartEthData} title="[USD] ETH" />
        <PanelChart data={chartDogeData} title="[USD] DOGE" />
      </PanelGrid>
    </div>
  );
}

export default Currencies;
