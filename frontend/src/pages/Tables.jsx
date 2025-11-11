import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// ---------- Layout ----------
function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-800">
      <aside className="w-72 bg-white border-r p-4 flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Sistema de Eleição</h1>
          <p className="text-sm text-gray-500 mt-1">Painel de administração</p>
        </div>

        <nav className="flex-1">
          <ul className="space-y-1">
            <li>
              <NavLink to="/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/mesas">Mesas</NavLink>
            </li>
            <li>
              <NavLink to="/utilizadores">Utilizadores</NavLink>
            </li>
            <li>
              <NavLink to="/relatorios">Relatórios</NavLink>
            </li>
            <li>
              <NavLink to="/config">Configurações</NavLink>
            </li>
          </ul>
        </nav>

        <div className="mt-6">
          <button className="w-full py-2 rounded-lg bg-blue-600 text-white font-medium">Sair</button>
        </div>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="block px-3 py-2 rounded-md text-sm hover:bg-gray-100 transition-colors"
    >
      {children}
    </Link>
  );
}

// ---------- Dashboard Home ----------
function DashboardHome() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Resumo</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Mesas ativas" value="24" />
        <StatCard title="Utilizadores" value="142" />
        <StatCard title="Votos totais" value="4.820" />
        <StatCard title="Relatórios" value="8" />
      </div>

      <section className="mt-6">
        <h3 className="text-xl font-medium mb-2">Atividade recente</h3>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-4 rounded-lg border"
        >
          <p className="text-sm text-gray-600">Nenhuma atividade crítica nas últimas 24 horas.</p>
        </motion.div>
      </section>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
    </div>
  );
}

// ---------- Mesas Page ----------
const mockMesas = [
  { id: "M-001", municipio: "Luanda", local: "Escola A", status: "Ativa", votos: 412 },
  { id: "M-002", municipio: "Belas", local: "Escola B", status: "Fechada", votos: 389 },
  { id: "M-003", municipio: "Viana", local: "Centro C", status: "Ativa", votos: 128 },
];

function MesasPage() {
  return (
    <div>
      <header className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Mesas</h2>
        <Link to="/mesas/novo" className="py-2 px-4 bg-green-600 text-white rounded">Criar mesa</Link>
      </header>

      <div className="space-y-4">
        {mockMesas.map((m) => (
          <motion.div key={m.id} whileHover={{ scale: 1.01 }} className="bg-white border p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-medium">{m.id} — {m.local}</div>
                <div className="text-sm text-gray-500">{m.municipio}</div>
              </div>

              <div className="text-right">
                <div className={`inline-block px-3 py-1 rounded-full text-sm ${m.status === 'Ativa' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'}`}>
                  {m.status}
                </div>
                <div className="text-sm text-gray-600 mt-1">Votos: <span className="font-medium">{m.votos}</span></div>
              </div>
            </div>

            <div className="mt-3 flex gap-2">
              <button className="py-1 px-3 border rounded">Ver</button>
              <button className="py-1 px-3 border rounded">Editar</button>
              <button className="py-1 px-3 border rounded text-red-600">Eliminar</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ---------- Utilizadores Page ----------
const mockUsers = [
  { id: 1, name: "Ana Silva", role: "Administrador", email: "ana@devtool.local" },
  { id: 2, name: "João Gomes", role: "Operador", email: "joao@devtool.local" },
  { id: 3, name: "Rúben", role: "Supervisor", email: "ruben@devtool.local" },
];

function UtilizadoresPage() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Utilizadores</h2>
        <button onClick={() => navigate('/utilizadores/novo')} className="py-2 px-4 bg-blue-600 text-white rounded">Adicionar</button>
      </header>

      <div className="bg-white border rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-sm">#</th>
              <th className="p-3 text-sm">Nome</th>
              <th className="p-3 text-sm">Email</th>
              <th className="p-3 text-sm">Função</th>
              <th className="p-3 text-sm">Ações</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="p-3">{u.id}</td>
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3">{u.role}</td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <button className="py-1 px-2 border rounded">Ver</button>
                    <button className="py-1 px-2 border rounded">Editar</button>
                    <button className="py-1 px-2 border rounded text-red-600">Remover</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ---------- Relatórios Page ----------
const mockReports = [
  { id: 'R-001', title: 'Resumo por município', date: '2025-10-10', author: 'Ana' },
  { id: 'R-002', title: 'Irregularidades detectadas', date: '2025-10-09', author: 'Rúben' },
];

function RelatoriosPage() {
  return (
    <div>
      <header className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Relatórios</h2>
        <button className="py-2 px-4 bg-indigo-600 text-white rounded">Gerar relatório</button>
      </header>

      <div className="space-y-3">
        {mockReports.map(r => (
          <div key={r.id} className="bg-white border rounded p-4 flex items-center justify-between">
            <div>
              <div className="font-medium">{r.title}</div>
              <div className="text-sm text-gray-500">{r.date} • {r.author}</div>
            </div>
            <div className="flex gap-2">
              <button className="py-1 px-3 border rounded">Ver</button>
              <button className="py-1 px-3 border rounded">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- Settings (simple) ----------
function ConfigPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Configurações</h2>
      <div className="bg-white border rounded p-4">
        <label className="block mb-2 text-sm">Nome da instância</label>
        <input className="w-full border rounded p-2" defaultValue="Sistema de Eleição - Angola" />
      </div>
    </div>
  );
}

// ---------- App / Routes ----------
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/mesas" element={<MesasPage />} />
          <Route path="/utilizadores" element={<UtilizadoresPage />} />
          <Route path="/relatorios" element={<RelatoriosPage />} />
          <Route path="/config" element={<ConfigPage />} />

          {/* Placeholder routes for creation/edit pages */}
          <Route path="/mesas/novo" element={<Placeholder title="Criar nova mesa" />} />
          <Route path="/utilizadores/novo" element={<Placeholder title="Adicionar utilizador" />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

function Placeholder({ title }) {
  return (
    <div className="bg-white border rounded p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">Página em construção — aqui você terá o formulário para criar e editar.</p>
    </div>
  );
}
