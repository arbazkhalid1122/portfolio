import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease-in-out;
  }
  .card {
    background-color: ${(props) => props.theme.cardBackground};
    padding: 20px;
    border-radius: 10px;
  }
  button {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.text};
    border: none;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
  }
  button:hover {
    background-color: ${(props) => props.theme.secondary};
  }
`;
