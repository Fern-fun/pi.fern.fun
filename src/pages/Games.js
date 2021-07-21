import { React, useState, useEffect } from "react";
import PanelLogo from "../components/UI/PanelLogo";

function Games() {
  const [gamesList, setGameList] = useState([]);
  useEffect(() => {
    fetch("https://fern.myftp.org:8000/games/free to play/")
      .then((res) => res.json())
      .then((data) => {
        setGameList(data);
      });
  }, []);
  return (
    <div>
      <PanelLogo />
      <div style={{ display: "flex", margin: "15px" }}>
        {gamesList.map((item) => (
          <img src={item.image} alt={item.title} key={item.title} />
        ))}
      </div>
    </div>
  );
}

export default Games;
