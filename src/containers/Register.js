import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateForm = () => {
    return email.length > 0 && password.length > 0 && password === confirmPassword;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newUser = await Auth.signUp({
        username: email,
        password: password,
      });
      console.log({ newUser });
      alert('Signed in');
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
        <p>Confirm password</p>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
        />
        <br />
        <br />
        <button disabled={!validateForm()} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
