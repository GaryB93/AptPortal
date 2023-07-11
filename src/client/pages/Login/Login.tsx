import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Login.module.scss';
import Header from '../components/Header';

const Login = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = ():void => {

  };

  return (
    <>
      <Header displayNav={false}/>
      <form className={style.loginForm} onSubmit={handleSubmit}>
        <h1>Welcome</h1>
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