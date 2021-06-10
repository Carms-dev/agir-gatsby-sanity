import { createGlobalStyle } from 'styled-components';
import TajawalRegular from '../assets/fonts/Tajawal/Tajawal-Regular.ttf'
import TajawalMedium from '../assets/fonts/Tajawal/Tajawal-Medium.ttf'
import TajawalBold from '../assets/fonts/Tajawal/Tajawal-Bold.ttf'

const Typography = createGlobalStyle`
  @font-face {
    font-family: "Tajawal";
    src: url(${TajawalRegular});
    font-weight: 400;
  }

  @font-face {
    font-family: "Tajawal";
    src: url(${TajawalMedium});
    font-weight: 500;
  }

  @font-face {
    font-family: "Tajawal";
    src: url(${TajawalBold});
    font-weight: 700;
  }

  html {
    font-family: 'Tajawal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export default Typography
