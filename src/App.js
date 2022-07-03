import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";

import "./styles/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
