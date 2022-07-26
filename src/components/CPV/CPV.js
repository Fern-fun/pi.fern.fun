import React from "react";

import { Menu } from "./components/menu/menu";
import { Container } from "./components/container/container";
import { Tile } from "./components/tile/tile";

export const Cpv = () => {
  const [menuClass, setMenuClass] = React.useState("menuItem");

  const [tiles, setTiles] = React.useState([]);

  React.useEffect(() => {
    if (localStorage.getItem("cpv")) {
      const cpv = JSON.parse(localStorage.getItem("cpv"));
      for (const [key, value] of Object.entries(cpv)) {
        setTiles((tile) => [
          ...tile,
          <Tile key={key} pid={key} bg={value.bg} loaded={true} />,
        ]);
      }
    }

    // for (const [key, value] of Object.entries(cpv)) {
    //   setTiles((tile) => [
    //     ...tile,
    //     <Tile key={key} pid={key} bg={value} loaded={true} />,
    //   ]);
    // }
  }, []);

  return (
    <div>
      <Container tiles={tiles} />
      <Menu
        menuClass={menuClass}
        setMenuClass={setMenuClass}
        setTiles={setTiles}
        tiles={tiles}
      />
    </div>
  );
};
