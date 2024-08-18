import SessionContext from './SessionContext';
import React, { useEffect, useMemo } from 'react';
import api from '../../utils/api';
import { useSessionStorage } from '../../hooks/useSessionStorage';

export default SessionProvider = ({ children }) => {
  const [session, setSession] = useSessionStorage('session', {})
  console.log('session: ', session)
  const { token, serverStatus } = session

  const setToken = async (data) => {
    console.log('setToken: ', data)
    setSession({
      ...session,
      token: data
    })
  }

  const setServerStatus = async (data) => {
    console.log('serverIsLive')
    setSession({
      ...session,
      serverStatus: data
    })
  }
  
  const isServerUp = async () => {
    if(!serverStatus){
      try {
        const response = await api.wakeServer()
        if(response.status == 'ok'){
          console.log('setting server status')
          return await setServerStatus(true)
        }
        throw new Error(response.statusText)
      } catch (error) {
        console.error(error.status + ' ' + error.message)
        console.error(error.stack)
        return await setServerStatus(false)
      }
    }
  }

  useEffect(() => {
    // is the server awake yet
    isServerUp()
  })

  const currentSession = useMemo(() => ({
    session,
    setToken,
    isServerUp,
  }), [session])

  return (
    <SessionContext.Provider value={currentSession}>
      {children}
    </SessionContext.Provider>
  )
}