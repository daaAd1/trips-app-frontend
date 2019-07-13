import React from 'react';
import styled from 'styled-components';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
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
`;

function App() {
  const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
  });

  return (
    <>
      <GlobalStyles />
      <Router history={history}>
        <Wrapper>
          <Header>
            <AppTitle />
            <AppMenu />
          </Header>
          <ChildrenWrapper>
            <Routes />
          </ChildrenWrapper>
        </Wrapper>
      </Router>
    </>
  );
}

export default App;
