import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FlexRow } from '../components/Default/Flex';

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 30px;
`;

const TitleWithIcon = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #444444;
  margin: 0;
`;

const PlaneIcon = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 10px;
`;

const TitleText = styled.p`
  margin: 5px 0 0;
  color: #444444;
  font-size: 14px;
  font-weight: 300;
`;

export default () => (
  <StyledLink to="/">
    <TitleWithIcon>
      <FlexRow>
        <PlaneIcon src="icons/plane_ios.svg" />
        <Title>trips</Title>
      </FlexRow>
      <TitleText>track your trips with ease</TitleText>
    </TitleWithIcon>
  </StyledLink>
);
