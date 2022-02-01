import { Navigate, useLocation } from "react-router";
import { useAuth } from "./AuthContext";

function Logout() {
  const auth = useAuth();
  const location = useLocation();

  auth.logout();

  return <Navigate to="/login" state={{ from: "/" }} replace />;
}

export default Logout;
