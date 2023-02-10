import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ColorPalette from "./page/ColorPalette/ColorPalette";
import Home from "./page/Home/Home";
import ToDoList from "./page/ToDoList/ToDoList";

// Login and Signup
import Login from "./page/Login/Login";
import Signup from "./page/Signup/Signup";

// Licenses
import PrivacyPolicy from "./page/Licenses/PrivacyPolicy";
import TermsofService from "./page/Licenses/TermsofService";

import "./styles/index.scss";
import Account from "./page/Account/Account";

function App() {
  const [token, setToken] = React.useState(localStorage.getItem("session"));

  React.useEffect(() => {
    fetch(
      `https://api.fern.fun/fern/account/get/user/data/${localStorage.getItem(
        "username"
      )}/${localStorage.getItem("session")}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== "success") {
          localStorage.removeItem("session");
          localStorage.removeItem("username");
          setToken(null);
        }
      });
  }, []);

  // Not logged in
  if (!token) {
    return (
      <BrowserRouter>
        <Routes>
          {/* HOME */}
          <Route index element={<Home />} />

          {/* LOGIN & REGISTER */}
          <Route
            path="*"
            element={<Login token={token} setToken={setToken} />}
          />
          <Route
            path="/signup"
            element={<Signup token={token} setToken={setToken} />}
          />

          {/* FUN */}
          <Route path="/todo" element={<ToDoList />} />
          <Route path="/cpv" element={<ColorPalette />} />

          {/* Licenes */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsofService />} />
        </Routes>
      </BrowserRouter>
    );
  }

  // Logged in
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />

        {/* ACCOUNT */}
        <Route path="/account" element={<Account />} />

        {/* FUN */}
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/cpv" element={<ColorPalette />} />

        {/* Licenes */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsofService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
