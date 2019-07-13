import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../components/Default/Flex';
import Input from '../components/Default/Input';
import { PrimaryButton } from '../components/Default/Buttons';

const Wrapper = styled(FlexColumn)``;

const StyledTitle = styled.h1`
  margin: 0 0 15px 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 30px;
`;

const RegisterWrapper = styled(FlexRow)`
  justify-content: center;
`;

const RegisterText = styled.p`
  margin: 0 4px 0 0;
`;

const LoginButton = styled(PrimaryButton)`
  margin-top: 12px;
`;

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
    <Wrapper>
      <StyledTitle>Login</StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          autoFocus
          label={'Email'}
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label={'Password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
        />
        <LoginButton disabled={!validateForm()} type="submit">
          Login
        </LoginButton>
      </StyledForm>
      <RegisterWrapper>
        <RegisterText>Don't have an account yet? </RegisterText>
        <Link to="/register">Register here</Link>
      </RegisterWrapper>
    </Wrapper>
  );
};

export default Login;
