import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Home } from "./pages/users/home";
import { Markings } from "./pages/users/markings";
import { HomeBarber } from "./pages/barbers";

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/markings" element={<Markings />} />
        <Route path="/home-barber" element={<HomeBarber />} />
      </Routes>
    </Router>
  );
};
