import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Layout = lazy(() => import('../layouts'));
const KoreanQuotes = lazy(() => import('../pages/KoreanQuotes'));
const EnglishQuotes = lazy(() => import('../pages/EnglishQuotes'));

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
