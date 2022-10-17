import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const Landing = React.lazy(() => import("../pages/Landing"));
const ProfileDetail = React.lazy(() => import("../pages/ProfileDetail"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/:id" element={<ProfileDetail />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
