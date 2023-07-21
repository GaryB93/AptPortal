import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Login.module.scss';
import Header from '../components/Header/Header';

const Login = ():JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = ():void => {
    // should update user context here with user information if valid
    // then navigate to home page to view news
    // if invalid credentials set showError to true to display error message
  };

  return (
    <>
      <form className={style.loginForm} onSubmit={handleSubmit}>
        <div className={style.logo}>Vista Pointe</div>
        <h1>Welcome back!</h1>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' value={email} required onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' value={password} required onChange={(e) => setPassword(e.target.value)}/>
        <p>
          {showError && 'Invalid email or password'}
        </p>
        <button type='submit' className='primary-btn'>Log in</button>
        <p>
          OR
        </p>
        <Link to='signup' className='secondary-btn'>Sign up</Link>
      </form>
    </>
  )
};

export default Login;