import React, { useState } from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = ({ includeNav }: {includeNav: boolean}): JSX.Element => {
  const [showNav, setShowNav] = useState(false);

  const handleMenuClick = () => {
    if (showNav) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  if (includeNav) {
    return (
      <header className={style.header}>
        <div className={style.logo}>
          <h1>Vista Pointe</h1>
        </div>
        <IconContext.Provider value={{ size: '30px' }}>
          <button className={style.menuIcon} onClick={handleMenuClick}>
            {showNav ? <AiOutlineClose/> : <AiOutlineMenu/>}
          </button>
        </IconContext.Provider>
        <nav className={showNav ? style.showNav : style.hideNav}>
          <NavLink to=''>Home</NavLink>
          <NavLink to='profile'>Profile</NavLink>
          <button>Logout</button>
        </nav>
      </header>
    )
  } else {
    return (
      <header className={style.header}>
        <div className='logo'>
          <h1>Vista Pointe</h1>
        </div>
      </header>
    )
  }
};

export default Header;