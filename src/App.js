import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ColorPalette from "./page/ColorPalette/ColorPalette";
import Home from "./page/Home/Home";
import ToDoList from "./page/ToDoList/ToDoList";

import "./styles/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/cpv" element={<ColorPalette />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
