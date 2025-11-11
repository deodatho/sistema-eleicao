import React from "react";

export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-red-700 to-yellow-400 flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-2xl">
        {/* Cabeçalho com bandeira e identidade angolana */}
        <header className="rounded-lg overflow-hidden shadow-md mb-6">
          <div className="flex items-center">
            {/* Lado esquerdo: bandeira / logo */}
            <div className="flex items-center gap-4 flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4">
              <img src="/logo.png" alt="Bandeira de Angola" className="w-16 h-16 object-contain rounded-md shadow" />
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Eleição 2024</h1>
                <p className="text-sm md:text-base text-yellow-100/90 mt-1">Juntos por uma só Nação — Vote com responsabilidade</p>
              </div>
            </div>

            {/* Lado direito: bloco preto com texto amarelo */}
            <div className="w-44 bg-black flex items-center justify-center p-4">
              <div className="text-right">
                <div className="text-yellow-400 font-bold text-lg md:text-xl">ANGOLA</div>
                <div className="text-xs text-yellow-300">VOTAÇÃO DIGITAL</div>
              </div>
            </div>
          </div>

          {/* Faixa amarela fina de acento */}
          <div className="h-1 bg-yellow-400" />
        </header>

        {/* Card do formulário */}
        <form className="bg-white p-6 md:p-8 rounded-lg shadow-md" aria-label="Formulário de cadastro">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold">CADASTRO</h2>
              <p className="text-sm text-gray-600">Preencha os seus dados para prosseguir para a votação.</p>
            </div>

          </div>

          <fieldset className="space-y-5">
            {/* Nome */}
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Ex: João da Silva"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
                aria-label="Nome completo"
                required
              />
            </div>

            {/* Bairro / Município */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="bairro" className="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
                <input
                  id="bairro"
                  name="bairro"
                  type="text"
                  placeholder="Ex: Rocha Pinto"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="municipio" className="block text-sm font-medium text-gray-700 mb-1">Município</label>
                <input
                  id="municipio"
                  name="municipio"
                  type="text"
                  placeholder="Ex: Cazenga"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
            </div>

            {/* Província */}
            <div>
              <label htmlFor="provincia" className="block text-sm font-medium text-gray-700 mb-1">Província</label>
              <select
                id="provincia"
                name="provincia"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
                aria-label="Província"
                defaultValue=""
                required
              >
                <option value="" disabled>Selecione a Província</option>
                <option value="BENGO">BENGO</option>
                <option value="BENGUELA">BENGUELA</option>
                <option value="BIÉ">BIÉ</option>
                <option value="CABINDA">CABINDA</option>
                <option value="CUNENE">CUNENE</option>
                <option value="CUANZA-NORTE">CUANZA-NORTE</option>
                <option value="CUANZA-SUL">CUANZA-SUL</option>
                <option value="CUANDO-CUBANGO">CUANDO-CUBANGO</option>
                <option value="HUAMBO">HUAMBO</option>
                <option value="HUÍLA">HUÍLA</option>
                <option value="LUANDA">LUANDA</option>
                <option value="LUNDA NORTE">LUNDA NORTE</option>
                <option value="LUNDA SUL">LUNDA SUL</option>
                <option value="MALANJE">MALANJE</option>
                <option value="MOXICO">MOXICO</option>
                <option value="NAMIBE">NAMIBE</option>
                <option value="UÍGE">UÍGE</option>
                <option value="ZAIRE">ZAIRE</option>
              </select>
            </div>

            {/* B.I */}
            <div>
              <label htmlFor="bi" className="block text-sm font-medium text-gray-700 mb-1">Nº do Bilhete de Identidade</label>
              <input
                id="bi"
                name="bi"
                type="text"
                placeholder="Ex: 12345678A"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
                inputMode="text"
                required
              />
              <p className="text-xs text-gray-500 mt-2">O B.I. será verificado pela comissão eleitoral.</p>
            </div>
          </fieldset>

          {/* Botões */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 bg-red-700 hover:bg-red-800 text-white font-semibold py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            >
              Prosseguir para Votação
            </button>

          </div>

        </form>

        {/* Rodapé pequeno com marca */}
        <footer className="mt-6 text-center text-xs text-zinc-50">
          © {new Date().getFullYear()} EleiçãoApp — Desenvolvido para Angola
        </footer>
      </div>
    </div>
  );
}
