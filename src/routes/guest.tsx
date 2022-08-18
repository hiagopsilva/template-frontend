import React from 'react';
import { Route } from 'react-router-dom';

import { Location } from 'history';

type Props = {
  element: any;
  location?: Location;
  path: string;
  exact?: boolean;
};

const PublicRoute: React.FC<Props> = ({ element: Element, ...rest }) => (
  <Route {...rest} element={<Element />} />
);

export default PublicRoute;
