import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Rubik', sans-serif;
  }

  select.form-control,
  textarea.form-control,
  input.form-control {
    font-size: 16px;
  }
  input[type='file'] {
    width: 100%;
  }
`;

export default GlobalStyles;
