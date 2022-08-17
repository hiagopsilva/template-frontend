import React from 'react';
import { inject, observer } from 'mobx-react';
import { Routes } from 'react-router-dom';
import { Home } from '~/scenes';
import Guest from './guest';
import { Routing } from './routing';

const RoutesContainer: React.FC = () => (
  <Routes>
    <Guest path={Routing.HOME} element={<Home />} />
  </Routes>
);

export { Routing };
export default inject('routing')(observer(RoutesContainer));
