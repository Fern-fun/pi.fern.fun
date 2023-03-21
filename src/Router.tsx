import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/index.scss";
import Dashboard from "./pages/Dashboard";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/todo" element={<div>TODO</div>} />
        <Route path="/cpv" element={<div>CPV</div>} />

        <Route path="/privacy-policy" element={<div>Privacy Policy</div>} />
        <Route path="/terms-of-service" element={<div>Terms of Service</div>} />

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
