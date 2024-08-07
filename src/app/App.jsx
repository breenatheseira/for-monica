import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function App() {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex-none'>
        <Header />
      </div>
      <div className='grow'>
        <h1 className='text-3xl font-bold underline'>
          Hi
        </h1>
      </div>
      <div className='flex-none'>
        <Footer />
      </div>
    </div>
  )
    
}