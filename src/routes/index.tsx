import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePg } from '../pages/HomePg';

import { IRoute, RouteList } from './routeList';

export const AppRoutes: React.FC = () => {
  const renderRoutes = (routes: IRoute[]) => {
    return routes.map(({ path, element: Element }) => {
      return <Route key={`route-${path}`} path={path} element={Element} />;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePg />} />
        {renderRoutes(RouteList)}
      </Routes>
    </BrowserRouter>
  );
};
