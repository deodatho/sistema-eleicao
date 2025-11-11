import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Simular autenticação (substitua pela lógica real)
    setTimeout(() => {
      setLoading(false);
      alert(`Tentativa de login: ${email}`);
    }, 800);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-slate-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-lg rounded-2xl border border-gray-200 overflow-hidden"
      >
        {/* Cabeçalho */}
        <div className="px-6 py-8 text-center bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 text-white">
          <h1 className="text-2xl font-semibold tracking-tight">Sistema de Votação</h1>
          <p className="mt-1 text-sm opacity-90">Bem-vindo — faça login para continuar</p>
        </div>

        {/* Corpo do card */}
        <div className="px-6 py-8">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Aceder à conta</h2>

          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulário de login">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                placeholder="teu.email@exemplo.com"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Palavra-passe
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pr-24 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  placeholder="••••••••"
                  aria-required="true"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sm px-3 py-1 rounded-md bg-gray-100 border border-gray-200 hover:bg-gray-200 focus:outline-none"
                  aria-pressed={showPassword}
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                <span className="text-gray-600">Lembrar-me</span>
              </label>

              <a href="#" className="text-sm text-indigo-600 hover:underline">
                Esqueci a palavra-passe
              </a>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-indigo-600 text-white font-semibold shadow-sm hover:bg-indigo-700 active:translate-y-[1px] disabled:opacity-60"
              >
                {loading ? "Entrando..." : "Iniciar sessão"}
              </button>
            </div>

            <div className="text-center text-xs text-gray-500">
              Ao continuar concordas com os nossos <a href="#" className="underline">termos</a> e <a href="#" className="underline">política de privacidade</a>.
            </div>
          </form>

          {/* Rodapé com info adicional */}
          <div className="mt-6 border-t pt-4 text-center text-sm text-gray-600">
            <p>Não tens conta? <a href="/registo" className="text-indigo-600 hover:underline">Regista-te</a></p>
            <p className="mt-2 text-xs">Versão do sistema: <span className="font-mono">v1.0.0</span></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
