import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import Input from '../components/Default/Input';
import styled from 'styled-components';
import { PrimaryButton } from '../components/Default/Buttons';
import { FlexColumn } from '../components/Default/Flex';
import { Loader } from '../components/Default/Loader';

const Wrapper = styled(FlexColumn)``;

const StyledTitle = styled.h1`
  margin: 0 0 30px 0;
  text-align: left;
`;

const ErrorMessage = styled.p`
  color: crimson;
  margin: 0 0 15px 0;
  text-align: left;
`;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 30px;
`;

const RegisterButton = styled(PrimaryButton)`
  margin-top: 12px;
`;

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    return email.length > 0 && password.length > 0 && password === confirmPassword;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const newUser = await Auth.signUp({
        username: email,
        password: password,
      });
      setLoading(false);
      console.log({ newUser });
      alert('Signed in');
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  return (
    <Wrapper>
      <StyledTitle>Register</StyledTitle>
      {error !== '' && <ErrorMessage>Error: {error}</ErrorMessage>}
      <StyledForm onSubmit={handleSubmit}>
        <Input
          label={'Email'}
          autoFocus
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <Input
          label={'Password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
        />
        <Input
          label={'Confirm password'}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          name="confirm-password"
        />
        <RegisterButton disabled={!validateForm()} type="submit">
          {loading ? <Loader /> : 'Create an account'}
        </RegisterButton>
      </StyledForm>
    </Wrapper>
  );
};

export default Register;
