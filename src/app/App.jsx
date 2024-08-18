import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';

import Login from './routes/Login.jsx';
import Scraper from './routes/Scraper.jsx';
import LinkShortener from './routes/LinkShortener.jsx';
import Layout from './Layout.jsx'

const basePath = process.env.URL_PATH;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout/>}>
        <Route path='edm-scraper' element={<Scraper />} />
        <Route path='link-shortener' element={<LinkShortener />} />
      </Route>
      <Route path='*' element={<Login />} />
    </Route>
  ),
  {
    basename: basePath
  }
)

export default function App() {
  return <RouterProvider router={router} />
}