import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import RequestValue from "../pages/requestValue";
import { AuthProvider } from "../context/authContext";
import Community from "../pages/community";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/requestValue" element={<RequestValue />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
