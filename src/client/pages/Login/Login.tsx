import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <form>
        <label>
          Email
          <input type='email' />
        </label>
        <label>
          Password
          <input type='password' />
        </label>
        <p>
          Invalid email or password
        </p>
        <input type='submit' value='Log in' />
        <Link to='signup'>Sign up</Link>
      </form>
    </div>
  )
};

export default Login;