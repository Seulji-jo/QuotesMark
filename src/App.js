import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routesConfig from './config/routesConfig';

import './App.css';
import './reset.css';

function App() {
  const routes = createBrowserRouter(routesConfig);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
