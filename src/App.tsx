import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { global as GlobalStyles } from './theme';
import Routes from './routes/index';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default App;
