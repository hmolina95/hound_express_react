import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";

const GlobalStyles = createGlobalStyle `
    ${reset}
    
    body {
        font-family: 'Open Sans', sans-serif;
    }
    
    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;