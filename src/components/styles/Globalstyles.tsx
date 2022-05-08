import { createGlobalStyle } from "styled-components";

import theme from "../../const/theme";

export type BasicStyle = {
  theme: typeof theme;
};

const GlobalStyles = createGlobalStyle<BasicStyle>`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-size: 62.5;
}

body {
    background: ${({ theme }) => theme.colors.white};
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    margin: 0;
    padding: 0;

    // TODO Media query voor laptop en vervolgens voor tablet

    @media(max-width: ${({ theme }) => theme.laptop}){
        font-size: 1.1rem;
    }

    @media(max-width: ${({ theme }) => theme.tablet}){
        font-size: .8rem;
    }
}
`;

export default GlobalStyles;
