import SessionContext from './SessionContext';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';

export default SessionProvider = ({ children }) => {
  const [token, setToken] = useState(window.sessionStorage.getItem('token'))
  const [serverStatus, setServerStatus] = useState(window.sessionStorage.getItem('serverStatus'))
  const navigate = useNavigate()

  useEffect(() => {
    // server is not awake yet
    if(serverStatus == null || serverStatus == 'false'){
      api.wakeServer()
        .then(response => {
          setServerStatus('true')
        })
        .catch(error => {
          console.log(error.message)
          console.log(error.status)
          setServerStatus('false')
        })
    }

    // sessionStorage is null on the first load
    //   all values are stringified too
    if(token == null){
      navigate('/login', { replace: true })
    }
  })

  return (
    <SessionContext.Provider value={{ token, setToken, serverStatus, setServerStatus }}>
      {children}
    </SessionContext.Provider>
  )
}