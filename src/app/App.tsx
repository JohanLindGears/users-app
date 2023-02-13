import './app.scss';

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components';
import { ROUTE } from 'src/constants/routes';
import { UserDetails } from 'src/pages/details';
import { Users } from 'src/pages/users';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Users />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Route>

        <Route path="*" element={<Navigate to={ROUTE.DEFAULT} />} />
      </Routes>
    </div>
  );
};
