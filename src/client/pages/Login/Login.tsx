import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Login.module.scss';

const Login = ():JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = ():void => {

  };

  return (
      <form className={style.loginForm} onSubmit={handleSubmit}>
        <h1>Welcome</h1>
        <label>
          Email
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
          Password
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <p>
          Invalid email or password
        </p>
        <input type='submit' value='Log in' />
        <Link to='signup'>Sign up</Link>
      </form>
  )
};

export default Login;