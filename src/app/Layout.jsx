import React from 'react';
import {
  Outlet,
} from 'react-router-dom';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function Layout() {

  return (
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
  )
}