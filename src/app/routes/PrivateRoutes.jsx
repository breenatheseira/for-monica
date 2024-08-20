import { useSession } from '../../hooks/useSession.jsx'
import { Navigate, Outlet } from "react-router-dom";

export default PrivateRoutes = () => {
  const { session } = useSession();

  return session.token ? <Outlet /> : <Navigate to='/' replace />
}