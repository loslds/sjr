import React from 'react';

import { AppRoutes } from './routes';

import GlobalStyles from './styles/globals';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />
    </>
  );
};

export default App;