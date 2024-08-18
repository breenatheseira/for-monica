import React from 'react';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Login from './routes/Login.jsx';
import Scraper from './routes/Scraper.jsx';
import LinkShortener from './routes/LinkShortener.jsx';
import Layout from './Layout.jsx'

const basePath = process.env.URL_PATH;

const router = createBrowserRouter(
  [
    { 
      path: '/', 
      element: <Layout />,
      children: [
        { path: 'edm-scraper', element: <Scraper />},
        { path: 'link-shortener', element: <LinkShortener />},
      ],
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