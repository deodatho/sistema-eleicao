import { Navigate } from "react-router-dom";

/**
 * ProtectedRoute simples: verifica um "isAuthenticated" falso por enquanto.
 * Depois substitui por contexto/auth real (ex: react-query + cookie/JWT).
 */
export default function ProtectedRoute({ children, requireAdmin = false }) {
  // TODO: trocar por contexto/estado real
  const isAuthenticated = !!localStorage.getItem("fake_auth_token");
  const userRole = localStorage.getItem("fake_user_role") || "voter";

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && userRole !== "admin") {
    return <div className="p-6 bg-white rounded shadow">Acesso negado — precisas de permissões de administrador.</div>;
  }

  return children;
}
