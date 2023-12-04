import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import "./Home.scss";
import SystemInfo from "../components/Panels/SystemInfo";
import SystemData from "../components/Panels/SystemData";

const Home = () => {
  return (
    <div className="page-container smoothShow">
      <Helmet>
        <title>Home</title>
      </Helmet>

      <SystemInfo />
      <SystemData type="/get/cpu/usage" title="CPU Usage" />
    </div>
  );
};

export default Home;
