import React from 'react';
import { useSession } from '../../hooks/useSession.jsx'
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes(){
  const { session } = useSession();

  return session.token ? <Outlet /> : <Navigate to='/' replace />
}