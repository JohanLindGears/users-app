import './users.scss';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from 'src/app/rootStore';
import { UserForm } from 'src/components/Users';
import {
  fetchUsers,
  isLoadingSelector,
  usersListSelector,
} from 'src/store/users';

export const Users: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const usersList = useSelector(usersListSelector);
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <header>
      <div className="users-menu">
        <UserForm />

        <h3>Users</h3>
        {usersList?.map((u) => (
          <p key={u.id} onClick={() => navigate(`/user/${u.id}`)}>
            {u.name}
          </p>
        ))}
      </div>
    </header>
  );
};
