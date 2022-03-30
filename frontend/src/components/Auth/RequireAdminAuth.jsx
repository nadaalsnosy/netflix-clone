import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAdminAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.user?.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to={"/home"} state={{ from: location }} replace />
  );
};

export default RequireAdminAuth;
