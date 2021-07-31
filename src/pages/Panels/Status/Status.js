import { React, useState, useEffect } from "react";
import PanelGrid from "../../../components/UI/PanelGrid";
import PanelElementText from "../../../components/UI/PanelElementText";
import PanelLogo from "../../../components/UI/PanelLogo";
import { Helmet } from "react-helmet";

function Status() {
  const [discord, setDiscord] = useState("Loading...");
  const [data, setData] = useState("Loading...");
  const [stock, setStock] = useState("Loading...");
  const [fern, setFern] = useState("Loading...");
  useEffect(() => {
    fetch("https://fern.myftp.org:8000/status/")
      .then((res) => res.json())
      .then((data) => {
        if (data !== {}) {
          if (data["discord"] !== "Inactive") {
            setDiscord(true);
          } else {
            setDiscord(false);
          }
          if (data["data"] !== "Inactive") {
            setData(true);
          } else {
            setData(false);
          }
          if (data["stock"] !== "Inactive") {
            setStock(true);
          } else {
            setStock(false);
          }
          if (data["fern"] !== "Inactive") {
            setFern(true);
          } else {
            setFern(false);
          }
        }
      });
  });
  return (
    <div>
      <Helmet>
        <title>{"Status - Panel"}</title>
      </Helmet>
      <PanelLogo />
      <PanelGrid>
        <PanelElementText
          title="Fern.fun"
          content={fern ? "Active" : "Inactive"}
          style={fern ? { color: "#0f0" } : { color: "red" }}
        />
        <PanelElementText
          title="DCS"
          content={data ? "Active" : "Inactive"}
          style={data ? { color: "#0f0" } : { color: "red" }}
        />
        <PanelElementText
          title="SDS"
          content={stock ? "Active" : "Inactive"}
          style={stock ? { color: "#0f0" } : { color: "red" }}
        />
        <PanelElementText
          title="Discord bot"
          content={discord ? "Active" : "Inactive"}
          style={discord ? { color: "#0f0" } : { color: "red" }}
        />
      </PanelGrid>
    </div>
  );
}

export default Status;
