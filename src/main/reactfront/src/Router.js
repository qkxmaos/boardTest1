import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import BoardFactory from "./pages/BoardFactory";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/write" element={<BoardFactory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
