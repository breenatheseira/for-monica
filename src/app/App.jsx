import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';

import Login from '../features/auth/Login.jsx';
import Scraper from '../features/listings/Scraper.jsx';
import LinkShortener from '../features/posts/LinkShortener.jsx';

const basePath = process.env.URL_PATH;

const AppLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex-none'>
        <Header />
      </div>
      <div className='grow'>
        <Outlet />
      </div>
      <div className='flex-none'>
        <Footer />
      </div>
    </div>
  )
}

const router = createBrowserRouter([
    { 
      path: '/', 
      element: <AppLayout />,
      children: [
        { path: 'scraper', element: <Scraper />},
        { path: 'link-shortener', element: <LinkShortener />},
      ]
    },
    { path: '*', element: <Login />},
  ],
  {
    basename: basePath
  }
)

export default function App() {
  return <RouterProvider router={router} />
}