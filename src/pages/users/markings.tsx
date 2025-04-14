import React from "react";

export const Markings: React.FC = () => {
  const [markings, setMarkings] = React.useState<
    { barber: string; date: string }[]
  >([]);

  // Recupera as marcações do localStorage ao carregar a página
  React.useEffect(() => {
    const storedMarkings = JSON.parse(localStorage.getItem("markings") ?? "[]");
    setMarkings(storedMarkings);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <header className="bg-blue-400 flex justify-end px-2 py-6 w-full">
        <h3 className="text-white">Olá, Luiz</h3>
      </header>

      <main className="flex items-center justify-center my-6">
        <h3 className="text-gray-500 font-bold text-3xl">Marcações feitas</h3>
      </main>

      {markings.length > 0 ? (
        markings.map((marking, index) => (
          <div
            key={index + 1}
            className="w-80 sm:w-80 lg:w-full shadow-lg p-4 bg-white rounded-lg my-2 cursor-pointer"
          >
            <p className="text-2xl sm:text-base lg:text-2xl">
              Barbeiro: {marking.barber}
            </p>
            <p className="text-2xl sm:text-base lg:text-2xl">
              Data: {marking.date}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Nenhuma marcação encontrada.</p>
      )}
    </div>
  );
};
