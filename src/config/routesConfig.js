import React from 'react';
import Layout from '../layouts';
import KoreanQuotes from '../pages/KoreanQuotes';
import EnglishQuotes from '../pages/EnglishQuotes';
import { Navigate } from 'react-router-dom';

const routesConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/kr" replace />,
      },
      {
        path: 'kr',
        element: <KoreanQuotes />,
      },
      {
        path: 'en',
        element: <EnglishQuotes />,
      },
    ],
  },
];

export default routesConfig;
