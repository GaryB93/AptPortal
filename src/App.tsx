import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: ,
  },
  {
    path: 'signup',
    element: ,
  },
  {
    path: 'home',
    element: ,
    children: [
      {
        path: 'news',
        element: ,
      },
      {
        path: 'activity',
        element: ,
      },
      {
        path: 'profile',
        element: ,
      },
    ]
  },
]);

const App = ():JSX.Element => {
  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  )
}

export default App;