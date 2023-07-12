import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import style from '../Login/Login.module.scss';

const Signup = ():JSX.Element => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {

  };

  return (
    <>
      <Header displayNav={false}/>
      <form className={style.loginForm} onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <label htmlFor='firstname'>First Name</label>
        <input type='text' id='firstname' name='firstname' value={firstName} required onChange={(e) => setFirstName(e.target.value)}></input>
        <label htmlFor='lastname'>Last Name</label>
        <input type='text' id='lastname' name='lastname' value={lastName} required onChange={(e) => setLastName(e.target.value)}></input>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' value={email} required onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' value={password} required onChange={(e) => setPassword(e.target.value)}/>
        <label htmlFor='retypePassword'>Retype Password</label>
        <input type='password' id='retypePassword' name='retypePassword' value={passwordCheck} required onChange={(e) => setPasswordCheck(e.target.value)}/>
        <p>
          {showError && 'This email already has an account'}
        </p>
        <button type='submit' className='primary-btn'>Sign up</button>
        <p>
          OR
        </p>
        <Link to='/' className='secondary-btn'>Login</Link>
      </form>
    </>
  )
};

export default Signup;