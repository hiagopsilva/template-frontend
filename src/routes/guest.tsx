/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Route } from 'react-router-dom';

type Props = {
  path: string;
  element: any;
  exact?: boolean;
};

const PublicRoute: React.FC<Props> = ({ element: Element, ...rest }) => (
  <Route element={<Element />} {...rest} />
);

export default PublicRoute;
