import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import RepositoriesPage from "./pages/MainPage/RepositoriesPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/repositories" element={<RepositoriesPage />} />
      <Route path="/:login/repositories" element={<MainPage />} />
    </Routes>
  );
}
