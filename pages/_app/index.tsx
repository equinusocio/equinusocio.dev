import React from 'react';
import 'what-input';
import './_app.css';
import '@/styles/tokens.css';
import '@/styles/light.css';
import '@/styles/dark.css';
import { Meta } from '@/components/Meta';

// export function reportWebVitals(metric: any) {
//   // These metrics can be sent to any analytics service
//   console.log(metric);
// }

const App = ({ Component, pageProps }: any) => (
  <>
    <Meta />
    <Component {...pageProps} />
  </>
);

export default App;
