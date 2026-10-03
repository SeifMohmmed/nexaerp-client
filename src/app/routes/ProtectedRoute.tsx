import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../features/auth/services/AuthState";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const accessToken = useAuthStore((state) => state.accessToken);

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
