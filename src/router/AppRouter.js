import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "../App";
import { Details } from "../pages/details/Details";
import { Home } from "../pages/home/Home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/:clientName" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
