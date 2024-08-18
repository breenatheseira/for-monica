import { useState, useEffect } from 'react';
import { useSession } from '../../hooks/useSession.jsx'
import { Navigate, Outlet } from "react-router-dom";

export default PrivateRoutes = () => {
  const { session, getToken } = useSession();
  const [token, setToken] = useState(session.token)

  useEffect(()=>{
    console.log('session.token: ', session.token)
    setToken(getToken)
  }, [session.token])

  return token ? <Outlet /> : <Navigate to='login' replace />
}