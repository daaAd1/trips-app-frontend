import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FlexRow } from '../components/Default/Flex';

const Wrapper = styled(FlexRow)``;

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  margin-bottom: 20px;
  margin-right: 15px;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 72%;
    width: 0;
    height: 0;
    background: transparent;
    border: 2px solid transparent;
  }

  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: -8px;
    width: 0;
    height: 0;
    background: transparent;
    border: 2px solid transparent;
  }

  &:hover:before {
    animation: animateBefore 0.3s linear forwards;
  }

  &:hover:after {
    animation: animateAfter 0.3s linear forwards;
  }

  @keyframes animateBefore {
    0% {
      width: 0;
      height: 0;
      border-top-color: #262626;
      border-bottom-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
    }
    50% {
      width: 35%;
      height: 0;
      border-top-color: #262626;
      border-bottom-color: transparent;
      border-left-color: transparent;
      border-right-color: #262626;
    }
    100% {
      width: 35%;
      height: 100%;
      border-top-color: #262626;
      border-bottom-color: transparent;
      border-left-color: transparent;
      border-right-color: #262626;
    }
  }

  @keyframes animateAfter {
    0% {
      width: 0;
      height: 0;
      border-top-color: transparent;
      border-bottom-color: #262626;
      border-left-color: transparent;
      border-right-color: transparent;
    }
    50% {
      width: 0;
      height: 100%;
      border-top-color: transparent;
      border-bottom-color: #262626;
      border-left-color: #262626;
      border-right-color: transparent;
    }
    100% {
      width: 35%;
      height: 100%;
      border-top-color: transparent;
      border-bottom-color: #262626;
      border-left-color: #262626;
      border-right-color: transparent;
    }
  }
`;

const Title = styled.p`
  font-size: 1.1em;
  text-align: center;
  color: #444444;
  margin: 0;
`;

const PlaneIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

export default () => (
  <Wrapper>
    {true && (
      <StyledLink to="/login">
        <FlexRow>
          <PlaneIcon src="icons/person_ios.svg" />
          <Title>Login</Title>
        </FlexRow>
      </StyledLink>
    )}
    {false && (
      <>
        <StyledLink to="/trips">
          <FlexRow>
            <PlaneIcon src="icons/list_ios.svg" />
            <Title>Your trips</Title>
          </FlexRow>
        </StyledLink>
        <StyledLink to="/signout">
          <FlexRow>
            <PlaneIcon src="icons/logout_ios.svg" />
            <Title>Sign out</Title>
          </FlexRow>
        </StyledLink>
      </>
    )}
  </Wrapper>
);
