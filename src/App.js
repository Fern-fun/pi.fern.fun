import { BrowserRouter, Routes, Route } from "react-router-dom";

import Api from "./page/API/Api";
import Home from "./page/Home/Home";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
