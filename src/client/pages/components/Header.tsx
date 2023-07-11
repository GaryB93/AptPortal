import React from 'react';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = ({ displayNav }: {displayNav: boolean}): JSX.Element => {
  if (displayNav) {
    return (
      <header className={style.header}>
        <div className='logo'>
          <img src='../../assets/images/Logo.png' alt='AptPortal logo' />
          <h1>Vista Pointe</h1>
        </div>
        <nav>
          <Link to='home'>Home</Link>
          <Link to='profile'>Profile</Link>
          <button>Logout</button>
        </nav>
      </header>
    )
  } else {
    return (
      <header className={style.header}>
        <div className='logo'>
          <img src='../../assets/images/Logo.png' alt='AptPortal logo' />
          <h1>Vista Pointe</h1>
        </div>
      </header>
    )
  }
};

export default Header;