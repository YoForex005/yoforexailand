import React, { Suspense } from 'react';
import AppRouter from './components/Router';
const GoogleAnalytics = React.lazy(() => import('./components/GoogleAnalytics'));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GoogleAnalytics />
      </Suspense>
      <AppRouter />
    </>
  );
}

export default App;