import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
html {
  font-size: 16px;
}

body {
    font-size: 1rem;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.foregroundColor};
    font-family: aktiv-grotesk, sans-serif;
    transition: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    color: ${({ theme }) => theme.foregroundColor};
    text-decoration: none;
    font-weight: 500;
}
`
