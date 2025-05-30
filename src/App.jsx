import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import "./index.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  </BrowserRouter>
);

// Render directly inside this file
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
