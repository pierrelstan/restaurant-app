import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Layout from '@components/common/Layout/Layout';
import theme from '@styles/theme/theme';
import 'normalize.css/normalize.css';
import createEmotionCache from '@utility/createEmotionCache';
import '@styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
  const emotionCache = clientSideEmotionCache;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
