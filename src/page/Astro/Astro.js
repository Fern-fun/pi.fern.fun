import React from "react";
import { useNavigate } from "react-router-dom";
import GridPanel from "../../components/GridPanel/GridPanel";
import Sidebar from "../../components/Sidebar/Sidebar";

import { isAuth } from "../../components/Auth/Auth";
import Menu from "../../components/Astro/Menu/Menu";
import Neo from "../../components/Astro/Neo/Neo";

function Astro({ loginURL, type }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuth()) {
      navigate("/");
    }
  }, []);

  return (
    <div className="page">
      <Sidebar loginURL={loginURL} />

      <GridPanel>
        {type == "" ? <Menu /> : null}
        {type == "neo" ? <Neo /> : null}
      </GridPanel>
    </div>
  );
}

export default Astro;
