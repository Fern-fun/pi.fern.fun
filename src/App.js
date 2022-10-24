import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Api from "./page/API/Api";
import ColorPalette from "./page/ColorPalette/ColorPalette";
import Home from "./page/Home/Home";
import JsonViewer from "./page/JsonViewer/JsonViewer";
import Login from "./page/Login/Login";
import ToDoList from "./page/ToDoList/ToDoList";

import { isAuth, getCookie } from "./components/Auth/Auth";

import "./styles/index.scss";
import Astro from "./page/Astro/Astro";

const CLIENT_ID = "1002870054393753640";
const GUILD_ID = "773527241715613707";

function App() {
  const [loginURL, setLoginURL] = React.useState("");
  const [user, setUser] = React.useState({});
  const [guild, setGuild] = React.useState({});

  React.useEffect(() => {
    fetch(`https://api.fern.fun/discord/${CLIENT_ID}/login`)
      .then((res) => res.json())
      .then((data) => {
        setLoginURL(data);
      });

    if (isAuth()) {
      //! Get user data
      fetch(
        `https://api.fern.fun/discord/get/user?access_token=${getCookie(
          "token"
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("email", data.email);
          fetch(
            `https://api.fern.fun/discord/${CLIENT_ID}/get/guilds/memebers/${
              data.id
            }?access_token=${getCookie("token")}&guild_id=${GUILD_ID}`
          )
            .then((res) => res.json())
            .then((data) => {
              setUser(data);
            });
        });

      //! Get guild data
      fetch(
        `https://api.fern.fun/discord/${CLIENT_ID}/get/guild?access_token=${getCookie(
          "token"
        )}&guild_id=${GUILD_ID}`
      )
        .then((res) => res.json())
        .then((data) => {
          setGuild(data);
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/api" element={<Api />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/cpv" element={<ColorPalette />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
