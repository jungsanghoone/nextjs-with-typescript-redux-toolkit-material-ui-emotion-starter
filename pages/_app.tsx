/* eslint-disable import/no-named-as-default */
import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { NextIntlProvider, IntlErrorCode, IntlError } from 'next-intl';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import theme from '../components/theme';
import wrapper from '../store';
import Layout from '../components/Layout';
import LeftSideLayout from '../components/LeftSideLayout';

const cache = createCache({ key: 'css', prepend: true });
cache.compat = true;

interface errorProps extends IntlError {
  error: IntlError;
}
interface getMessageProps extends errorProps {
  namespace?: string;
  key: string;
}
function onError(error: errorProps): void {
  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    console.error(error);
  } else {
    console.error('error tracking');
  }
}

function getMessageFallback({ namespace, key, error }: getMessageProps) {
  const path = [namespace, key].filter(part => part != null).join('.');
  console.log('error.code', error.code);
  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    return `${path} is not yet translated`;
  }
  return `developer: please fix this message: ${path}`;
}

function MyApp(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;
  return (
    <CacheProvider value={cache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <NextIntlProvider
          messages={pageProps.messages}
          now={new Date(pageProps.now)}
          timeZone="Asia/Seoul"
          onError={onError}
          getMessageFallback={getMessageFallback}
        >
          <CssBaseline />
          <LeftSideLayout />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextIntlProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default wrapper.withRedux(MyApp);
