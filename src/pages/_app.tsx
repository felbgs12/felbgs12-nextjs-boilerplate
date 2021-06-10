import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

import GlobalStyle from '../styles/GlobalStyle';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
