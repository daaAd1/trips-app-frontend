import React from 'react';
import styled from 'styled-components';
import { FlexRow } from './Flex';

const Wrapper = styled(FlexRow)`
  margin-bottom: 15px;
  max-width: 300px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 700;
  color: #555;
`;

const Input = styled.input`
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  padding: 0 16px;
  height: 45px;
  background-color: #f7f7f7;
  color: #444444;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  width: 100%;

  /* -webkit-box-shadow: 3px 3px 2px #777;
  -moz-box-shadow: 3px 3px 2px #777;
  box-shadow: 3px 3px 2px #777; */

  &:focus {
    outline: none;
    border: 1px solid #444444;
  }
`;

export default ({ label, onChange, type, name, value, ...other }) => (
  <Wrapper>
    <Label>{label}</Label>
    <Input onChange={onChange} type={type} name={name} value={value} {...other} />
  </Wrapper>
);
