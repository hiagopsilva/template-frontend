/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import { Provider } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';

import Routes from './routes';
import { global as GlobalStyles } from './theme';

const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
};
const App: React.FC = () => (
  // <Provider {...stores}>
  <>
    <Routes />
    <GlobalStyles />
  </>
  // </Provider>
);

export default App;
