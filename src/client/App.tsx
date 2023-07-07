import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';

// Router for client side rendering of separate pages
const router = createBrowserRouter([
  { // login page
    path: '/',
    element: <Login />,
  },
  { // signup page
    path: 'signup',
    element: <Signup />,
  },
  { // home page
    path: 'home',
    element: <Home />,
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