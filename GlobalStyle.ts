import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease-in-out;
  }

  .intro, .container {
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.text};
    animation: fadeIn 0.8s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  button {
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.text};
    border: none;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    
    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }
  }

  .wDeveloper, .skills, .iconText, .containerChild {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    box-shadow: 0px 2px 10px 2px ${(props) => props.theme.background};
    padding: 10px;
    border-radius: 10px;
    margin-top: 5px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
    }
  }

  .cllaaa svg {
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.background};
    box-shadow: 0px 1px 7px 1px ${(props) => props.theme.background};
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0px); }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.heading};
    animation: fadeIn 0.5s ease-in-out;
  }

  p, span, li {
    color: ${(props) => props.theme.text};
  }

  .introHeading {
    color: ${(props) => props.theme.heading};
    font-weight: bold;
  }

`;
