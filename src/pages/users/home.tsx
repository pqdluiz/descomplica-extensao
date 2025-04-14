import React from "react";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const [barber, setBarber] = React.useState("");
  const [date, setDate] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (): void => {
    if (!barber || !date) {
      alert("Preencha todos os campos!");
      return;
    }

    const existingMarkings = JSON.parse(
      localStorage.getItem("markings") ?? "[]"
    );

    const newMarkings = [...existingMarkings, { barber, date }];

    localStorage.setItem("markings", JSON.stringify(newMarkings));

    navigate("/markings");
  };

  return (
    <div className="flex flex-col items-center">
      <header className="bg-blue-400 flex justify-end px-2 py-6 w-full">
        <h3 className="text-white">Olá, Luiz</h3>
      </header>

      <main className="flex items-center justify-center my-6">
        <h3 className="text-gray-500 font-bold text-2xl">Agende sua visita</h3>
      </main>

      <section className="flex flex-col items-center justify-center mb-6">
        <div className="flex flex-col items-center justify-center my-6">
          <span>Selecione o barbeiro:</span>
          <select
            onChange={(event) => setBarber(event.target.value)}
            className="w-80 p-2 border border-gray-500 rounded"
          >
            <option value="">Selecione</option>
            <option value="Alessandro">Alessandro</option>
            <option value="Lucas Flaneto">Lucas Flaneto</option>
          </select>
        </div>

        <div className="flex flex-col items-center justify-center">
          <span>Escolha uma data:</span>
          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
            type="date"
            className="w-80 border border-gray-500 p-2 rounded"
          />
        </div>
      </section>

      <button
        onClick={handleSubmit}
        className="w-80 sm:w-80 md:w-96 lg:w-96 bg-blue-400 py-6 text-2xl text-white font-bold cursor-pointer my-2"
      >
        Agendar
      </button>
    </div>
  );
};
