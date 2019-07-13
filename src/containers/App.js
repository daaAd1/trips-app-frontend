import React from 'react';
import styled from 'styled-components';
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
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header>
          <AppTitle />
          <AppMenu />
        </Header>
        <ChildrenWrapper>
          <Routes />
        </ChildrenWrapper>
      </Wrapper>
    </>
  );
}

export default App;
