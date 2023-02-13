import { RootState } from 'src/app/rootStore';

import { createSelector } from '@reduxjs/toolkit';

const getState = (state: RootState) => state.users;

export const usersListSelector = createSelector(
  getState,
  (state) => state.users
);

export const userDetailsSelector = createSelector(
  getState,
  (state) => state.selectedUser
);

export const isLoadingSelector = createSelector(
  getState,
  (state) => state.isLoading
);
