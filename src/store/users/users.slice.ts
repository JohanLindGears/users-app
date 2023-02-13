import { createSlice } from '@reduxjs/toolkit';

import { InitialState } from './types';
import { fetchUserDetails, fetchUsers } from './users.actions';

const initialState: InitialState = {
  users: [],
  selectedUser: undefined,
  isLoading: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(fetchUserDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedUser = action.payload;
    });
    builder.addCase(fetchUserDetails.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default usersSlice.reducer;
