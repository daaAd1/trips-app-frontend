import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await Auth.signIn(email, password);
      alert('Logged in');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Password</p>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <br />
        <br />
        <button disabled={!validateForm()} type="submit">
          Login
        </button>
      </form>
      <br />
      <br />
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
