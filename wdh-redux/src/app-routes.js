import React, { lazy } from 'react';

const NotFound = lazy(() => import('./domain/error/NotFound'));

const routes = [
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes.map(route => ({
  ...route,
  element: route.element,
}));
