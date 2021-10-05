import { React, useState, useEffect } from "react";
import PanelLogo from "../../../components/UI/PanelLogo";
import GamesCarousel from "../../../components/UI/Games/GamesCarousel";
import { Helmet } from "react-helmet";

function Games() {
  const [gamesListFreeToPlay, setGameListFreeToPlay] = useState([]);
  const [gamesListUpcomingGames, setGameListUpcomingGames] = useState([]);
  useEffect(() => {
    fetch("https://api.fern.fun/pi/games/free%20to%20play/")
      .then((res) => res.json())
      .then((data) => {
        setGameListFreeToPlay(data);
      });

    fetch("https://api.fern.fun/pi/games/upcoming games/")
      .then((res) => res.json())
      .then((data) => {
        setGameListUpcomingGames(data);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>{"Games - Panel"}</title>
      </Helmet>
      <PanelLogo />
      <GamesCarousel
        listImg={gamesListUpcomingGames}
        itemAmount={gamesListUpcomingGames.length}
        title="Upcoming games"
      />
    </div>
  );
}

export default Games;
