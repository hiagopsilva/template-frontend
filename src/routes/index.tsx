import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { inject, observer } from 'mobx-react';

import { Home } from '~/scenes';

import Guest from './guest';
import { Routing } from './routing';

const RoutesContainer: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export { Routing };
// export default inject('routing')(observer(RoutesContainer));
export default RoutesContainer;
