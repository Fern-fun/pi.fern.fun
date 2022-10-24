import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Api from "./page/API/Api";
import ColorPalette from "./page/ColorPalette/ColorPalette";
import Home from "./page/Home/Home";
import JsonViewer from "./page/JsonViewer/JsonViewer";
import ToDoList from "./page/ToDoList/ToDoList";

import "./styles/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/api" element={<Api />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/cpv" element={<ColorPalette />} />
        <Route path="/jv" element={<JsonViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
