import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background: ${props => props.theme.color1};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: Poppins, sans-serif;
    }
    
    button {
        cursor: pointer;
    }
`;
