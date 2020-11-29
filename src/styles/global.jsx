import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
html {
  font-size: 16px;
}

body {
    font-size: 1rem;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.foregroundColor};
    font-family: 'Jost', sans-serif;
    transition: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    color: ${({ theme }) => theme.foregroundColor};
    text-decoration: none;
    font-weight: 500;
}

@keyframes scroll {
	0% {
		transform: translateY(0);
	}
	30% {
		transform: translateY(60px);
	}
}

svg #wheel {
	animation: scroll ease 2s infinite;
}
`
