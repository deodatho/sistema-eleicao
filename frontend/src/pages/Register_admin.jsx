import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [adminToggle, setAdminToggle] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Simula registo — substitui pela API real
    setTimeout(() => {
      setLoading(false);
      alert(`Registo: ${username} (${email}) — Admin: ${adminToggle}`);
    }, 800);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-slate-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-lg bg-white/90 backdrop-blur-md shadow-lg rounded-2xl border border-gray-200 overflow-hidden"
      >
        <div className="px-6 py-8 bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 text-white text-center">
          <h1 className="text-2xl font-semibold">Registo de Administradores</h1>
          <p className="mt-1 text-sm opacity-90">Cria um novo utilizador com privilégios de administração</p>
        </div>

        <div className="px-6 py-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Nome de Utilizador</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                placeholder="ex: joao.silva"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                placeholder="teu.email@exemplo.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Palavra-passe</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pr-24 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  placeholder="Mínimo 8 caracteres"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sm px-3 py-1 rounded-md bg-gray-100 border border-gray-200 hover:bg-gray-200 focus:outline-none"
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-500">Recomendado: 8+ caracteres com números e símbolos.</p>
            </div>

            <div className="flex items-center justify-between gap-4">
              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={adminToggle}
                  onChange={() => setAdminToggle((s) => !s)}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <span className="text-gray-600">Conta com privilégios de Administrador</span>
              </label>

              <div className="text-sm text-gray-500">Sugestão de segurança: muda a password no primeiro acesso.</div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-indigo-600 text-white font-semibold shadow-sm hover:bg-indigo-700 active:translate-y-[1px] disabled:opacity-60"
              >
                {loading ? "A registar..." : "Registar Administrador"}
              </button>
            </div>

            <div className="text-center text-xs text-gray-500">
              Ao criar um administrador, assegura-te que tens permissão para tal.
            </div>
          </form>

          <div className="mt-6 border-t pt-4 text-center text-sm text-gray-600">
            <p>Voltar para <a href="/login" className="text-indigo-600 hover:underline">Página de Login</a></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
