import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2E2E2E;
    --darker: #474335;
    --white: #fff;
    --off-white: #FFFBF3;
    --primary-light: #FDE8CE;
    --primary-alt: #C44D1D;
    --secondary: #4FA2A9;
    --background: #F6F1E5;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
    color: var(--darker);
    line-height: 1.15;
  }
  a {
    font-weight: 500;
    text-decoration: none;
    color: var(--darker);
  }
  button {
    font-weight: 500;
    color: var(--darker);
  }
  button:focus, button:hover {
    outline: none;
  }

  // Section
  section {
    margin: 3rem 0 5rem 0;
  }
  .wrapper {
    margin: 2rem 0;
  }
  // font sizes
  html {
    font-size: 16px;
    background: var(--background);
  }
  h1 {
    font-size: 2.25rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
    white-space: pre-wrap;
  }
  .btn {
    text-align: center;
    background: var(--primary-alt);
    color: #fff;
    padding: 10px 30px;
    border-radius: 4px;
    width: 100%;
  }
  .btn-primary {
    background: var(--primary-alt);
  }
  .btn-secondary {
    background: var(--secondary);
  }
  @media (min-width: 640px) {
    section {
      margin: 5rem 0;
    }
    .wrapper {
      margin: 4rem 0;
    }
    html {
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    section {
      margin: 7rem 0;
    }
    html {
      font-size: 18px;
    }
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
`

export default GlobalStyles
