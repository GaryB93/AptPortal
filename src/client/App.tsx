import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import News from './pages/Home/News';
import Activity from './pages/Home/Activity';
import Profile from './pages/Home/Profile';

// Router for client side rendering of separate pages
const router = createBrowserRouter([
  { // login page
    path: 'login',
    element: <Login />,
  },
  { // signup page
    path: 'signup',
    element: <Signup />,
  },
  { // home page
    path: '/',
    element: <Home />,
    children: [
      {
        path: '',
        element: <News />,
      },
      {
        path: 'activity',
        element: <Activity />,
      },
      {
        path: 'profile',
        element: <Profile />,
      }
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