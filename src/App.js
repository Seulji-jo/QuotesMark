import React, { Suspense } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routesConfig from './config/routesConfig';

function App() {
  const routes = createBrowserRouter(routesConfig);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
