import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import "./Home.scss";
import SystemInfo from "../components/Panels/SystemInfo";

const Home = () => {
  return (
    <div className="page-container smoothShow">
      <Helmet>
        <title>Home</title>
      </Helmet>

      <SystemInfo />
    </div>
  );
};

export default Home;
