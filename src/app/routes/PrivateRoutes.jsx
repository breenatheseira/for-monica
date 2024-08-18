import { useContext, useEffect } from "react"
import SessionContext from "../../components/context/SessionContext.jsx"
import { Navigate, Outlet } from "react-router-dom";

export default PrivateRoutes = () => {
  const currentSession = useContext(SessionContext);
  const { session } = currentSession;

  return session.token ? <Outlet /> : <Navigate to='login' replace />
}