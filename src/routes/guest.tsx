import React from 'react';
import { Location } from 'history';
import { Route } from 'react-router-dom';

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
