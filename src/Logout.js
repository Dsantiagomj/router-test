import { Navigate } from "react-router";
import { useAuth } from "./AuthContext";

function Logout() {
  const auth = useAuth();

  auth.logout();

  return <Navigate to="/login" state={{ from: "/" }} replace />;
}

export default Logout;
