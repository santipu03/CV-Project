import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    body {
      font-size: 0.7rem;
    }
  }

`

export default GlobalStyles
