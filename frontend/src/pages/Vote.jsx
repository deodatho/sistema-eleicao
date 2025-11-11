import React, { useState } from "react";

const SAMPLE_CANDIDATES = [
  { id: "101", name: "Ana Pereira", party: "Partido A", bio: "Trabalhadora comunitária", photo: "/images/cand1.jpg" },
  { id: "102", name: "João Gomes", party: "Partido B", bio: "Professor de escola", photo: "/images/cand2.jpg" },
  { id: "103", name: "Maria Sousa", party: "Partido C", bio: "Enfermeira", photo: "/images/cand3.jpg" },
];

export default function Home() {
  const [searchId, setSearchId] = useState("");
  const [found, setFound] = useState(null);
  const [message, setMessage] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [voted, setVoted] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const handleSearch = (e) => {
    e?.preventDefault?.();
    setMessage("");
    setFound(null);
    setVoted(false);
    const id = searchId.trim();
    if (!id) {
      setMessage("Insere o ID do candidato antes de procurar.");
      return;
    }

    setLoadingSearch(true);
    setTimeout(() => {
      const candidate = SAMPLE_CANDIDATES.find((c) => c.id === id);
      if (!candidate) {
        setMessage("Nenhum candidato encontrado com esse ID.");
        setFound(null);
      } else {
        setFound(candidate);
        setMessage(`Candidato encontrado: ${candidate.name}`);
      }
      setHasSearched(true);
      setLoadingSearch(false);
    }, 450);
  };

  const handleVote = () => {
    if (!found) {
      setMessage("Procura e selecciona um candidato antes de votar.");
      return;
    }

    setVoted(true);
    setMessage(`Voto confirmado para ${found.name}. Obrigado por participar!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tl from-stone-950 to-red-600 flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-4xl">
        {/* Cabeçalho com bandeira */}
        <header className="rounded-lg overflow-hidden shadow-md mb-6">
          <div className="flex items-center bg-gradient-to-r from-red-600 via-red-700 to-red-700 text-white py-4 px-6">
            {/* Logo (bandeira Angola) */}
            <img
              src="/logo.png"
              alt="Logo Angola"
              className="w-16 h-16 object-contain mr-4 rounded-md shadow"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Eleição 2024</h1>
              <p className="text-sm md:text-base text-yellow-200/90 mt-1">
                Juntos por uma só Nação — Vote com responsabilidade
              </p>
            </div>
          </div>
          {/* faixa amarela fina abaixo */}
          <div className="h-1 bg-yellow-400" />
        </header>

        <section className="bg-white rounded-lg shadow-md p-6 md:p-8 space-y-6">
          <p className="text-gray-700 mb-2">
            Procura o candidato pelo <strong>ID</strong>.
          </p>

          {/* Input + Procurar */}
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 items-stretch">
            <label htmlFor="searchId" className="sr-only">ID do candidato</label>
            <input
              id="searchId"
              name="searchId"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Insere o ID do candidato (ex: 102)"
              className="flex-1 border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="ID do candidato"
            />

            <button
              type="submit"
              onClick={handleSearch}
              className="md:w-40 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-3 rounded-md shadow transition"
              disabled={loadingSearch}
              aria-disabled={loadingSearch}
            >
              {loadingSearch ? "A procurar..." : "Procurar"}
            </button>
          </form>

          {message && <p className="text-sm text-gray-700">{message}</p>}

          {/* Resultado da pesquisa */}
          <div>
            {hasSearched && !found && (
              <div className="p-4 bg-red-50 border-l-4 border-red-300 rounded">
                <p className="text-sm text-red-700">
                  Nenhum candidato corresponde ao ID inserido. Verifica e tenta novamente.
                </p>
              </div>
            )}

            {found && (
              <div className="mt-4 flex flex-col md:flex-row items-start md:items-center gap-4 border rounded-lg p-4 bg-gray-50">
                <img
                  src={found.photo || "/images-placeholder.png"}
                  alt={found.name}
                  className="w-28 h-28 object-cover rounded-md border"
                />

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{found.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    Partido: <span className="font-medium text-gray-800">{found.party}</span>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">{found.bio}</p>
                  <p className="text-xs text-gray-400">
                    ID do candidato: <span className="font-mono">{found.id}</span>
                  </p>
                </div>

                <div className="w-full md:w-auto mt-3 md:mt-0">
                  <button
                    onClick={handleVote}
                    disabled={voted}
                    className={`w-full md:w-40 ${
                      voted ? "bg-gray-400 cursor-not-allowed" : "bg-red-700 hover:bg-red-800"
                    } text-white font-semibold px-4 py-3 rounded-md shadow`}
                    aria-disabled={voted}
                  >
                    {voted ? "Voto Registrado" : "Votar"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
