import { React, useState, useEffect } from "react";
import PanelLogo from "../components/UI/PanelLogo";
import GamesCarousel from "../components/UI/Games/GamesCarousel";

function Games() {
  const [gamesListFreeToPlay, setGameListFreeToPlay] = useState([]);
  const [gamesListUpcomingGames, setGameListUpcomingGames] = useState([]);
  useEffect(() => {
    fetch("https://fern.myftp.org:8000/games/free%20to%20play/")
      .then((res) => res.json())
      .then((data) => {
        setGameListFreeToPlay(data);
      });

    fetch("https://fern.myftp.org:8000/games/upcoming%20games/")
      .then((res) => res.json())
      .then((data) => {
        setGameListUpcomingGames(data);
      });
  }, []);
  return (
    <div>
      <PanelLogo />
      <div style={{ display: "block", margin: "15px" }}>
        <GamesCarousel
          listImg={gamesListFreeToPlay}
          itemAmount={gamesListFreeToPlay.length}
          title="Free to play games"
        />
        <p></p>
        <GamesCarousel
          listImg={gamesListUpcomingGames}
          itemAmount={gamesListUpcomingGames.length}
          title="Upcoming games"
        />
      </div>
    </div>
  );
}

export default Games;
