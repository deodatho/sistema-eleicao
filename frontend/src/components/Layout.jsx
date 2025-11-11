import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">EleiçãoApp</Link>
          <nav className="flex gap-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <Link to="/vote" className="hover:underline">Votar</Link>
            <Link to="/admin" className="hover:underline">Admin</Link>
            <Link to="/login" className="ml-2 px-3 py-1 bg-white text-blue-600 rounded">Login</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} EleiçãoApp — feito por ti
      </footer>
    </div>
  );
}
