import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease-in-out;
  }
  .intro {
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.text};
  }
    .container{
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.text};
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

  .iconText {
background-color: ${(props) => props.theme.cardBackground};
box-shadow: 0px 1px 7px 1px ${(props) => props.theme.background};
padding: 10px;
  }

  .wDeveloper {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    box-shadow: 0px 1px 7px 1px ${(props) => props.theme.background};
    padding: 10px;
    border-radius: 10px;
    margin-top: 5px;
}

.nav1{
  background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
}

.skills{
  background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
}

.containerChild{
    background-color: ${(props) => props.theme.cardBackground};
  box-shadow: 0px 1px 7px 1px ${(props) => props.theme.background};
}
`;
