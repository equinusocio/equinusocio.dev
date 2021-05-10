import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import 'what-input';
import './_app.css';
import '@/styles/tokens.css';
import '@/styles/light.css';
import '@/styles/dark.css';
import '@/styles/nprogress.css';
import { Meta } from '@/components/Meta';

// export function reportWebVitals(metric: any) {
//   // These metrics can be sent to any analytics service
//   console.log(metric);
// }

const App = ({ Component, pageProps }: any) => {
  useEffect(() => {
    const routeChangeStart = () => {
      NProgress.start();
    };

    const routeChangeEnd = () => {
      NProgress.done();
    };

    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeEnd);
    Router.events.on('routeChangeError', routeChangeEnd);
    return () => {
      Router.events.off('routeChangeStart', routeChangeStart);
      Router.events.off('routeChangeComplete', routeChangeEnd);
      Router.events.off('routeChangeError', routeChangeEnd);
    };
  }, []);

  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  );
};

export default App;
