import React from 'react';
import styled from 'styled-components';
import { FlexRow } from './Flex';

const Wrapper = styled(FlexRow)`
  margin-bottom: 15px;
  max-width: 300px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 8px 16px;
  color: #444444;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  width: 100%;

  -webkit-box-shadow: 3px 3px 2px #777;
  -moz-box-shadow: 3px 3px 2px #777;
  box-shadow: 3px 3px 2px #777;
`;

export default ({ label, onChange, type, name, value, ...other }) => (
  <Wrapper>
    <Label>{label}</Label>
    <Input onChange={onChange} type={type} name={name} value={value} {...other} />
  </Wrapper>
);
