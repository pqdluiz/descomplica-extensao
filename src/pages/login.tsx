import React from "react";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <main className="text-center">
        <h1 className="font-bold text-4xl">DESCOMPLICA BARBER</h1>
      </main>

      <section className="flex flex-col ">
        <div className="flex flex-col my-2">
          <span className="text-gray-500">Email</span>
          <input
            type="email"
            placeholder="Email"
            className="border-1 py-2 px-4 w-96"
          />
        </div>

        <div className="flex flex-col my-2">
          <span className="text-gray-500">Password</span>
          <input
            type="password"
            placeholder="Password"
            className="w-96 sm:w-80 md:w-96 lg:w-96 border-1 py-2 px-4"
          />
        </div>
      </section>

      <button
        onClick={handleLogin}
        className="w-96 sm:w-80 md:w-96 lg:w-96 bg-blue-400 py-6 text-2xl text-white font-bold cursor-pointer my-2"
      >
        Entrar
      </button>
    </div>
  );
};
