import { Navigate, useLocation } from "react-router";
import { useAuth } from "./AuthContext";

function ProtectedRoute({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;
