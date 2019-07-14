import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';
import { createHashHistory } from 'history';
import { Auth } from 'aws-amplify';
import GlobalStyles from '../globalStyles';
import Routes from '../Routes';
import AppTitle from '../components/AppTitle';
import AppMenu from '../components/AppMenu';

const Wrapper = styled.div`
  margin: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
`;

const ChildrenWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  useEffect(() => {
    async function getCurrentUser() {
      try {
        await Auth.currentSession();
        setIsLoggedIn(true);
      } catch (e) {
        if (e !== 'No current user') {
          alert(e);
        }
      }

      setIsLoggingIn(false);
    }
    getCurrentUser();
  });

  const history = createHashHistory({
    basename: process.env.PUBLIC_URL,
  });

  const childProps = {
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    !isLoggingIn && (
      <>
        <GlobalStyles />
        <Router history={history}>
          <Wrapper>
            <Header>
              <AppTitle />
              <AppMenu childProps={childProps} />
            </Header>
            <ChildrenWrapper>
              <Routes childProps={childProps} />
            </ChildrenWrapper>
          </Wrapper>
        </Router>
      </>
    )
  );
}

export default App;
