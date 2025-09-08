import React from 'react';
import AppRouter from './components/Router';
import GoogleAnalytics from './components/GoogleAnalytics';

function App() {
  return (
    <>
      <GoogleAnalytics />
      <AppRouter />
    </>
  );
}

export default App;