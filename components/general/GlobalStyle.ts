import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.colors.font};
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.brand};
    font-weight: 400;
    background: ${({ theme }) => theme.colors.backgroundColor};
    background-size: cover;
    background-position: center;
    background-repeat: repeat-y;
    overflow-x: hidden;
  }

  #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  &::selection {
    color: ${({ theme }) => theme.colors.brand};
    text-shadow: none;
    background: transparent;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.title};
  }

  h1 {
    font-size: 3.4rem;
    line-height: 1.5;
  }

  h2 {
    font-size: 3.2rem;
    line-height: 1.5;
  }

  h3 {
    font-size: 3rem;
    line-height: 1.5;
  }

  h4 {
    font-size: 2.4rem;
    line-height: 1.5;
  }

  h5 {
    font-size: 2.2rem;
    line-height: 1.5;
  }

  h6 {
    font-size: 2rem;
    line-height: 1.5;
  }

  p {
    margin-top: 0;
  }

  button, a {
    color: ${({ theme }) => theme.colors.font};
    font-family: ${({ theme }) => theme.fonts.brand};
  }
`
