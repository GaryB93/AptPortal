import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Header includeNav={true}/>
      <main>
        <Outlet />
      </main>
    </>
  )
};

export default Home;