import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routesConfig from './config/routesConfig';

function App() {
  const routes = createBrowserRouter(routesConfig);

  return <RouterProvider router={routes} />;
}

export default App;
