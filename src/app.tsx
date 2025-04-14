import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Login } from "./pages/login";
import { Home } from "./pages/users/home";
import { Markings } from "./pages/users/markings";
import { HomeBarber } from "./pages/barbers";

export const Confirmacao: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const barber = params.get("barber");
  const date = params.get("date");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-green-500">
        Agendamento Confirmado!
      </h1>
      <p className="text-xl mt-4">Barbeiro: {barber}</p>
      <p className="text-xl">Data: {date}</p>
    </div>
  );
};

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
