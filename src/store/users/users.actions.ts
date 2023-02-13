import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateUserPayload } from 'src/types/User';

export const fetchUsers = createAsyncThunk('users/fetch-list', async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users?apiKey=12345678987654321'
    )
      .then((response) => response.json())
      .then((json) => json);

    return response;
  } catch (error) {
    console.error(error);
  }
});

export const fetchUserDetails = createAsyncThunk(
  'users/user-details',
  async (id: string) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}?apiKey=12345678987654321`
      )
        .then((response) => response.json())
        .then((json) => json);

      return response;
    } catch (error) {
      console.error(error);
    }
  }
);

export const createUser = createAsyncThunk(
  'users/create-user',
  async (payload: CreateUserPayload) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/create/?apiKey=12345678987654321',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      )
        .then((response) => response.json())
        .then((json) => json);

      return response;
    } catch (error) {
      console.error(error);
    }
  }
);
