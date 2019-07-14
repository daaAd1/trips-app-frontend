import styled from 'styled-components';

export const PrimaryButton = styled.button`
  max-width: 300px;
  width: 100%;
  color: #444444;
  font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  padding: 8px 16px;
  background-color: transparent;
  border: 1px solid #444444;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  justify-content: center;

  -webkit-box-shadow: 3px 3px 2px #777;
  -moz-box-shadow: 3px 3px 2px #777;
  box-shadow: 3px 3px 2px #777;

  &:disabled {
    opacity: 0.3;
  }

  &:hover {
    background-color: #444444;
    color: white;
  }

  &:active {
    background-color: #444444;
    color: white;
  }
`;
