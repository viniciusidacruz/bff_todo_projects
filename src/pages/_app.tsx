import type { AppProps } from 'next/app';

import '@styles/resetCSS.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
