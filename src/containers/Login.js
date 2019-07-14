import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../components/Default/Flex';
import Input from '../components/Default/Input';
import { PrimaryButton } from '../components/Default/Buttons';
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

const RegisterWrapper = styled(FlexRow)`
  justify-content: center;
`;

const RegisterText = styled.p`
  margin: 0 4px 0 0;
`;

const LoginButton = styled(PrimaryButton)`
  margin-top: 12px;
`;

const LoginIcon = styled.img`
  width: 26px;
  margin-left: 10px;
`;

const LoggingLoader = styled(Loader)`
  margin-left: 5px;
`;

const Login = ({ history, setIsLoggedIn, isLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      await Auth.signIn(email, password);
      setLoading(false);
      setIsLoggedIn(true);
      history.push('/');
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  return (
    <Wrapper>
      <StyledTitle>Login</StyledTitle>
      {error !== '' && <ErrorMessage>Error: {error}</ErrorMessage>}
      <StyledForm onSubmit={handleSubmit}>
        <Input
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
          {loading ? (
            <>
              {'Logging in ...'}
              <LoggingLoader />
            </>
          ) : (
            <>
              {'Login'}
              <LoginIcon src="icons/login_ios.svg" alt="login-icon" />
            </>
          )}
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
