import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";  // <-- Import HashRouter
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import "./index.css";

const App = () => (
  <HashRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  </HashRouter>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
