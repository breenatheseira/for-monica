import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
  Route
} from 'react-router-dom';

import Login from './routes/Login.jsx';
import Scraper from './routes/Scraper.jsx';
import LinkShortener from './routes/LinkShortener.jsx';
import Layout from './Layout.jsx'
import SessionProvider from '../components/context/SessionProvider.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';

const basePath = process.env.URL_PATH;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Layout/>}>
        <Route index element={<Login />} />
          <Route element={<PrivateRoutes />}>
          <Route path='edm-scraper' element={<Scraper />} />
          <Route path='link-shortener' element={<LinkShortener />} />
        </Route>
      </Route>
      <Route path='*' element={<Navigate to='/' replace />} />
    </Route>
  ),
  {
    basename: basePath
  }
)

export default function App() {
  return (
    <SessionProvider>
      <RouterProvider router={router} />
    </SessionProvider>
  )
}