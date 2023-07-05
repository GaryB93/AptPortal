import React from 'react';
import '@types/react';
import '@types/react-dom';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: ,
  }
]);

// Render React Router component
// cast potential for DOM node not returned as HTMLElement
const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);