import './form.scss';

import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/app/rootStore';
import { createUser } from 'src/store';
import { CreateUserPayload } from 'src/types/User';

export const UserForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const nameRef = useRef<any>();
  const usernameRef = useRef<any>();
  const idRef = useRef<any>();
  const emailRef = useRef<any>();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const payload: CreateUserPayload = {
      id: -1,
      name: nameRef?.current?.value || '',
      email: emailRef?.current?.value || '',
      username: usernameRef?.current?.value || '',
      company: {
        name: 'LeoVegas',
      },
    };

    dispatch(createUser(payload));
  };

  return (
    <>
      <h3>Create User</h3>
      <form className="user-form" onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" ref={idRef} />

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" ref={nameRef} />

        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" ref={usernameRef} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" ref={emailRef} />

        <button className="submit-button" type="submit" onClick={handleSubmit}>
          Create User
        </button>
      </form>
    </>
  );
};
