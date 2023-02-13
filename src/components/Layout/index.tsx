import React from 'react';
import { Outlet } from 'react-router-dom';

import './layout.scss';
import { useSelector } from 'react-redux';
import { usersListSelector } from 'src/store';

interface Props {
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  const usersList = useSelector(usersListSelector);

  const longestName = usersList?.reduce((acc, curr) => {
    if (curr.name.length > acc.length) {
      return curr.name;
    }

    return acc;
  }, '');

  return (
    <div className="layout">
      <div className="layout-menu">
        <span>Longest name:</span>
        <span>{longestName}</span>
      </div>
      <div className="layout-content">{children ?? <Outlet />}</div>
    </div>
  );
};
