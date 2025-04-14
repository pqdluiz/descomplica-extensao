import React from "react";

export const HomeBarber: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <header className="bg-blue-400 flex justify-end px-2 py-6 w-full">
        <h3 className="text-white">Olá Barbeiro, Alessandro</h3>
      </header>

      <main className="flex items-center justify-center my-6">
        <h3 className="text-gray-500 font-bold text-2xl">Informações</h3>
      </main>

      <section className="w-96 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-gray-500 text-lg font-bold mb-4 text-center">
          Meus horários
        </h3>
        <ul className="flex flex-col gap-y-3 text-gray-500">
          <li className="flex justify-between border-b pb-2">
            <span className="font-medium">Segunda-feira</span>
            <span>Fechado</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span className="font-medium">Terça-feira</span>
            <span>09:00 - 17:00</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span className="font-medium">Quarta-feira</span>
            <span>09:00 - 17:00</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span className="font-medium">Quinta-feira</span>
            <span>09:00 - 17:00</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span className="font-medium">Sexta-feira</span>
            <span>09:00 - 17:00</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span className="font-medium">Sábado</span>
            <span>10:00 - 14:00</span>
          </li>
          <li className="flex justify-between pb-2">
            <span className="font-medium">Domingo</span>
            <span>Fechado</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
