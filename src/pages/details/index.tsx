import './details.scss';

import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch } from 'src/app/rootStore';
import { ROUTE } from 'src/constants/routes';
import { fetchUserDetails, userDetailsSelector } from 'src/store/users';

export const UserDetails: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const selectedUser = useSelector(userDetailsSelector);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserDetails(id!));
  }, []);

  const onClickReturn = useCallback(() => {
    navigate(ROUTE.DEFAULT);
  }, []);

  return (
    <header>
      <h3>{selectedUser?.name}</h3>
      <p>{selectedUser?.username}</p>
      <p>Email: {selectedUser?.email}</p>

      <h4>Company</h4>
      <p>{selectedUser?.company?.name}</p>

      <button className="return-button" onClick={onClickReturn}>
        Return
      </button>
    </header>
  );
};
