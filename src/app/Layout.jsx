import React, { useEffect } from 'react';
import {
  Outlet,
} from 'react-router-dom';

import api from '../utils/api.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SessionProvider from '../components/context/SessionProvider.jsx';

export default Layout = () => {

  // const navigate = useNavigate();

  // useEffect(() => {
  //   api.wakeServer()
  //     .then(response => {
  //       console.log(response)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
    
  //   if(window.sessionStorage.getItem('token') === null){
  //     navigate('/login', { replace: true })   
  //   }
  // }, [])

  return (
    <SessionProvider>
      <div className='flex flex-col h-screen'>
        <div className='flex-none'>
          <Header />
        </div>
        <div className='grow bg-slate-200 flex justify-center'>
          <div className='w-full max-w-5xl'>
            <Outlet />
          </div>
        </div>
        <div className='flex-none'>
          <Footer />
        </div>
      </div>
    </SessionProvider>
  )
}